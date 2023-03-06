interface CategoriaOptions{
    _id?: string;
    nome?: string;
}

class Categoria{
    _id?: string;
    nome?: string;

    constructor({_id, nome}: CategoriaOptions){
        this._id = _id;
        this.nome = nome;
    }
}

export default Categoria;