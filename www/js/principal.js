var principal = {

    initialize: function () {

        //console.log(main.userLoged);    

        
        //f (!user) this.goToLoginPage();

        document.getElementById('btn-sair').addEventListener('click', () => 
            firebase.auth().signOut().then(() => this.goToLoginPage()));
    },
    goToLoginPage: function(){
        window.location = "index.html";
    }
};

main.onStart = principal.initialize;
