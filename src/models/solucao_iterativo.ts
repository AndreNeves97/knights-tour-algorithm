

class SolucaoIterativo  {
    totalCasas: number;
    tabuleiro: any;
    indexPasso: number;
    passos: any;
    
    profundidadeAtePrimeiroRetrocesso : number;
    possibilidadesAtePrimeiroRetrocesso : number;
    passosAtePrimeiroRetrocesso: any;
    
       
    movimentos = [
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
    
    ];
    
    /*
    movimentos = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
    
    ];
    
    */
         
    
    constructor(private tamanhoTabuleiro: number, private casaInicial: any) {
        
        this.totalCasas = this.tamanhoTabuleiro * this.tamanhoTabuleiro;
        
        let possivel = this.calcularPassos();
        
        console.log(this);
        if(!possivel) {
            this.passos = null;
            return;
        }
        
        this.passos = this.getListaPassos();
        
    }
    
    getListaPassos() {
        let passos = []
        
        let index;
        
        for(let i = 0 ; i < this.tamanhoTabuleiro; i++) {
           
            for(let j = 0; j < this.tamanhoTabuleiro; j++) {
                index = this.tabuleiro[i][j];
                
                if(index == 0)
                    continue;
                
                passos.push({
                    x: i,
                    y: j,
                    i: index
                });
            }    
        }
    
        passos.sort( (a, b) => {
            return a.i < b.i ? -1 : 1;    
        });
    
        return passos;
    }
    
    
    
    calcularPassos() {
        this.inicializarTabuleiro();
        
        let proximoPasso;
        
        //Entrar no nó inicial
        proximoPasso = {
            x: this.casaInicial.x,
            y: this.casaInicial.y
        };
        
        
        let passoInicial = proximoPasso;
        
        this.indexPasso = 0;
        
        let primeiroRetrocessoOcorrido = false;
        this.profundidadeAtePrimeiroRetrocesso = 0;
        this.possibilidadesAtePrimeiroRetrocesso = 1;
        
        //Representação do processo entrar em um nó
        do {
            
            if(!primeiroRetrocessoOcorrido) {    
                this.profundidadeAtePrimeiroRetrocesso++;
            }
            
           //Registrar o movimento na matriz
            this.tabuleiro[proximoPasso.x][proximoPasso.y] = ++this.indexPasso;
            
            if(this.tabuleiroPreenchido()) {
                return true;
            }
            
            //Encontrar próximos subnós
            this.gerarSubNos(proximoPasso);
            
            
            //Existem subnós disponíveis?
            if(proximoPasso.possibilidades.length > 0) {
                if(!primeiroRetrocessoOcorrido) {    
                    this.possibilidadesAtePrimeiroRetrocesso *= proximoPasso.possibilidades.length;
                }
                
                
                //entrar no primeiro subnó disponível
                proximoPasso = proximoPasso.possibilidades[0]                
            }
            
            //Nó pai é o nó inicial 
            else if(proximoPasso.parent == passoInicial) {
                return false;
            }
            else {
                
                if(!primeiroRetrocessoOcorrido) {
                    primeiroRetrocessoOcorrido = true;
                    this.passosAtePrimeiroRetrocesso = this.getListaPassos();
                }
                
                let i = proximoPasso.parent.possibilidades.indexOf(proximoPasso);
                proximoPasso.parent.possibilidades.splice(i, 1);
                
                this.indexPasso -= 2;
                
                this.tabuleiro[proximoPasso.x][proximoPasso.y] = 0;
                
                //retornar ao nó pai
                proximoPasso = proximoPasso.parent;
                
            }
            
        } while(1 == 1);
        
        return false;
    }
    
    
    
    tabuleiroPreenchido() {
        return (this.indexPasso == this.totalCasas);
    }
    
    gerarSubNos(passo) {
        //Lista de subnós foi definida?
        if(!passo.possibilidades) {
            passo.possibilidades = this.getPossibilidades(passo);
        }
        
    }
    
    //Colocar em cada passo o nó pai
    getPossibilidades(passo) {
        
        let ret = [];
        
        let casaAtual = {
            x: passo.x,
            y: passo.y
        };
        
        for(let m of this.movimentos) {
            let proximaCasa = {
                x: casaAtual.x + m[0],
                y: casaAtual.y + m[1],
                parent: passo  
            };
            
            if(this.casaValida(proximaCasa))
                ret.push(proximaCasa);
        }
        
        
        return ret;
    }
    
    
    casaUsada(casa) {
        return this.tabuleiro[casa.x][casa.y] > 0;
    }
    
    casaValida(casa) {
         if(casa.x < 0 || casa.y < 0)
            return false;
         
         if(casa.x >= this.tamanhoTabuleiro || casa.y >= this.tamanhoTabuleiro)
            return false;
         
        if(this.casaUsada(casa)) {    
            return false;
        }
        
         return true;
    }
    
    inicializarTabuleiro() {
        this.tabuleiro = [];
        for(var i = 0; i < this.tamanhoTabuleiro; i++) {
            this.tabuleiro[i] = [];
            
            for(var j = 0; j < this.tamanhoTabuleiro; j++) {
                this.tabuleiro[i][j] = 0;
            }
        }
        
        this.indexPasso = -1;
        this.passos = [];
        
    }
    
     
    
     
}

export default SolucaoIterativo;