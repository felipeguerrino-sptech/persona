// sessão
function validarSessao() {
    var id = sessionStorage.ID_USUARIO;

    if(id > 0) {
        let btnModalEntrar = document.getElementById("btnModalEntrar")
        btnModalEntrar.remove()

        let navbar = document.getElementsByClassName("navbar")[1]
        
        let btnSair = document.createElement("li")
        let textoSair = document.createElement("h3")
        textoSair.innerHTML = "Sair"
        
        let jogar = document.createElement("li")
        let textoJogar = document.createElement("h3")
        textoJogar.innerHTML = "Jogar"
        
        jogar.appendChild(textoJogar)
        navbar.appendChild(jogar)
        
        btnSair.appendChild(textoSair)
        navbar.appendChild(btnSair)
        

        btnSair.addEventListener("click", () => {
            sessionStorage.clear()
            location.reload()
        })

        jogar.addEventListener("click", () => {
            window.location = "jogo.html"
        })
    }

}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

