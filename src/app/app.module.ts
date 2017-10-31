import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PrincipalPage,
AjustesPage,
Ajustes2Page,
ModalPage,
Pagina2Page,
Pagina3Page,
TabsPage} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
