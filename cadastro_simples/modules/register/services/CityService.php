<?php

/**
 * @Class CityService
 * @category Yii2
 * @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

namespace cadastro_simples\modules\register\services;

use common\bases\BaseService;
use common\components\WSAHelper;
use cadastro_simples\modules\register\models\City;
use cadastro_simples\modules\register\models\search\CitySearch;

class CityService extends BaseService implements CityServiceInterface 
{
    /**
    * Cria um objeto City.
    * @return object
    */
    public function City()
    {
        return new City();
    }

    /**
    * Cria um objeto CitySearch.
    * @return object
    */
    public function CitySearch()
    {
        return new CitySearch();
    }

    /**
     * Busca a partir do ID
     * @return boolean
     */
    public function buscarPorId(int $id)
    {
        if (($model = City::findOne($id)) !== null) {
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
        return City::find()->orderBy('name')->all();
    }

    /**
     * Busca a partir do ID do estado
     * @return boolean
     */
    public function buscarPorEstado(int $id)
    {
        return City::find()->where(['state_id' => $id])->orderBy('name')->all();
    }

    /**
     * Salva no db.
     * @param City $citymodel
     * @return boolean
     */
    public function salvar(City $city)
    {
        return $city->save();
    }

    /**
     * Deleta registro a partir do ID
     * @param int $id
     * @return boolean
     */
    public function deletar($id)
    {
        if (City::deleteAll(['in', 'id', $id])) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * lista constantes
     */
    public function listarCapital()
    {
        return WSAHelper::getConstantes(City::className(), 'CAPITAL_');
    }

}
