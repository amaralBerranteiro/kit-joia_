document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    // Realize a validação do e-mail e da senha aqui.
    // Se tudo estiver correto, redirecione o usuário para a página principal.
    // Caso contrário, exiba uma mensagem de erro.
   
    console.log('E-mail:', email);
    console.log('Senha:', password);
   });