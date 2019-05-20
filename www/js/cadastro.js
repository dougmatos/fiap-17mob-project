var cadastro = {
    
    initialize: function() {

        document.getElementById('btn-cadastrar').addEventListener('click', () => {

            let formItems = this.getItemsForm();
            if(!formItems.isValid()){
                formItems.showErrorsIn(main.errorArea);
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(formItems.email, formItems.password)
                .then(() => this.successedRegister(formItems.githubUser))
                .catch((error) => main.errorArea(error.message));
        });
    },
    successedRegister: function (githubUser){

        document.getElementById('instucoes').style.display = 'none';

        let formArea = document.getElementById('form-cadastro');
        formArea.innerHTML = '<div class="alert alert-success">Cadastro efetuado com sucesso!</div>' + 
            '<p class="text-left w-100">Você será direcionado para a tela inicial</p>';
        setTimeout(() => window.location = 'principal.html', 2000);
    },
    getItemsForm: function() {
        return {
            email: document.getElementById('email').value,
            password: document.getElementById('senha').value,
            passwordConfirmation: document.getElementById('senha2').value,
            errors: [],
            isValid: function(){
                this.errors = [];
                if(this.email === '')
                    this.errors.push('Digite um e-mail');
                if(this.password === '')
                    this.errors.push('Digite uma senha');
                if(this.passwordConfirmation === '')
                    this.errors.push('Digite a sua senha novamente no campo de confirmação');
                if(this.password !== this.passwordConfirmation)
                    this.errors.push('A senha e a confirmação da senha não são iguais');

                return this.errors.length === 0; 
            },
            showErrorsIn: function(displayErrors){
                displayErrors(this.errors);
            }
        };
    }
};

cadastro.initialize();