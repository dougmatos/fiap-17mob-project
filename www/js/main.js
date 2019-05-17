var main = {
    onStart : () => { },
    initialize: function(){

        this.initializeFirebase();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userLoged = user;

                this.localUser = {
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoUrl: user.photoURL
                };

                this.db.collection('users')
                    .where('user_id', '==', this.localUser.uid)
                    .get().then(snapshot => {
                        if(!snapshot.empty){
                            localUser.githubUser = snapshot.doc[0].githubUser
                        }
                    });

                console.log(this.localUser);
                if (!this.isWherePrivatePage() && !this.isWhereSignInPage())
                    window.location = 'principal.html';
                
            } else {
                if (this.isWherePrivatePage())
                    window.location = 'index.html';
            }
            this.onStart();
        });
    },
    userLoged: {},
    localUser:{},
    storage: {},
    db: {},
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
        this.db = firebase.firestore();
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
    }
};

main.initialize();