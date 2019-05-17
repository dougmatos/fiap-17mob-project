var meuCadastro = {
  updateUser: function(){
    document.getElementById('email').value = main.localUser.email || '';
    document.getElementById('img-user').src = main.localUser.photoUrl || "img/default-photo.png";
    document.getElementById('name').value = main.localUser.displayName || '';
    document.getElementById('github-user').value = main.localUser.githubUser || '';
  },
  initialize: function () {

      //f (!user) this.goToLoginPage();

      //console.log(main.userLoged.uid);

      meuCadastro.updateUser();
      
      document.getElementById('btn-sair').addEventListener('click', () => 
          firebase.auth().signOut().then(() => this.goToLoginPage()));
  },
  goToLoginPage: function(){
      window.location = "index.html";
  },
  
};

main.onStart = meuCadastro.initialize;