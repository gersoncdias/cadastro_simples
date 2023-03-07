<?php

/**
 * @Class Module
 * @category Yii2
 * @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

namespace cadastro_simples\modules\register;

use Yii;
use common\bases\BaseModule;

class Module extends BaseModule
{
    public $controllerNamespace = 'cadastro_simples\modules\register\controllers';

    public function init()
    {
        parent::init();
        $this->registerTranslations();
    }

    public function registerTranslations()
    {
        Yii::$app->i18n->translations['*'] = [
            'class' => 'yii\i18n\PhpMessageSource',
            'basePath' => '@cadastro_simples/modules/register/messages',
        ];
    }
}
