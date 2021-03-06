import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../Models/book.model';

@Injectable()
export class BookRestProvider {

  private url:string="https://comsci-bookshop.herokuapp.com"

  constructor(public http: HttpClient) {
    console.log('Hello BookRestProvider Provider');
  }

  getbookList():Observable<any>{

    return this.http.get<Book>(this.url + '/books');
  }



}
