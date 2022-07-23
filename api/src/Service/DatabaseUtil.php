<?php

namespace App\Service;

use Doctrine\Persistence\ManagerRegistry;

class DatabaseUtil
{

    public function __construct(
        private ManagerRegistry $managerRegistry
    )
    {
    }

    public function disableCheckForeignKey(): void
    {
        $this->setSessionReplicationRole('replica');
    }

    public function enableCheckForeignKey(): void
    {
        $this->setSessionReplicationRole('origin');
    }

    public function setSessionReplicationRole(string $role): void
    {
        $this->managerRegistry->getConnection()->exec(sprintf("SET session_replication_role = '%s'", $role));
    }

    public function walkSQLValues(callable $callback, string $sql): string
    {
        return preg_replace_callback('/(?<=values)\s+\([^)]+\)/im', function ($m) use ($callback) {
            $values = array_map('trim', explode(',', trim($m[0], ' ()')));
            array_walk($values, $callback);
            return sprintf(' (%s)', implode(', ', $values));
        }, $sql);
    }

    public function fixSequence(string $tableName): void
    {
        $this->managerRegistry->getConnection()->exec(sprintf('
            BEGIN;
            -- protect against concurrent inserts while you update the counter
            LOCK TABLE "%1$s" IN EXCLUSIVE MODE;
            -- Update the sequence
            SELECT setval(\'%1$s_id_seq\', COALESCE((SELECT MAX(id)+1 FROM "%1$s"), 1), false);
            COMMIT;
        ', $tableName));
    }

    public function truncate(string $tableName): void
    {
        $this->managerRegistry->getConnection()->exec(sprintf('TRUNCATE "%s" CASCADE', $tableName));
        $this->fixSequence($tableName);
    }
}
