<?php

$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'cadastro_simples',
    'name' => 'cadastro_simples',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'cadastro_simples\controllers',
    'bootstrap' => ['log'],
    'modules' => [
        'register' => 'cadastro_simples\modules\register\Module',
        'gridview' => '\kartik\grid\Module',
        'datecontrol' => require(__DIR__ . '/../../common/config/datecontrol.php'),
    ],
    'components' => [
        'assetManager' => [
            'forceCopy' => true,
        ],
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=db;dbname=cadastro_simples-test',
            'username' => 'root',
            'password' => 'root',
            'charset' => 'utf8',
            'attributes' => [
                PDO::MYSQL_ATTR_LOCAL_INFILE => true
            ],
        ],
        'request' => [
            'cookieValidationKey' => '-sqOI0mlTYB8d2qDwkdnu-UudBJQaNwz',
            'csrfParam' => '_csrf-cadastro_simples',
        ],
        'session' => [
            'name' => 'cadastro_simples',
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => false,
            'authTimeout' => 1800, // 20 minutes
            'identityCookie' => ['name' => '_identity-cadastro_simples', 'httpOnly' => true],
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'authManager' => [
            'class' => 'yii\rbac\DbManager',
            'defaultRoles' => ['autenticado', 'convidado'],
        ],
        'urlManager' => [
            'class' => 'yii\web\UrlManager',
            'enablePrettyUrl' => true,
            'showScriptName' => false,
        ],
    ],
    'params' => $params,
    'container' => [
        'singletons' => require(__DIR__ . '/di-services.php'),
        'definitions' => require(__DIR__ . '/di-widgets.php')
    ],
];
