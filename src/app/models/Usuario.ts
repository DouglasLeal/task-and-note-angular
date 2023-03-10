interface UsuarioOptions{
    _id?: string;
    nome?: string;
    email?: string;
    senha?: string;
}

class Usuario{
    _id?: string;
    nome?: string;
    email?: string;
    senha?: string;

    constructor({_id, nome, email, senha}: UsuarioOptions){
        this._id = _id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

export default Usuario;