///<reference path="../mock-carros.ts"/>
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Carro} from '../models/carro';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {CARROS} from '../mock-carros';
import {of} from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class CarroService {
  private carrosUrl = 'api/carros';

  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  private log(message: string) {
    this.messageService.add('CarroService: ' + message);
  }

  /**
   * Recover a list of cars
   * @returns {Observable<Carro[]>}
   */
  getCarros(): Observable<Carro[]> {
    this.log('Buscando lista de carros');
    return this.http.get<Carro[]>(this.carrosUrl)
      .pipe(
        tap(carros => this.log('Buscou!')),
        catchError(this.handleError('getCarros', []))
      );
  }

  /**
   * Recover a car by model
   * @param {string} modelo the model
   * @returns {Observable<Carro>}
   */
  getCarro(modelo: string): Observable<Carro> {
    const url = '${this.carrosUrl}/${modelo}';
    return this.http.get<Carro>(url).pipe(
      tap(_ => this.log(`buscou carro modelo=${modelo}`)),
      catchError(this.handleError<Carro>(`getCarro modelo=${modelo}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
