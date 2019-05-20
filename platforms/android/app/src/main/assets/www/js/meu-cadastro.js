var meuCadastro = {
  updateUser: function(){
    document.getElementById('email').value = main.localUser.email || '';
    document.getElementById('img-user').src = (main.localUser.photo) ? 'data:image/jpeg;base64,' + main.localUser.photo : "img/default-photo.png";
    document.getElementById('name').value = main.localUser.displayName || '';
    document.getElementById('github-user').value = main.localUser.githubUser || '';
  },
  initialize: function () {

    meuCadastro.updateUser();
      
    cbDataSuccess = data => {
      document.getElementById('img-user').src = 'data:image/jpeg;base64,' + data;
      main.db.collection('users').doc(main.localUser.uid).set({
        photo: data
      });
    };

    cbDataError = message =>{

    };
    document.querySelector('.btn-camera').addEventListener('click', function(){
      navigator.camera.getPicture(cbDataSuccess, cbDataError, {
          sourceType: Camera.PictureSourceType.CAMERA,
          destinationType: Camera.DestinationType.DATA_URL,
          correctOrientation: true
        }
      );
    });

    document.querySelector('.btn-galeria').addEventListener('click', function(){
      navigator.camera.getPicture(cbDataSuccess, cbDataError, {
          sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
          destinationType: Camera.DestinationType.DATA_URL,
          correctOrientation: true
        }
      );
    });

    document.querySelector('.btn-remover-foto').addEventListener('click', function(){
      document.getElementById('img-user').src = "img/default-photo.png";
      main.db.collection('users').doc(main.localUser.uid).set({
        photo: null
      });
    });
  },
  goToLoginPage: function(){
      window.location = "index.html";
  },
  
};

main.onStart = meuCadastro.initialize;