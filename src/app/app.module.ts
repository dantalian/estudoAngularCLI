import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CarrosComponent} from './carros/carros.component';
import {FormsModule} from '@angular/forms';
import {CarroDetalheComponent} from './carro-detalhe/carro-detalhe.component';
import {CarroService} from './services/carro.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './services/message.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, {dataEncapsulation: false}
);

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    CarroDetalheComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    CarroService,
    MessageService,
    InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
