var cadastro = {
    
    initialize: function () {

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCnu4z2YMPZJ4HGoPkd0AOTwdM6R0CixFo",
            authDomain: "final-cordova.firebaseapp.com",
            databaseURL: "https://final-cordova.firebaseio.com",
            projectId: "final-cordova",
            storageBucket: "final-cordova.appspot.com",
            messagingSenderId: "19026174749"
        };
        firebase.initializeApp(config);

        document.getElementById('btn-cadastrar').addEventListener('click', () => {
            console.log('aeee');
        });
    },

    
};

cadastro.initialize();