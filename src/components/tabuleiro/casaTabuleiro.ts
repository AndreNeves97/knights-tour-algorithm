
import { 
    Component , 
    Input, 
    Output , 
    OnChanges,
    OnInit
} from '@angular/core';

@Component({
    selector: 'casa',
    template: `
        <ion-card
            style="transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);"

            [style.padding]="0" 
            [style.margin]="0" 
            [style.width]="size+'px'" 
            [style.height]="size+'px'" 
            [style.background]="color"

    
        >
          <ion-card-content 
                style="
                      
                      padding: 0px;
                  height: 100%;
                  min-height: 100%;
                  display: -webkit-flex;
                  display: flex;
                  -webkit-align-items: center;
                  align-items: center;
                  -webkit-justify-content: center;
                  justify-content: center;
                "
            >

                <span style="
                                        
                      padding: 0px;
                "
                    
                    [style.font-size]="fontSize+'px'"
                    >{{indice}}</span>
          </ion-card-content>
        </ion-card>
    `
})
    

export class CasaTabuleiro  implements OnChanges , OnInit {
    @Input() size: number;
    @Input() escuro: boolean;
    @Input() destacada: boolean;
    @Input() indice: boolean;
    color: string;
    
    fontSize: number;
    
    ngOnInit() { 
    }
    
     
   ngOnChanges() {
       
       this.color = this.destacada? '#F44336' : this.escuro? '#9E9E9E' : '#E0E0E0';
       
       this.fontSize = this.size / 2;
       
   }
    
}
     