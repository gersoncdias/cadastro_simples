<?php

return [
    'migrate' => [
        'class' => 'yii\console\controllers\MigrateController',
        'migrationPath' => '@cadastro_simples/migrations',
    ],
    'migrate-routes' => [
        'class' => 'yii\console\controllers\MigrateController',
        'migrationPath' => '@cadastro_simples/migrations/routes',
    ],
    'migrate-users' => [
        'class' => 'yii\console\controllers\MigrateController',
        'migrationPath' => '@cadastro_simples/migrations/users',
    ],
    'migrate-menus' => [
        'class' => 'yii\console\controllers\MigrateController',
        'migrationPath' => '@cadastro_simples/migrations/menus',
    ],
    'migrate-assignments' => [
        'class' => 'yii\console\controllers\MigrateController',
        'migrationPath' => '@cadastro_simples/migrations/assignments',
    ],
    'migrate-rules' => [
        'class' => 'yii\console\controllers\MigrateController',
        'migrationPath' => '@cadastro_simples/migrations/rules',
    ],
    'migrate-rbac' => [
        'class' => 'yii\console\controllers\MigrateController',
        'migrationPath' => '@yii/rbac/migrations',
    ],
    'migrate-admin' => [
        'class' => 'yii\console\controllers\MigrateController',
        'migrationPath' => '@mdm/admin/migrations',
    ],
    'migrate-datas' => [
        'class' => 'yii\console\controllers\MigrateController',
        'migrationPath' => '@cadastro_simples/migrations/datas',
    ],
];
