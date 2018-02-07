import {Component, OnInit} from '@angular/core';
import {Carro} from '../models/carro';
import {CarroService} from '../services/carro.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  carros: Carro[];
  selectedCarro: Carro;

  constructor(private carroService: CarroService) {
  }

  ngOnInit() {
    this.getCarros();
  }

  onSelect(carro: Carro): void {
    this.selectedCarro = carro;
  }

  getCarros(): void {
    this.carroService.getCarros()
      .subscribe(carros => this.carros = carros);
  }

}
