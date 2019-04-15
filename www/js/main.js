var main = {
    onStart : () => { },
    initialize: function(){

        this.initializeFirebase();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userLoged = user;
                if (!this.isWherePrivatePage() && !this.isWhereSignInPage())
                    window.location = 'principal.html';
                
            } else {
                if (this.isWherePrivatePage())
                    window.location = 'index.html';
            }
            this.onStart();
        });
    },
    initializeFirebase: function(){
        var config = {
            apiKey: "AIzaSyCnu4z2YMPZJ4HGoPkd0AOTwdM6R0CixFo",
            authDomain: "final-cordova.firebaseapp.com",
            databaseURL: "https://final-cordova.firebaseio.com",
            projectId: "final-cordova",
            storageBucket: "final-cordova.appspot.com",
            messagingSenderId: "19026174749"
        };
        firebase.initializeApp(config);
        firebase.auth().languageCode = 'pt-br';
    },
    isWherePrivatePage: function(){
        return window.location.href.indexOf('principal') !== -1;
    },
    isWhereSignInPage: function(){
        return window.location.href.indexOf('cadastro') !== -1;
    },
    errorArea: function (message) {
        let errorArea = document.getElementById('message-error');
        errorArea.innerHTML = '';

        if (typeof (message) === 'string')
            message = [message];

        for (var i = 0; i < message.length; i++) {
            let el = document.createElement('p');
            el.innerHTML = message[i];
            errorArea.appendChild(el);
        }
        errorArea.style.display = "block";
    },
    userLoged: {}
};

main.initialize();