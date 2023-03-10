<?php

/**
* @category Yii2
* @package  Jefferson C. Dias
* @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

namespace cadastro_simples\modules\register\controllers;

use Yii;
use yii\web\Response;
use yii\widgets\ActiveForm;
use common\bases\BaseController;
use cadastro_simples\modules\register\services\StateServiceInterface;

/**
 * StateController implements the CRUD actions for State model.
 */
class StateController extends BaseController
{
    private $stateService;

    /**
     * Contrutor para injeção de dependencia (Serviços)
     * @param int $id
     * @param Module $module
     * @param StateServiceInterface $stateService
     * @param array $config
     */
    public function __construct(
        $id,
        $module,
        StateServiceInterface $stateService,
        $config = []
    )
    {
        $this->stateService = $stateService;
        parent::__construct($id, $module, $config);
    }

    /**
     * Listar todos os State modelos.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = $this->stateService->stateSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
        $render = Yii::$app->request->isAjax ? 'renderAjax' : 'render';
        return $this->$render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single State model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->renderAjax('view', [
            'model' => $this->stateService->buscarPorId($id),
        ]);
    }

    /**
     * Creates a new State model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = $this->stateService->state();
        return $this->salvar($model, 'create');
    }

    /**
     * Updates an existing State model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->stateService->buscarPorId($id);
        return $this->salvar($model, 'update');
    }

    /**
     * Salvar um registro State no banco.
     * @return boolean
     */
    private function salvar($model, $view)
    {
        if (!is_null(Yii::$app->request->post('ajax')) && $model->load(Yii::$app->request->post())) {
            Yii::$app->response->format = Response::FORMAT_JSON;
            return ActiveForm::validate($model);
        }

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            Yii::$app->response->format = Response::FORMAT_JSON;
            $mensagem = $view == 'create' ? 'CRIADO' : 'ALTERADO';
            if ($this->stateService->salvar($model)) {
                Yii::$app->session->setFlash('success', "REGISTRO $mensagem COM SUCESSO!");
            return true;
        } else {
                Yii::$app->session->setFlash('error', "ERRO AO $mensagem O REGISTRO.");
                return false;
            }
        } else {
            return $this->renderAjax($view, [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing State model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        if ($this->stateService->deletar(Yii::$app->request->post('ids'))) {
            Yii::$app->session->setFlash('success', 'REGISTRO DELETADO COM SUCESSO!');
            return true;
        } else {
            Yii::$app->session->setFlash('error', 'ERRO AO DELETAR O REGISTRO.');
            return false;
        }
    }
}
