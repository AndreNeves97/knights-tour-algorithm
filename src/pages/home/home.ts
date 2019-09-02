import { Component, ViewChild, OnInit, NgZone } from '@angular/core';
    
import { NavController , ToastController} from 'ionic-angular';
import {global} from "../../app/global";
import Solucao from '../../models/solucao';
import SolucaoIterativo from '../../models/solucao_iterativo';
import {Tabuleiro} from "../../components/tabuleiro/tabuleiro";
 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
    
export class HomePage implements OnInit {
        
  @ViewChild(Tabuleiro)
  private tabuleiro : Tabuleiro;
    
    
    status: string;
    
    //passos por segundo
    velocidade: number;
    
    _velocidade: number;
    
    permitirCancelar: boolean;
    loading: boolean;
    carregado: boolean;
    tamanhoTabuleiro;
    opcoesTamanhoTabuleiro;
    tamanhoMinimoTabuleiro = 4;
    tamanhoMaximoTabuleiro = 8;
    
    
    solucaoEncontrada: any;
    mostrandoSolucao: boolean;
    pausarLabel: string;
    pausado: boolean;

    

    
    constructor(private zone: NgZone, public navCtrl: NavController) {
        this.opcoesTamanhoTabuleiro = [];
        
        for(var i = this.tamanhoMinimoTabuleiro; i <= 8; i++) {
            let opcao = {
                valor: i, 
                nome: i + ' X ' + i
            };
            
            this.opcoesTamanhoTabuleiro.push(opcao);
        }
        
        this.tamanhoTabuleiro = this.tamanhoMaximoTabuleiro;
        
        this.permitirCancelar = true;
        
        this.setVelocidade(1.25);
        
        this.status = 'inicial';
        
        this.pausar(false);
        
    }
    
    alterarVelocidade() {
        
        
        if(this._velocidade === 0) {
            this.velocidade = 10.0;
        }
        else
            this.velocidade = 10.0 + (this._velocidade * 20 / 100);
        
        this.velocidade = this.velocidade / 10;  
    }
    
    setVelocidade(passosPorSegundo) {
        this.velocidade = passosPorSegundo;
        
        this._velocidade = ((passosPorSegundo * 10) - 10)  * 100 / 20;
    }
    
    
    ngOnInit() {
        if(!global.carregado) {
            this.loading = true;
            
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
        
        
        global.carregado = true;
    }

    calcular() {
        this.resetar();
        this.mostrandoSolucao = false;
        
        this.loading = true;   
        
        this.pausado = false;
        
        
        
        this.permitirCancelar = false;
        
        setTimeout(() => {
            this.tabuleiro.calcularSolucao().then((solucao: any) => {
                this.loading = false;
                this.permitirCancelar = true;
                
                this.solucaoEncontrada = solucao;
                
                if(solucao.passos) {
                    
                    this.status = 'solucionado';
                    this.blinkStatusCard();
                    this.tabuleiro.recalcSizes();
                   
                    
                    this.mostrandoSolucao = true;
                    
                } else {
                    this.status='nao-solucionado';  
                    this.blinkStatusCard();
                    this.tabuleiro.recalcSizes();
                    
                    
                }
            });
            
        }, 1000);
    }
    
    
    resetar() {
        
        this.tabuleiro.resetar();
        this.status = 'inicial';
        this.tabuleiro.recalcSizes();
        
        
        
        this.mostrandoSolucao = false;
    }
    
    blinkStatusCard() {
         
    }
    
    
    alterarEstadoPausa() {
        console.log(this.mostrandoSolucao);
        if(!this.mostrandoSolucao) {
          //  this.tabuleiro.executarSolucao(this.solucaoEncontrada);
        } 
          
        this.pausar( !this.pausado);    
    }
    
    
    solucaoExecutadaHandler() {
        this.pausarLabel = 'Reiniciar';  
        
        setTimeout(() => {
            this.mostrandoSolucao = false;  
       }, 1000)
        
    }
    
    visualizarPrimeiraTentativa() {
        this.tabuleiro.executarSolucao(this.solucaoEncontrada.passosAtePrimeiroRetrocesso);
    }    
    
    pausar(pausar: boolean) {
        this.pausado = pausar;
        
        
        if(this.tabuleiro)
            this.tabuleiro.pausarSolucao(pausar);
        
        
        if(pausar)
            this.pausarLabel = 'Continuar';
        else
            this.pausarLabel = 'Pausar';
    }
    
    
}
