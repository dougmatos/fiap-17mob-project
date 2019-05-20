var principal = {

    initialize: function () {

        document.getElementById('btn-buscar').addEventListener('click', function(){

            let alertInfo = document.getElementById('msg-nao-encontrado');
            let ulRepos = document.getElementById('repos');
            let username = document.getElementById('username').value;
            let url = `https://api.github.com/users/${username}/repos`;

            ulRepos.innerHTML = '';
            alertInfo.style.display = 'none';
            axios.get(url)
                .then(response => {
                    let data = response.data;
                    if(data.length > 0){
                        for(var i =0; i < data.length;i++){
                            ulRepos.innerHTML = ulRepos.innerHTML + `<li>${data[i].full_name}<br />Linguagem: ${data[i].language || 'desconhecida'}<hr /></li>`
                        }
                    } else{
                        alertInfo.style.display = 'block';
                    }
                }).catch(response =>{
                    alertInfo.style.display = 'block';
                    console.log(response);
                });
        });
    },
    goToLoginPage: function(){
        window.location = "index.html";
    }
};

main.onStart = principal.initialize;
