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
    storage: {},
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
        firebase.auth().languageCode = 'ptbr';
        this.storage = firebase.storage().ref().child('pictures');

        // let item = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
        // this.storage.child('imagem-teste.jpg').put(item).then(snapshot => {
        //     snapshot.ref.getDownloadURL().then(function(downloadURL) {
        //         console.log('File available at', downloadURL);
        //       });
        // });
        // console.log(this.storage);
    },
    isWherePrivatePage: function(){
        return window.location.href.indexOf('principal') !== -1 || window.location.href.indexOf('meu-cadastro') !== -1;
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