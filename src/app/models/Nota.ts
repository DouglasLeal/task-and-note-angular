import Categoria from "./Categoria";

interface NotaOptions{
    _id?: string;
    titulo?: string;
    conteudo?: string;
    cor?: string;
    categoria?: Categoria;
}

class Nota{
    _id?: string;
    titulo?: string;
    conteudo?: string;
    cor?: string;
    categoria?: Categoria;

    constructor({_id, titulo, conteudo, cor, categoria}: NotaOptions){
        this._id = _id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.cor = cor;
        this.categoria = categoria;
    }
}

export default Nota;