import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CasaTabuleiro} from '../components/tabuleiro/casaTabuleiro';
import { Tabuleiro} from '../components/tabuleiro/tabuleiro';
import { Peca} from '../components/tabuleiro/peca/peca';
import { Mira} from '../components/tabuleiro/mira/mira';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tabuleiro,
    CasaTabuleiro,
    Peca,
    Mira
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
