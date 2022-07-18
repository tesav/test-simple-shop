<?php

namespace App\Service;

use Doctrine\Persistence\ManagerRegistry;

class DatabaseUtil
{
    private ManagerRegistry $managerRegistry;

    public function __construct(ManagerRegistry $managerRegistry)
    {
        $this->managerRegistry = $managerRegistry;
    }

    public function walkValues(callable $callback, string $sql): string
    {
        return preg_replace_callback('/(?<=values)\s+\([^)]+\)/im', function ($m) use ($callback) {
            $values = array_map('trim', explode(',', trim($m[0], ' ()')));
            array_walk($values, $callback);
            return sprintf(' (%s)', implode(', ', $values));
        }, $sql);
    }

    public function fixSequence(string $table): void
    {
        $this->managerRegistry->getConnection()->exec(sprintf('
            BEGIN;
            -- protect against concurrent inserts while you update the counter
            LOCK TABLE %1$s IN EXCLUSIVE MODE;
            -- Update the sequence
            SELECT setval(\'%1$s_id_seq\', COALESCE((SELECT MAX(id)+1 FROM %1$s), 1), false);
            COMMIT;
        ', $table));
    }
}
