import { Injectable } from '@angular/core';
import { Heroi } from './herois/heroi';
import { HEROIS } from './mock-herois';
import { Observable, of } from 'rxjs';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  constructor(private mensagemService: MensagemService) { }

  getHerois(): Observable<Heroi[]> {
    this.mensagemService.adicionar('HeroiService: heróis obtidos');
    return of(HEROIS);
  }

  getHeroi(id: number): Observable<Heroi> {
    this.mensagemService.adicionar(`HeroiService: obtido herói com id=${id}`);
    return of(HEROIS.find(heroi => heroi.id === id));
  }


}
