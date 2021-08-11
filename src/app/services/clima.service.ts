import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url= 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '160360737c332f9032ca3d4e763266ed';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string) : Observable<any>{
    const Url = this.url + this.key +'&q=' + ciudad;
    return this.http.get(Url)
  }
}
