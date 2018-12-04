import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Heroi } from '../herois/heroi';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-busca-heroi',
  templateUrl: './heroi-busca.component.html',
  styleUrls: ['./heroi-busca.component.css']
})
export class HeroiBuscaComponent implements OnInit {
  herois$: Observable<Heroi[]>;
  private termosBusca = new Subject<string>();
  constructor(private heroiService: HeroiService) { }

  // Carrega um termo de busca no stream observable.
  buscar(termo: string): void {
    this.termosBusca.next(termo);
  }

  ngOnInit(): void {
    this.herois$ = this.termosBusca.pipe(
      // aguarda 300ms após cada pressão de tecla antes de utilizar o termo
      debounceTime(300),

      // ignora o novo termo se for o mesmo que o termo anterior
      distinctUntilChanged(),

      // muda para nova busca observable a cada vez que o termo muda
      switchMap((termo: string) => this.heroiService.buscaHerois(termo)),
    );
  }
}
