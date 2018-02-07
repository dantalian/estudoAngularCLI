import {Component, Input, OnInit} from '@angular/core';
import {Carro} from '../models/carro';

@Component({
  selector: 'app-carro-detalhe',
  templateUrl: './carro-detalhe.component.html',
  styleUrls: ['./carro-detalhe.component.scss']
})
export class CarroDetalheComponent implements OnInit {
  @Input() carro: Carro;
  constructor() { }

  ngOnInit() {
  }
}
