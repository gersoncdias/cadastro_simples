class painelCidadesPage {
    constructor() {
        this.painel_client = '.panel'
        this.criar_cidade = '.treeview-menu > :nth-child(2) > a > span'
        this.btn_criar_cidade = '.btn-group > .btn-success'
        this.btn_modal_criar_cidade = '.col-sm-12 > .btn-success'
        this.btn_modal_alterar = '.col-sm-12 > .btn-primary'
        this.txt_alterado_sucesso = '#w0-success-0'
        this.exibir_cidade = '[data-key="1"] > [data-col-seq="3"] > .btn-success > .glyphicon'
        this.btn_fechar_cidade_criar = '.btn-default'
        this.txt_painel_cidade = 'h1'
        this.btn_criar = '.col-sm-12 > .btn-success'
        this.txt_exibir_cidade = '.modal-header > span'
        this.txt_modal_dados_cidade = '.panel-body'
        this.input_nome_cidade = '#city-name'
        this.txt_modal_cidade = '.modal-header'
        this.select_cidade = '#select2-city-state_id-container'
        this.btn_fechar_cidade = '.btn-default'
        this.input_cod_cidade = '#state-code'
        this.check_box = '#city-is_capital'
        this.edita_cidade = '[data-key="2"] > [data-col-seq="3"] > a.btn.showModalButton[title="Alterar Estado"] i.glyphicon.glyphicon-pencil'
        this.grid_painel_cidade = '[class="kv-grid-table table table-bordered table-striped kv-table-wrap"]'

    }

}
module.exports = painelCidadesPage