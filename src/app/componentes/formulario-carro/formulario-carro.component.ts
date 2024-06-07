import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carro } from 'src/app/carros/carro';
import { CarrosService } from 'src/app/carros/carros.service';
import { Marca } from 'src/app/carros/marca';

@Component({
  selector: 'app-formulario-carro',
  templateUrl: './formulario-carro.component.html',
  styleUrls: ['./formulario-carro.component.scss'],
})
export class FormularioCarroComponent implements OnInit {
  @Input() carroRecebido: Carro | null = null;
  @Input() formularioCriacao: boolean = false;
  @Output() recarregar: EventEmitter<any> = new EventEmitter();

  constructor(private carrosService: CarrosService) {}

  marcas: Marca[] = [];
  carro: Carro = new Carro(null, null, null, null, null, null);

  ngOnInit(): void {
    if (this.carroRecebido) {
      this.carro = new Carro(
        this.carroRecebido.id,
        this.carroRecebido.name,
        this.carroRecebido.model,
        this.carroRecebido.yearManufacture,
        this.carroRecebido.yearModel,
        this.carroRecebido.make
      );
    }
    this.consultarMarcas();
  }

  selecao(marca: Marca | null) {
    this.carro.make = marca;
  }

  limparCampos() {
    this.carro.name = null;
    this.carro.yearManufacture = null;
    this.carro.yearModel = null;
    this.carro.id = null;
    this.carro.make = null;
    this.carro.model = null;
  }

  consultarMarcas() {
    this.carrosService.recuperarMarcas().subscribe(
      (resposta) => {
        this.marcas = resposta;
      },
      (erro) => {
        console.log(erro);
      }
    );
  }

  adicionarAlterar(acao: string) {
    if (acao == 'post') {
      this.adicionarCarro();
    }

    if (acao == 'put') {
      this.alterarCarro();
    }
  }

  alterarCarro() {
    this.carrosService.alterarCarro(this.carro).subscribe(
      (resposta) => {
        alert('Carro Alterado');
        this.recarregar.emit(true);
        this.carroRecebido;
      },
      (erro) => {
        console.log(erro);
      }
    );
  }

  adicionarCarro() {
    this.carrosService.salvarCarro(this.carro).subscribe(
      (resposta) => {
        alert('Carro Salvo');
        this.recarregar.emit(true);
      },
      (erro) => {
        console.log(erro);
      }
    );
  }
}
