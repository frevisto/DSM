import AutenticacaoDeUsuario from './models/AutenticacaoDeUsuario';

// Exercício 5
const autenticacao = new AutenticacaoDeUsuario();
autenticacao.registrarUsuario('alice', 'senha123');
autenticacao.registrarUsuario('bob', 'senha456');

const usuarioAutenticado = autenticacao.autenticarUsuario('alice', 'senha123');
if(usuarioAutenticado) {
    console.log('Usuário autenticado');
}
else {
    console.log('Falha na autenticação do usuário');
}