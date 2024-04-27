import { Injectable } from '@angular/core';
import type { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({ // コンポーネントにDI可能なことを示すデコレータ
  providedIn: 'root' // ルートインジェクタにサービスのプロバイダを登録
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
