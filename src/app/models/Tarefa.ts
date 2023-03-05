interface TarefaOptions{
    _id?: String;
    conteudo?: String;
    concluido?: Boolean;
}

class Tarefa{
    _id?: String;
    conteudo?: String;
    concluido?: Boolean;

    constructor({_id, conteudo, concluido}: TarefaOptions){
        this._id = _id;
        this.conteudo = conteudo;
        this.concluido = concluido;
    }
}

export default Tarefa;