<?php

/**
 * @Class Customer
 * @category Yii2
 * @author  Jefferson C. Dias <jeffersoncosta2@hotmail.com>
*/

namespace cadastro_simples\modules\register\models;

use common\models\User;
use common\bases\BaseActiveRecord;

/**
 * This is the model class for table "register_customer".
 *
 * @property integer $id
 * @property string $name
 * @property integer $city_id
 * @property integer $created_by
 * @property string $created_at
 * @property integer $updated_by
 * @property string $updated_at
 *
 * @property City $city
 */
class Customer extends BaseActiveRecord
{
    public $state_id;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'register_customer';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'city_id'], 'required'],
            [['city_id', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 64],
            [['name'], 'filter', 'filter' => 'mb_strtoupper'],
            [['name', 'city_id'], 'unique', 'targetAttribute' => ['name', 'city_id'], 'message' => 'A combinação de "Nome" e "Cidade" já existe.'],
            [['city_id'], 'exist', 'skipOnError' => true, 'targetClass' => City::className(), 'targetAttribute' => ['city_id' => 'id']]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'Código',
            'name' => 'Nome',
            'city_id' => 'Cidade',
            'state_id' => 'Estado',
            'created_by' => 'Criado Por',
            'created_at' => 'Criado Em',
            'updated_by' => 'Alterado Por',
            'updated_at' => 'Alterado Em',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCity()
    {
        return $this->hasOne(City::className(), ['id' => 'city_id']);
    }

    /**
    * @return \yii\db\ActiveQuery
    */
    public function getCadastradoPor()
    {
        return $this->hasOne(User::className(), ['id' => 'created_by']);
    }

    /**
    * @return \yii\db\ActiveQuery
    */
    public function getAlteradoPor()
    {
        return !is_null($this->updated_by) ? $this->hasOne(User::className(), ['id' => 'updated_by']) : null;
    }

}
