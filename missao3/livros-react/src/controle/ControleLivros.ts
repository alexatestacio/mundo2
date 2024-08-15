import { Livro } from "../modelo/Livro";

class ControleLivros {
    private livros: Array<Livro>;

    constructor() {
        this.livros = [
            { codigo: 1, codEditora: 1, titulo: "Livro 1", resumo: "Resumo do Livro 1", autores: ["Autor 1"] },
            { codigo: 2, codEditora: 2, titulo: "Livro 2", resumo: "Resumo do Livro 2", autores: ["Autor 2"] },
            { codigo: 3, codEditora: 3, titulo: "Livro 3", resumo: "Resumo do Livro 3", autores: ["Autor 3"] }
        ];
    }

    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const maxCodigo = Math.max(...this.livros.map(l => l.codigo), 0);
        livro.codigo = maxCodigo + 1;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}

export default ControleLivros;
