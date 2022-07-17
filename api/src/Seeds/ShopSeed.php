<?php

namespace App\Seeds;

use Evotodi\SeedBundle\Command\Seed;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use App\Entity\Catalog;
use Symfony\Component\Finder\Finder;

class ShopSeed extends Seed
{

    /**
     * Return the name of your seed
     */
    public static function seedName(): string
    {
        /**
         * The seed won't load if this is not set
         * The resulting command will be seed:user
         */
        return 'catalog';
    }

    /**
     * Optional ordering of the seed load/unload.
     * Seeds are loaded/unloaded in ascending order starting from 0.
     * Multiple seeds with the same order are randomly loaded.
     */
    public static function getOrder(): int
    {
        return 0;
    }

    /**
     * The load method is called when loading a seed
     */
    public function load(InputInterface $input, OutputInterface $output): int
    {

        /**
         * Doctrine logging eats a lot of memory, this is a wrapper to disable logging
         */
        $this->disableDoctrineLogging();

        //
        $this->unload($input, $output);

        $finder = new Finder();
        $finder->files()->name('/g|e\.sql$/i')->in(__DIR__ . '/data/');

        $this->manager->getConnection()->exec("SET session_replication_role = 'replica'");

        foreach ($finder as $file) {
            $sql = preg_replace('/^(insert\s+into\s+)[a-z]+\.(.+)/im', '\1\2', $file->getContents());
            $this->manager->getConnection()->exec($sql);
        }

        $this->manager->getConnection()->exec("SET session_replication_role = 'origin'");

        /**
         * Must return an exit code.
         * A value other than 0 or Command::SUCCESS is considered a failed seed load/unload.
         */
        return 0;
    }

    /**
     * The unload method is called when unloading a seed
     */
    public function unload(InputInterface $input, OutputInterface $output): int
    {
        //Clear tables
        $finder = new Finder();
        $finder->files()->name('/\.sql$/i')->in(__DIR__ . '/data/');

        $names = array_map(fn($file) => pathinfo($file, PATHINFO_FILENAME), array_keys(iterator_to_array($finder)));
        $this->manager->getConnection()->exec(sprintf('TRUNCATE %s CASCADE', implode(', ', $names)));

        /**
         * Must return an exit code.
         * A value other than 0 or Command::SUCCESS is considered a failed seed load/unload.
         */
        return 0;
    }
}
