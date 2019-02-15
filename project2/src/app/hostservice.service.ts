import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HostserviceService {

  constructor(private http: HttpClient) { }

go(search)
{
  return this.http.get('https://api.nutritionix.com/v1_1/search/'+search+'?results=0:1&fields=*&appId=a92de31f&appKey=f18dbe29f1f548663f5ef1fe6d9dcc8c')
}


}
