class painelEstadosPage {
    constructor() {
        this.painel_client = '.panel'
        this.criar_estado = '.treeview-menu > :nth-child(1) > a > span'
        this.btn_criar_estados = '.btn-group > .btn-success'
        this.btn_modal_criar_estado = '.col-sm-12 > .btn-success'
        this.btn_modal_alterar = '.col-sm-12 > .btn-primary'
        this.txt_alterado_sucesso = '#w0-success-0'
        this.exibir_estado = '[data-key="1"] > [data-col-seq="3"] > .btn-success > .glyphicon'
        this.btn_fechar_estado_criar = '.btn-default'
        this.txt_painel_estados = 'h1'
        this.txt_exibir_estado = '.modal-header > span'
        this.txt_modal_dados_estado = '.panel-body'
        this.input_nome_estado = '#state-name'
        this.txt_modal_edit = '.modal-header'
        this.btn_fechar_edit = '.btn-default'
        this.input_cod_estado = '#state-code'
        this.edita_estado = '[data-key="2"] > [data-col-seq="3"] > a.btn.showModalButton[title="Alterar Estado"] i.glyphicon.glyphicon-pencil'
        this.grid_painel_estado = '[class="kv-grid-table table table-bordered table-striped kv-table-wrap"]'

    }

}
module.exports = painelEstadosPage