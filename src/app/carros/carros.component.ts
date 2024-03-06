import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarrosService } from './carros.service';
import { Carro } from './carro';
import { Marca } from './marca';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss'],
})
export class CarrosComponent implements OnInit {
  constructor(private carrosService: CarrosService) {}

  carros: Carro[] = [];
  marcas: Marca[] = [];
  carroSelecionado: Carro | null = null;

  alterarCarro: any | null = null;
  novoCarro: any | null = null;

  carro: Carro = new Carro(null, null, null, null, null, null);

  ngOnInit(): void {
    this.consultarCarros();
  }

  consultarCarros() {
    this.carrosService.recuperarCarros().subscribe(
      (resposta) => {
        this.carros = resposta;
      },
      (erro) => {
        console.log(erro);
      }
    );
  }

  editarCarro(carro: Carro) {
    this.novoCarro = false;
    this.alterarCarro = true;
    this.carroSelecionado = carro;
  }

  excluirCarro(carro: Carro) {
    this.carroSelecionado = carro;
    this.carrosService.excluirCarro(this.carroSelecionado.id!).subscribe(
      (resposta) => {
        alert('Carro Excluído');
        this.consultarCarros();
      },
      (erro) => {
        console.log(erro);
      }
    );
  }

  fecharFormulario() {
    this.alterarCarro = null;
    this.novoCarro = null;
  }

  criarNovoCarro() {
    this.novoCarro = true;
    this.alterarCarro = false;
  }

  recarregarLista(evento: any) {
    this.consultarCarros();
  }
}
