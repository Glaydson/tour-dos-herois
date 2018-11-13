import { Component, OnInit } from '@angular/core';
import { Heroi } from '../herois/heroi';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  herois: Heroi[] = [];
  constructor(private heroiService: HeroiService) { }
  ngOnInit() {
    this.getHerois();
  }
  getHerois(): void {
    this.heroiService.getHerois()
      .subscribe(herois => this.herois = herois.slice(1, 5));
  }
}