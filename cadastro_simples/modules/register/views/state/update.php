<?php

/**
* @category Yii2
* @package  Jefferson C. Dias
* @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

$this->title = 'Alterar Estado' . ' ' . $model->name;
?>
<div class="state-update">
    <div class="panel panel-default" style="margin-top:10px;">
        <div class="panel-body">
            <?= $this->render('_form', [
                'model' => $model,
            ]) ?>
        </div>
    </div>
</div>
