import {Component, Input, OnInit} from '@angular/core';
import {Carro} from '../models/carro';
import {ActivatedRoute} from '@angular/router';
import {CarroService} from '../services/carro.service';

@Component({
  selector: 'app-carro-detalhe',
  templateUrl: './carro-detalhe.component.html',
  styleUrls: ['./carro-detalhe.component.scss']
})
export class CarroDetalheComponent implements OnInit {
  @Input() carro: Carro;

  constructor(private route: ActivatedRoute,
              private carroService: CarroService,
             ) {
  }

  ngOnInit() {
    this.getCarro();
  }

  getCarro(): void {
    const modelo = this.route.snapshot.paramMap.get('modelo');
    this.carroService.getCarro(modelo).subscribe(carro => this.carro = carro);
  }
}
