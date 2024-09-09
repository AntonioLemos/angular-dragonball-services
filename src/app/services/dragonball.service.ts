import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { mydata } from '../Models/mydata';


@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  private baseURL: string = "";
  private cardData: mydata | any;

  constructor(private httpClient:HttpClient) {
    this.baseURL = environment.dragonAPI;
  }

  getCard(cardIndex: number) : Observable<mydata> {
    const url = `${this.baseURL}${cardIndex}`;
    this.cardData = this.httpClient.get<mydata>(url);
    return this.cardData;
  }
}
