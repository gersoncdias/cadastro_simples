<?php

/**
 * Interface StateServiceInterface
 * @category Yii2
 * @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

namespace cadastro_simples\modules\register\services;

use cadastro_simples\modules\register\models\State;

interface StateServiceInterface 
{
    function State();

    function StateSearch();

    function buscarPorId(int $id);

    function buscarTodos();

    function buscarEstadosRelacionados();

    function salvar(State $state);

    function deletar($id);

}
