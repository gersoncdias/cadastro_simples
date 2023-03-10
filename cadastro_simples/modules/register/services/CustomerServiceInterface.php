<?php

/**
 * Interface CustomerServiceInterface
 * @category Yii2
 * @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

namespace cadastro_simples\modules\register\services;

use cadastro_simples\modules\register\models\Customer;

interface CustomerServiceInterface 
{
    function Customer();

    function CustomerSearch();

    function buscarPorId(int $id);

    function buscarTodos();

    function salvar(Customer $customer);

    function deletar($id);

}
