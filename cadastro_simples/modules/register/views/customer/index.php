<?php

/**
* @category Yii2
* @package  Jefferson C. Dias
* @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

use yii\widgets\Pjax;
use kartik\grid\GridView;
use kartik\select2\Select2;
use common\helpers\ModalAjaxHelper;
use common\widgets\OperationsModalWidget;

/* @var $this yii\web\View */
/* @var $searchModelcadastro_simples\modules\register\models\CustomerSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Clientes';
$this->params['breadcrumbs'][] = $this->title;
?>
<?php Pjax::begin(['id'=>'gridForm', 'timeout' => false, 'enablePushState' => false]) ?>
    <?= ModalAjaxHelper::widget(['id' => 'modal-ajax', 'selector' => '.showModalButton', 'size' => ModalAjaxHelper::SIZE_LARGE, 'options' => ['class' => 'header-primary', 'data-backdrop' => 'static', 'style' => 'top: 0px;', 'tabindex' => false], 'autoClose' => true, 'pjaxContainer' => '#gridForm']) ?>
    <?= \common\widgets\AlertWidget::widget() ?>
    <?php $gridColumns = [
        ['attribute' => 'id', 'options' => ['class'=>'col-sm-1']],
        'name',
        [
            'attribute' => 'city_id',
            'value' => 'city.name_code',
            'filter' => Select2::widget([
                'model' => $searchModel,
                'attribute' => 'city_id',
                'data' => $cities,
                'options' => ['placeholder' => '« Todos »', 'class' => 'form-control'],
                'pluginOptions' => [
                    'allowClear' => true
                ]
            ])
        ],
        ['class' => 'common\components\CrudModalActionColumn'],
        ['class' => '\kartik\grid\CheckboxColumn']
    ] ?>
    <?= GridView::widget([
        'id' => 'wsaGrid',
        'dataProvider' => $dataProvider,
        'columns' => $gridColumns,
        'filterModel' => $searchModel,
        'filterSelector' => 'select[name="per-page"]',
        'responsive' => false,
        'panel' => [
            'type' => GridView::TYPE_DEFAULT,
        ],
        'toolbar' => [
            ['content'=> OperationsModalWidget::widget(['btName' => 'Cliente'])],
            \nterms\pagesize\PageSize::widget(['label' => 'Itens', 'options' => ['style'=>'height: 34px;']])
        ]
    ]) ?>
<?php Pjax::end() ?>
