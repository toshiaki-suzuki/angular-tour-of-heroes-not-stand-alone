import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import type { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ // コンポーネントにDI可能なことを示すデコレータ
  providedIn: 'root' // ルートインジェクタにサービスのプロバイダを登録
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
