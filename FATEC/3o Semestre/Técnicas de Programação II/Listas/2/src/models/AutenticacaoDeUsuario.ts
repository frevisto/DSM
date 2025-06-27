export default class AutenticacaoDeUsuario {
    public usuarios: Map < string, string > ;

    constructor() {
        this.usuarios = new Map();
    }
    public registrarUsuario(usuario: string, senha: string): void {
        this.usuarios.set(usuario, senha);
    }
    public autenticarUsuario(usuario: string, senha: string): boolean {
        return this.usuarios.get(usuario) === senha;
    }
}