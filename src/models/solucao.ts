
import {global} from "../app/global"; 

class Solucao  {
    tabuleiro: any;
    indexPasso: number;
    ultimoPasso: any;
    passos: any;
    teste: boolean;
        
    constructor(private tamanhoTabuleiro: number, private casaInicial: any) {
        this.calcularPassos();
        
        this.passos = [];
        
        let index, lastIndex;
        
        for(let i = 0 ; i < this.tamanhoTabuleiro; i++) {
            for(let j = 0; j < this.tamanhoTabuleiro; j++) {
                index = this.tabuleiro[i][j];
                
                if(index == lastIndex) {
                    this.passos = null;
                    break;
                }
                
                lastIndex = index;
                
                this.passos.push({
                    x: i,
                    y: j,
                    i: index
                });
            }    
        }
        
        if(this.passos) {
            this.passos.sort( (a, b) => {
                return a.i < b.i ? -1 : 1;    
            });
        }
        
        console.log(this);
    }
    
    
    calcularPassos() {
        this.inicializarTabuleiro();   
        
        let proximoPasso;
        
        proximoPasso = {
            x: this.casaInicial.x,
            y: this.casaInicial.y
        };
        
        let totalCasas = this.tamanhoTabuleiro * this.tamanhoTabuleiro;
        
        this.tabuleiro[this.casaInicial.x][this.casaInicial.y] = 1;
        
        let tentativa = (indexPasso, passoInicial) => {    
            let sucesso;
            
            let i = -1;
            
            while(!sucesso && ++i < 8) {
                sucesso = false;
                
                let _proximoPasso = this.getNovoPasso(passoInicial, i);
                if(_proximoPasso == null)
                    continue;
                
                
                if(!this.casaUsada(_proximoPasso)) {
                    this.executarPasso(indexPasso, _proximoPasso);
                    
                    
                    if(indexPasso < totalCasas) {
                        
                        sucesso = tentativa(indexPasso + 1, _proximoPasso);
                        
                        if(!sucesso)
                            this.desfazerPasso(indexPasso, _proximoPasso);
                    }
                    else {
                        
                         sucesso = true;
                    }
                }
                
            }
            
            
            return sucesso;
        };
        
        tentativa(2, proximoPasso);
        
        
    }
    
    getNovoPasso(passoAnterior, novoPassoIndex) {
        
        let casaAtual = {
            x: passoAnterior.x,
            y: passoAnterior.y
        };
        
        /*
        
        let movimentos = [
            [1, -2],
            [1, 2],
            [2, -1],
            [2, 1],
            
            [-1, 2],
            [-1, -2],
            [-2, 1],
            [-2, -1],
        
        ];
        
        */
        
        let movimentos = [
            [2, 1],
            [1, 2],
            [-1, 2],
            [-2, 1],
            
            [-2, -1],
            [-1, -2],
            [1, -2],
            [2, -1],
        
        ];
        
        
        let m  = movimentos[novoPassoIndex];
        let proximaCasa = {
            x: casaAtual.x + m[0],
            y: casaAtual.y + m[1]    
        }
        
        if(this.casaValida(proximaCasa)) {
            return proximaCasa;
        }
        
        
        return null;
    }
     
    
    casaUsada(casa) {
        return this.tabuleiro[casa.x][casa.y] > 0;
    }
    
    casaValida(casa) {
         if(casa.x < 0 || casa.y < 0)
            return false;
         
         if(casa.x >= this.tamanhoTabuleiro || casa.y >= this.tamanhoTabuleiro)
            return false;
         
         return true;
    }
    

    executarPasso(index, novaCasa) {
        this.tabuleiro[novaCasa.x][novaCasa.y] = index;
    }
    
    desfazerPasso(index, passo) {
        this.tabuleiro[passo.x][passo.y] = 0;
    }

    inicializarTabuleiro() {
        this.tabuleiro = [];
        for(var i = 0; i < this.tamanhoTabuleiro; i++) {
            this.tabuleiro[i] = [];
            
            for(var j = 0; j < this.tamanhoTabuleiro; j++) {
                this.tabuleiro[i][j] = 0;
            }
        }
        
        this.ultimoPasso = null;
        this.indexPasso = -1;
        this.passos = [];
        
    }
    
     
    
     
}

export default Solucao;