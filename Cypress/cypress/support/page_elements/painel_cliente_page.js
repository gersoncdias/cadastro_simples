class painelClientePage {
    constructor() {
        this.painel_client = '.panel'
        this.txt_painel_cliente = 'h1'
        this.grid_painelPpaciente = '[class="kv-grid-table table table-bordered table-striped kv-table-wrap"]'
        this.edita_cliente = '[data-key="2"] > [data-col-seq="3"] > a.btn.showModalButton[title="Alterar Cliente"] i.glyphicon.glyphicon-pencil'
        this.exibir_cliente = '[data-key="2"] > [data-col-seq="3"] > a.btn.showModalButton[title="Exibir Cliente"]'
        this.btn_fechar_edit = 'button.btn.btn-default[data-dismiss="modal"]'
        this.btn_alterar_edit = '#w0 > .btn-primary'
        this.txt_modal_edit = '.modal-header'
        this.txt_alterado_sucesso = ' #w0-success-0'
        this.txt_modal_dados_pct = '.panel-body'
        
    }    
       
}

module.exports = painelClientePage
