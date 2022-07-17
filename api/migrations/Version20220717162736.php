<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220717162736 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE catalog ALTER id TYPE BIGINT');
        $this->addSql('ALTER TABLE catalog ALTER id DROP DEFAULT');
        $this->addSql('ALTER TABLE goods ALTER id TYPE BIGINT');
        $this->addSql('ALTER TABLE goods ALTER id DROP DEFAULT');
        $this->addSql('ALTER TABLE goods ALTER id_catalog TYPE BIGINT');
        $this->addSql('ALTER TABLE goods ALTER id_catalog DROP DEFAULT');
        $this->addSql('ALTER TABLE goods ALTER id_measure TYPE BIGINT');
        $this->addSql('ALTER TABLE goods ALTER id_measure DROP DEFAULT');
        $this->addSql('ALTER TABLE measure ALTER id TYPE BIGINT');
        $this->addSql('ALTER TABLE measure ALTER id DROP DEFAULT');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE measure ALTER id TYPE INT');
        $this->addSql('ALTER TABLE measure ALTER id DROP DEFAULT');
        $this->addSql('ALTER TABLE catalog ALTER id TYPE INT');
        $this->addSql('ALTER TABLE catalog ALTER id DROP DEFAULT');
        $this->addSql('ALTER TABLE goods ALTER id TYPE INT');
        $this->addSql('ALTER TABLE goods ALTER id DROP DEFAULT');
        $this->addSql('ALTER TABLE goods ALTER id_catalog TYPE INT');
        $this->addSql('ALTER TABLE goods ALTER id_catalog DROP DEFAULT');
        $this->addSql('ALTER TABLE goods ALTER id_measure TYPE INT');
        $this->addSql('ALTER TABLE goods ALTER id_measure DROP DEFAULT');
    }
}
