<?php

namespace App\Seeds;

use App\Service\DatabaseUtil;
use Evotodi\SeedBundle\Command\Seed;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserSeed extends Seed
{

    public function __construct(
        private UserPasswordHasherInterface $passwordHasher,
        private DatabaseUtil                $databaseUtil,
        string                              $name = null
    )
    {
        parent::__construct($name);
    }

    /**
     * Return the name of your seed
     */
    public static function seedName(): string
    {
        /**
         * The seed won't load if this is not set
         * The resulting command will be seed:user
         */
        return 'user';
    }

    /**
     * Optional ordering of the seed load/unload.
     * Seeds are loaded/unloaded in ascending order starting from 0.
     * Multiple seeds with the same order are randomly loaded.
     */
    public static function getOrder(): int
    {
        return 1;
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
        $this->unload($input, $output);

        $password = 'Programmer1';

        $users = [
            [
                'email' => 'admin@admin.com',
                'password' => $password,
                'roles' => ['ROLE_ADMIN'],
            ],
            [
                'email' => 'user@user.com',
                'password' => $password,
                'roles' => ['ROLE_USER'],
            ],
            [
                'email' => 'user1@user.com',
                'password' => $password,
                'roles' => ['ROLE_USER'],
            ],
            [
                'email' => 'user2@user.com',
                'password' => $password,
                'roles' => ['ROLE_USER'],
            ],
        ];

        $entityManager = $this->manager->getManager();

        foreach ($users as $user) {
            $userRepo = new User();
            $userRepo->setEmail($user['email']);
            $userRepo->setRoles($user['roles']);
            $userRepo->setPassword($this->passwordHasher->hashPassword($userRepo, $user['password']));
            $entityManager->persist($userRepo);
        }
        $entityManager->flush();
        $entityManager->clear();

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
        //Clear the table
        $this->databaseUtil->truncate('user');

        /**
         * Must return an exit code.
         * A value other than 0 or Command::SUCCESS is considered a failed seed load/unload.
         */
        return 0;
    }
}
