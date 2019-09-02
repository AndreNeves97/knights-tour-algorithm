
import { 
    Component , 
    Input, 
    Output , 
    OnChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

 @Component({
    selector: 'peca',
    templateUrl: 'peca.html'
})
     
     
export class Peca implements OnChanges {

    @Input() velocidade: number;
     
    @Input() tamanhoTabuleiro: number;
    @Input() tabuleiroOffsetTop: number;
    @Input() tabuleiroOffsetLeft: number;

    @Input() x: number;
    @Input() y: number;
    @Input() blockSize: number;

    @Output() top: number;
    @Output() left: number;
    @Output() width: number;

     tempoTransicao: number;
    @Output() transitionProp: string;

     
     
     setTransitionProp(tempoTransicao) {
         
         this.tempoTransicao = Math.min(tempoTransicao, 500);
         
         this.transitionProp = 'all ' + this.tempoTransicao / 2000 + 's cubic-bezier(0.4, 0, 0.2, 1)';
         
     }
    constructor( private sanitizer:DomSanitizer) {
        
    }
     
     sanitize(style:string){
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }

   ngOnChanges() {  
        this.setPosicao();
       
        this.setTransitionProp(1000 / this.velocidade);  
   }

    setPosicao() {
        
        let x =  Math.min( 
            (this.x) * this.blockSize,
            this.tamanhoTabuleiro - this.blockSize
        );
                
        this.left = x + this.tabuleiroOffsetLeft;
        
        
        let y =  Math.min(
            this.tamanhoTabuleiro - this.blockSize, 
            (this.y) * this.blockSize 
        );
        
        this.top = y + this.tabuleiroOffsetTop;
        
    
        this.width = this.blockSize;
    }
    
}

