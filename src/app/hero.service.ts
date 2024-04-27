import { Injectable } from '@angular/core';
import type { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({ // コンポーネントにDI可能なことを示すデコレータ
  providedIn: 'root' // ルートインジェクタにサービスのプロバイダを登録
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }
}
