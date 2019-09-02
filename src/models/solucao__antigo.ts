
import {global} from "../app/global"; 

class Solucao  {
    tabuleiro: any;
    indexPasso: number;
    passos : any;
    
    constructor(private tamanhoTabuleiro: number, private casaInicial: any) {
        this.tabuleiro = [];
        for(var i = 0; i < tamanhoTabuleiro; i++) {
            this.tabuleiro[i] = [];
            
            for(var j = 0; j < tamanhoTabuleiro; j++) {
                this.tabuleiro[i][j] = 0;
            }
        }
        
        this.indexPasso = -1;
        
        this.tabuleiro[casaInicial.x - 1][casaInicial.y - 1] = ++this.indexPasso + 1;
        
        
        var passo = {
            x: casaInicial.x,
            y: casaInicial.y
        };
        
        this.calcPossibilidadesProximoPasso(passo);
        
        this.passos = [];
        this.passos.push(passo);
        
        this.calcularPassos();
    }
    
        
    calcularPassos() {
         
        let i = 0;
         
        let proximo = this.proximoPasso;
        while(proximo != null) {
            if(!this.isPassoRepetido(proximo)) {
                this.calcPossibilidadesProximoPasso(proximo);
                this.passos.push(proximo);
                this.tabuleiro[proximo.x - 1][proximo.y - 1] = ++this.indexPasso + 1;
            }
            
            proximo = this.proximoPasso;
        }        
        
     }
    
     get proximoPasso() : any {
         
         if(this.indexPasso == this.tamanhoTabuleiro * this.tamanhoTabuleiro)
            return null;
         
         
        let ultimoPasso = this.passos[this.indexPasso];
         
         if(typeof ultimoPasso == 'undefined') {
            console.log(this.indexPasso);
             return null;
         }
         
         if(!ultimoPasso)
            return null;
          
         try {
             while(ultimoPasso.possibilidadesProximoPasso.length == 0) {
                 this.passos.splice(this.indexPasso, 1);
                 this.indexPasso--;
                 
                 this.tabuleiro[ultimoPasso.x - 1][ultimoPasso.y - 1] = 0;                 
                 
                 ultimoPasso = this.passos[this.indexPasso];
             }
         } catch(e) { 
                console.log(ultimoPasso);
                 if(typeof ultimoPasso == 'undefined') {
                    console.log(this.indexPasso);
                     return null;
                 }
                  
          }
         
         let p = this.passos[this.indexPasso];
         
         if(p == null)
            return null;
         
         let possibilidades = p.possibilidadesProximoPasso;
         let proximo = possibilidades[0]; 
         
         possibilidades.splice(0, 1);
         
         return proximo;
     }
     
     isPassoRepetido(passo) {
        if(this.tabuleiro[passo.x - 1][passo.y - 1] > 0)
            return true;
         
         return false;     
     }
     
    calcPossibilidadesProximoPasso(passo) : any {
        if(passo.possibilidadesProximoPasso)
            return passo;
        
        let casaAtual = {
            x: passo.x,
            y: passo.y
        };
        
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
        
        
        let possibilidades = [];
        
        for(let m of movimentos) {
            let proximaCasa = {
                x: casaAtual.x + m[0],
                y: casaAtual.y + m[1]    
            }
            
            if(this.isCasaValida(proximaCasa)) {
                possibilidades.push({
                    x: proximaCasa.x,
                    y: proximaCasa.y,
                    movimento: m
                });
            }
        }
        
        passo.possibilidadesProximoPasso = possibilidades;
        
        return passo;
    }
     
     isCasaValida(casa) {
         if(casa.x < 1 || casa.y < 1)
            return false;
         
         if(casa.x > this.tamanhoTabuleiro || casa.y > this.tamanhoTabuleiro)
            return false;
         
         return true;
     }
     
     
}

//export default Solucao;