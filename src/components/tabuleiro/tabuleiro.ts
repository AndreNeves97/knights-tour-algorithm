

import { 
    Component , 
    Input, 
    Output , 
    OnChanges,
    OnInit,
    ViewChild,
    ElementRef,
    Renderer,
    ApplicationRef
} from '@angular/core';

import { LoadingController } from 'ionic-angular';
import SolucaoIterativo from '../../models/solucao_iterativo';
import Solucao from '../../models/solucao';

 @Component({
    selector: 'tabuleiro',
    templateUrl: 'tabuleiro.html'
})
     

export class Tabuleiro implements OnChanges, OnInit  {
     semSolucao: boolean;
    linhas: any;
     
    @Output() blockSize: number;
    @Output() offsetTop: number;
    @Output() offsetLeft: number;
    
     @Input() velocidade: number;
     
     
    _tamanho: number;
    _loading: boolean;
    containerSize: number;
     panelOpacity: number;
     panelZIndex: number;
     panelDisplay: string;
     
     _posicaoPeca: any = {x: 0, y: 0};
     
     miraEmUso: number;
     _posicaoMira: any = {x: 0, y: 0};
     posicaoMira0: any = {x: 0, y: 0};
     posicaoMira1: any = {x: 0, y: 0};
     
     _posicaoAnteriorPeca : any;
     _indiceMovimento: number = 0;
     _pausarExecucao: boolean;
     _pararExecucao: boolean;
     
     _executarProximoPasso: Function;
     taskProximoPasso: any;
     
     solucao: any;
     indexExecucao = 0;
     
    @Input() solucaoExecutadaHandler : Function;
     
     
     @ViewChild('tabuleiro') element: ElementRef;

    constructor(    private renderer: Renderer,
                     private applicationRef : ApplicationRef, 
                     private loadingCtrl: LoadingController) {
        
        this.miraEmUso = -1;
    }
     
     
    @Input() set posicaoMira(value: any) {   
        this._posicaoMira = value;
         
        if(value == null) {
            this.miraEmUso = -1;
            return;
        }
        
        
        
        if(this.miraEmUso == 0) {
            this.posicaoMira1 = value;
            this.miraEmUso = 1;
        } else {
            this.posicaoMira0 = value;
            this.miraEmUso = 0;
        }
    }

    get posicaoMira(): any {
        return this._posicaoMira;
    }
     
    @Input() set loading(value: boolean) {      
        this._loading = value;
        
        if(this.loading) {
            this.panelDisplay = 'block';
            
            setTimeout(() => {
                
                this.panelOpacity = 0.7;
                this.panelZIndex = 1000;
            }, 10);
            
        } else {
            this.panelOpacity = 0;
            this.panelZIndex = 1;
            
                
            setTimeout(() => {
                this.panelDisplay = 'none';
            }, 500);
                
        }
        
    }

    get loading(): boolean {
        return this._loading;
    
    }
     
     
     
    @Input() set tamanho(value: number) {
        this.limparCasas();
        
        
        this._tamanho = Math.min(value, 15);

        this.linhas = [];        
        
        for(let i = 0; i < this.tamanho; i++) {
            let linha = {
                casas: []
            };
            
            var escuro = (i % 2 == 0);
            
            for(let j = 0; j < this.tamanho; j++) {
                let casa = {
                    x: j,
                    y: i,
                    escuro: false
                };
                
                casa.escuro = escuro;
                
                escuro = !escuro;
                
                linha.casas.push(casa);
            }
            
            this.linhas.push(linha);
        }
        
        this.recalcSizes();
        
    }

    get tamanho(): number {
        return this._tamanho;
    }
             
   recalcSizes() {
        let doc, status;
        doc = document.documentElement;
        status = document.querySelector('.status');
        
       let height = window.getComputedStyle(status).height;
       let _height = height.split('px')[0];
       
       
        this.containerSize = Math.min(
            doc.clientWidth, 
            doc.clientHeight //- Number(_height) - 200
        );
        
        this.containerSize -= 100;
       
        let tamanhoMaximo = 60 * this.tamanho;
       if(this.containerSize > tamanhoMaximo) {
           this.containerSize = tamanhoMaximo;
       }
        
        if(this.tamanho)
            this.blockSize = this.containerSize / this.tamanho;
        else
            this.blockSize = 0;
       
       
       setTimeout(() => {
           
            var element = this.element.nativeElement;
            this.offsetTop = element.offsetTop;
            this.offsetLeft = element.offsetLeft;
            
       }, 50);
   }
     
     

     ngOnInit() {
        
        window.onresize = this.recalcSizes.bind(this);
        document.addEventListener("DOMContentLoaded", (event) => {
            this.recalcSizes();
            setTimeout(() => {
                this.recalcSizes();
            }, 250);      
        });    
         
         
     }
     
    ngOnChanges() {
   }
   
    
     cliqueCasa(casa) {
         this.posicaoPeca = {
             x: casa.x,
             y: casa.y
         }
     }
     
     
    @Input() set posicaoPeca(value: any) {    
        if(this._posicaoAnteriorPeca) {
            let pos = this._posicaoAnteriorPeca;
            let casa = this.linhas[pos.y].casas[pos.x];
            
            casa.destacada = true;
            casa.indice = ++this._indiceMovimento;
        }
        
        this._posicaoPeca.x = value.x;
        this._posicaoPeca.y = value.y;
        
        this._posicaoAnteriorPeca = value;
    }

    get posicaoPeca(): any {
        return this._posicaoPeca;
    }
     
     
     calcularSolucao() {
         return new Promise((fullfil, reject) => {
             
                 
             setTimeout(() => {
                let solucao = new SolucaoIterativo(this.tamanho, this.posicaoPeca);
                //let solucao = new Solucao(this.tamanho, this.posicaoPeca);
                 
                 if(solucao) {
                     this._pausarExecucao = false;
                        this.solucao = solucao;
                     
                        if(!solucao.passos) {
                            this.semSolucao = true;
                        } else
                            this.executarSolucao(solucao.passos);
                  }
                 else {
                 }
                 
                 fullfil(solucao);
                 
             }, 1000);
             
         });
         
        /*
        let solucao = new Solucao();
        this.executarSolucao(solucao);
        */    
     }
     
     limparCasas() {
        clearTimeout(this.taskProximoPasso);
         
         if(!this.linhas)
            return;
         
         for(let linha of this.linhas) {
             for(let casa of linha.casas) {
                 casa.destacada = false;
                 casa.indice = null;
                 this._indiceMovimento = 0;
                 this._posicaoAnteriorPeca = null;
             }
         }
     }
     
     pausarSolucao(pausar: boolean) {
         
         if(this._pausarExecucao && !pausar) {
             
            this._pausarExecucao = pausar;
             
             if(this._executarProximoPasso)
                this.resumirExecucaoPausada(); 
         }
         else
            this._pausarExecucao = pausar;
         
         if(pausar) {
             clearTimeout(this.taskProximoPasso);
         }
     }
     
     resumirExecucaoPausada() {
         
         this.limparCasas();
         
         for(let i = 0; i < this.indexExecucao ; i++) {
             let passo = this.solucao.passos[i];
             let casa = this.linhas[passo.y].casas[passo.x];
             casa.destacada = true;
             casa.indice = i + 1;
             
             this._indiceMovimento++;
         }
         
         
         this._executarProximoPasso();
     }
     
    executarSolucao(passos) {
        
        this.limparCasas();
        
        this._pararExecucao = false;
        this.indexExecucao = 0;
        
        clearTimeout(this.taskProximoPasso);
        
        
        let proximoPasso = () => {
            try {
                if(this.indexExecucao == passos.length) {
                    this.solucaoExecutadaHandler();
                    return;
                }
                    
                if(this._pausarExecucao)
                    return;
                
                
                let proximo = passos[this.indexExecucao++];
                            
                
                
                this.posicaoPeca = {
                    x: proximo.x,
                    y: proximo.y
                };
                    
                if(this.indexExecucao > 0 && this.indexExecucao < passos.length) {
                    let proximo2 = passos[this.indexExecucao];
                    
                    this.posicaoMira = {
                        x: proximo2.x,
                        y: proximo2.y
                        
                    }
                } else {
                    this.posicaoMira = null;
                }
                
                if(!this._pararExecucao)
                    this.taskProximoPasso = setTimeout(proximoPasso, 1000 / this.velocidade);
             } catch(e) {
             }
        };
        
        this._executarProximoPasso = proximoPasso;
        
        proximoPasso();
        
    }
     
    resetar() {
        this.limparCasas();
        
        this._pararExecucao = true;
        
        this._executarProximoPasso = null;
        this.indexExecucao = null;
    }
}

