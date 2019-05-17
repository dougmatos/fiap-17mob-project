var meuCadastro = {

  initialize: function () {

      //f (!user) this.goToLoginPage();

      //console.log(main.userLoged.uid);


      document.getElementById('email').value = main.userLoged.email;

      
      document.getElementById('btn-sair').addEventListener('click', () => 
          firebase.auth().signOut().then(() => this.goToLoginPage()));
  },
  goToLoginPage: function(){
      window.location = "index.html";
  }
};

main.onStart = meuCadastro.initialize;