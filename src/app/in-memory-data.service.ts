import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroi } from './herois/heroi';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const herois = [
      { id: 11, nome: 'Mr. Nice' },
      { id: 12, nome: 'Narco' },
      { id: 13, nome: 'Bombasto' },
      { id: 14, nome: 'Celeritas' },
      { id: 15, nome: 'Magneta' },
      { id: 16, nome: 'RubberMan' },
      { id: 17, nome: 'Dynama' },
      { id: 18, nome: 'Dr IQ' },
      { id: 19, nome: 'Magma' },
      { id: 20, nome: 'Tornado' }
    ];
    return { herois };
  }
  // Sobrescreve o método genId para garantir que um herói sempre tenha um id.
  // Se o array de heróis estiver vazio,
  // o método abaixo retorna o número inicial 11.
  // Se o array de heróis não estiver vazio, o método retorna o maior
  // id de herói + 1.
  genId(herois: Heroi[]): number {
    return herois.length > 0 ? Math.max(...herois.map(heroi => heroi.id)) + 1 : 11;
  }
}

