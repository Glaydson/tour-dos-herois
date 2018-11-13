import { Component, OnInit } from '@angular/core';
import { Heroi } from './heroi';
import { HEROIS } from '../mock-herois';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  herois: Heroi[];

  heroiSelecionado: Heroi;
 
  onSelect(heroi : Heroi): void {
    this.heroiSelecionado = heroi;
}

  constructor(private heroiService: HeroiService) { }

  ngOnInit() {
    this.getHerois();
  }

  getHerois(): void {
    this.heroiService.getHerois()
      .subscribe(herois => this.herois = herois);
  }

}
