import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {CARROS} from '../mock-carros';
import {Carro} from '../models/carro';
import {MessageService} from './message.service';

@Injectable()
export class CarroService {

  constructor(private messageService: MessageService) {
  }

  getCarros(): Observable<Carro[]> {
    this.messageService.add('CarroService - Buscou lista de carros');
    return of(CARROS);
  }

}
