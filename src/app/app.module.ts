import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CarrosComponent} from './carros/carros.component';
import {FormsModule} from '@angular/forms';
import { CarroDetalheComponent } from './carro-detalhe/carro-detalhe.component';
import {CarroService} from './services/carro.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    CarroDetalheComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CarroService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
