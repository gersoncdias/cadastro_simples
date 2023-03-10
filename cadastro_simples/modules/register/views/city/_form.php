<?php

/**
* @category Yii2
* @package  Jefferson C. Dias
* @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

use yii\helpers\Html;
use kartik\builder\Form;
use kartik\form\ActiveForm;
use kartik\builder\FormGrid;

/* @var $this yii\web\View */
/* @var $modelcadastro_simples\modules\register\models\City */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="city-form">

    <?php $form = ActiveForm::begin([
        'enableAjaxValidation' => true,
        'validateOnBlur' => true,
        'validateOnSubmit' => false,
    ]) ?>

    <?= FormGrid::widget([
        'model' => $model,
        'form' => $form,
        'autoGenerateColumns' => false,
        'rows' => [
            [
                'attributes' => [
                    'name' => ['type' => Form::INPUT_TEXT, 'options' => ['maxlength' => true]],
                    'state_id' => ['type' => Form::INPUT_WIDGET, 'widgetClass' => '\kartik\select2\Select2', 'options' => ['data' => $states, 'options' => ['placeholder' => '« Selecione »'], 'pluginOptions' => ['allowClear' => true]]],
                    'is_capital' => ['type' => Form::INPUT_CHECKBOX],
                    'actions' => [
                         'type' => Form::INPUT_RAW, 'value' =>
                             Html::submitButton('Fechar', ['class' => 'btn btn-default', 'style' => 'margin-top:20px;', 'data-dismiss' => 'modal']).
                             Html::submitButton($model->isNewRecord ? 'Criar' : 'Alterar', ['class' => $model->isNewRecord ? 'btn btn-success pull-right' : 'btn btn-primary pull-right'])
                    ]
                ]
            ]
        ]
    ])  ?>

    <?php ActiveForm::end() ?>

</div>
