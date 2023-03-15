class loginPage {
    constructor() {

        this.campo_login ='#loginform-username';
        this.campo_senha = '#loginform-password';
        this.btn_login = '.btn';
        this.txt_titulo = 'h3';
        this.msg_error = '.field-loginform-password > .help-block'
        this.user_msg_erro = '.field-loginform-username > .help-block'
    }
}

module.exports = loginPage