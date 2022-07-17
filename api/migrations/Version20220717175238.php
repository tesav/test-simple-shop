<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220717175238 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE greeting_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE catalog (id BIGINT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE goods (id BIGINT NOT NULL, id_catalog BIGINT DEFAULT NULL, id_measure BIGINT NOT NULL, hidden SMALLINT NOT NULL, name VARCHAR(255) NOT NULL, quantity DOUBLE PRECISION NOT NULL, regprice DOUBLE PRECISION NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_563B92DC5B19B37 ON goods (id_catalog)');
        $this->addSql('CREATE INDEX IDX_563B92D5E9AB055 ON goods (id_measure)');
        $this->addSql('CREATE TABLE greeting (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE measure (id BIGINT NOT NULL, name VARCHAR(64) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92DC5B19B37 FOREIGN KEY (id_catalog) REFERENCES catalog (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92D5E9AB055 FOREIGN KEY (id_measure) REFERENCES measure (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE goods DROP CONSTRAINT FK_563B92DC5B19B37');
        $this->addSql('ALTER TABLE goods DROP CONSTRAINT FK_563B92D5E9AB055');
        $this->addSql('DROP SEQUENCE greeting_id_seq CASCADE');
        $this->addSql('DROP TABLE catalog');
        $this->addSql('DROP TABLE goods');
        $this->addSql('DROP TABLE greeting');
        $this->addSql('DROP TABLE measure');
    }
}
