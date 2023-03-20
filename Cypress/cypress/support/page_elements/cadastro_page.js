class cadastroPage {
    constructor() {
        this.menu_cadastro = '.treeview'
        this.criar_cliente = '.treeview-menu > :nth-child(3) > a > span'
        this.btn_criar_cliente = '.btn-group > .btn-success'
        this.modal_criar_cliente = '.modal-header'
        this.input_nome_cliente  = '#customer-name'
        this.select_estado = '#select2-customer-state_id-container'
        this.select_cidade = '#select2-customer-city_id-container > .select2-selection__placeholder'
        this.select_dropdown = '.select2-results__option'
        this.btn_modal_criar_cliente = '#w0 > button.btn.btn-success.pull-right'
        this.msg_sucesso = '#w0-success-0'
    }    
       
}

module.exports = cadastroPage