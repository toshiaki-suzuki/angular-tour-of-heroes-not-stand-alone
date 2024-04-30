import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import type { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ // コンポーネントにDI可能なことを示すデコレータ
  providedIn: 'root' // ルートインジェクタにサービスのプロバイダを登録
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // Web APIのURL

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** HeroServiceのメッセージをMessageServiceを使って記録 */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** サーバーからヒーローを取得する */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }


}
