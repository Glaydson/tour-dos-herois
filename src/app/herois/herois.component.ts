import { Component, OnInit } from '@angular/core';
import { Heroi } from './heroi';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  herois: Heroi[];

  constructor(private heroiService: HeroiService) { }

  ngOnInit() {
    this.getHerois();
  }

  getHerois(): void {
    this.heroiService.getHerois()
      .subscribe(herois => this.herois = herois);
  }

  adicionar(nome: string): void {
    nome = nome.trim();
    if (!nome) { return; }
    this.heroiService.adicionaHeroi({ nome } as Heroi)
      .subscribe(heroi => {
        this.herois.push(heroi);
      });
  }

  remover(heroi: Heroi): void {
    this.herois = this.herois.filter(h => h !== heroi);
    this.heroiService.removeHeroi(heroi).subscribe();
  }


}
