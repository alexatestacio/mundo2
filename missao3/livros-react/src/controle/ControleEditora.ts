import { Editora } from "../modelo/Editora";

class ControleEditora {
    private editoras: Array<Editora>;

    constructor() {
        this.editoras = [
            { codEditora: 1, nome: "Editora A" },
            { codEditora: 2, nome: "Editora B" },
            { codEditora: 3, nome: "Editora C" }
        ];
    }

    getEditoras(): Array<Editora> {
        return this.editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editora = this.editoras.find(e => e.codEditora === codEditora);
        return editora?.nome;
    }
}

export default ControleEditora;
