const form = document.getElementById("form");  // Pegamos o elemento do formulário pelo id "form"
const username = document.getElementById("username"); // Pegamos o campo de username (nome de usuário)
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {  // Adiciona um ouvinte de evento no formulário quando ele for enviado
    event.preventDefault(); // Impede o envio padrão do formulário (evita que a página recarregue)

    checkForm(); // Chama a função que valida todos os campos

})

email.addEventListener("blur", () => {   // Quando o usuário sai do campo de email (evento "blur"), chama a validação do email
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})



function checkInputUsername() {  // Validação do campo username (nome de usuário)
    const usernameValue = username.value;  //pega o valor digitado no input

    if (usernameValue === "") {
        // Se estiver vazio, mostra erro
        errorInput(username, "O nome de usuário é obrigatório")
    } else {
        // Se estiver ok, remove classe de erro (mantém classe normal)
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail() { // Validação do campo de email
    const emailValue = email.value;
    if (emailValue === "") {
        // Se estiver vazio, mostra erro
        errorInput(email, "O email é obrigatório")
    } else {
        // Se estiver preenchido, remove erro
        const formItem = email.parentElement;
        formItem.className = "form-content"

    }
}

function checkInputPassword() {  // Validação do campo de senha
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "A senha é obrigatória")
    } else if (passwordValue.length < 8) {   // Se tiver menos de 8 caracteres, mostra outro erro
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres")
    } else {
        const formItem = password.parentElement;    // Se estiver tudo certo, remove classe de erro
        formItem.className = "form-content"
    }

}

function checkInputPasswordConfirmation() {  // Validação do campo de confirmação de senha
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value

    if (passwordValue === "") {
        // Se o campo senha estiver vazio, exibe erro na confirmação também
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
    } else if (confirmationPasswordValue !== passwordValue) {
        // Se as senhas forem diferentes, mostra erro
        errorInput(passwordConfirmation, "As senhas não são iguais")
    } else {
        // Se tudo estiver correto, remove erro
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"

    }
}


async function checkForm() {  // Valida todos os campos do formulário
    console.log("checkForm chamado!"); // ← adiciona isso

    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")    // Pega todos os elementos com a classe form-content

    const isValid = [...formItems].every((item) => {  // Verifica se todos os elementos têm apenas a classe "form-content"
        return item.className === "form-content"
    });

    if (isValid) {    // Se todos os campos estiverem validos redireciono para  a página de login 
        try {
            console.log("Formulário válido, enviando dados para o backend...")
            const userData = {
                name: username.value,
                email: email.value,
                password: password.value
            }

            const response = await fetch("http://localhost:3000/api/auth/register", {  // Envia os dados do usuário para o backend (rota de criação de usuário)
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })

            if (!response.ok) {  // Se a resposta do backend for ok, redireciona para a página de login
                throw new Error("Erro ao criar usuário")
            }
            await response.json();

            alert("Usuário criado com sucesso! Agora você pode fazer login.");

            window.location.href = "login.html"; // Redireciona para a página de login

        } catch (error) {
            alert("Erro ao criar usuário: ")
            console.log(error)
        }
    }
}


function errorInput(input, message) {  // Exibe o erro visual no campo

    const formItem = input.parentElement; // pega a div pai (wrapper do input)
    const textMessage = formItem.querySelector("a") // pega o elemento que mostrará a mensagem (tagg <a>)
    textMessage.innerText = message;

    formItem.className = "form-content error" // adiciona a classe "error" para mudar visualmente

}