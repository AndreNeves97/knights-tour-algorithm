
import { 
    Component , 
    Input, 
    Output , 
    OnChanges} from '@angular/core';

 @Component({
    selector: 'mira',
    templateUrl: 'mira.html'
})
     
     
export class Mira implements OnChanges {

     
    @Input() tamanhoTabuleiro: number;
    @Input() tabuleiroOffsetTop: number;
    @Input() tabuleiroOffsetLeft: number;

    @Input() x: number;
    @Input() y: number;
    @Input() blockSize: number;
     
     
    @Input() show: number;

    @Output() opacity: number;
     
    @Output() top: number;
    @Output() left: number;
    @Output() width: number;


     
   ngOnChanges() {  
        this.setPosicao();
       
       if(this.show)
            this.opacity = 1;
       else
           this.opacity = 0;
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

