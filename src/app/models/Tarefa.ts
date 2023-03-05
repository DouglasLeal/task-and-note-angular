interface TarefaOptions{
    _id?: string;
    conteudo?: string;
    concluido?: boolean;
}

class Tarefa{
    _id?: string;
    conteudo?: string;
    concluido?: boolean;

    constructor({_id, conteudo, concluido}: TarefaOptions){
        this._id = _id;
        this.conteudo = conteudo;
        this.concluido = concluido;
    }
}

export default Tarefa;