<?php

/**
 * @Class StateService
 * @category Yii2
 * @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

namespace cadastro_simples\modules\register\services;

use common\bases\BaseService;
use cadastro_simples\modules\register\models\State;
use cadastro_simples\modules\register\models\search\StateSearch;

class StateService extends BaseService implements StateServiceInterface 
{
    /**
    * Cria um objeto State.
    * @return object
    */
    public function State()
    {
        return new State();
    }

    /**
    * Cria um objeto StateSearch.
    * @return object
    */
    public function StateSearch()
    {
        return new StateSearch();
    }

    /**
     * Busca a partir do ID
     * @return boolean
     */
    public function buscarPorId(int $id)
    {
        if (($model = State::findOne($id)) !== null) {
            return $model;
        } else {
            return false;
        }
    }

    /**
     *  Busca todos os registros
     * @return object
     */
    public function buscarTodos()
    {
        return State::find()->orderBy('name')->all();
    }

    /**
     *  Busca todos os registros
     * @return object
     */
    public function buscarEstadosRelacionados()
    {
        return State::find()->joinWith('cities', true, 'INNER JOIN')->orderBy('name')->all();
    }

    /**
     * Salva no db.
     * @param State $statemodel
     * @return boolean
     */
    public function salvar(State $state)
    {
        return $state->save();
    }

    /**
     * Deleta registro a partir do ID
     * @param int $id
     * @return boolean
     */
    public function deletar($id)
    {
        if (State::deleteAll(['in', 'id', $id])) {
            return true;
        } else {
            return false;
        }
    }

}
