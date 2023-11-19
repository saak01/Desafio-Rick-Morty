import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequesteInterface } from 'src/app/core/interfaces/api-request/api-request.interface';


@Injectable({
  providedIn: 'root'
})
export class ListCharactersService {

  private baseUrl: string = 'https://rickandmortyapi.com/api/character';


  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ApiRequesteInterface> {
    return this.http.get<ApiRequesteInterface>(this.baseUrl);
  }


}
