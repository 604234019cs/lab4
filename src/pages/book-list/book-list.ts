import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from '../../Models/book.model';


@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  book:Book;
  category:string;

  constructor(private bookrest: BookRestProvider, public navParams: NavController, public NavParams: NavParams) {
  }

  ionViewWillenter(){
    this.category=this.navParams.get("category"); 
    this.bookrest.getbookList().subscribe(data=>{
      this.book=data.filter(book => book.category === this.category);
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }

}
