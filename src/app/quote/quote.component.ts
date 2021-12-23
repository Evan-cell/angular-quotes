import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Charles Dickens', '“It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known.”',new Date(2020,3,14)),
    new Quote(2,'Alfred Lord Tennyson','“Whenever you feel like criticizing anyone … just remember that all the people in this world haven’t had the advantages that you’ve had.”',new Date(2021,4,24)),
    new Quote(3,'William Shakespeare','“We are such stuff as dreams are made on, and our little life is rounded with a sleep.”',new Date(2020,5,6)),
    new Quote(4,' Harper Lee','“Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what.”',new Date(2022,1,1)),
  ];
  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(Quote: any){
    let quoteLength = this.quotes.length;
    Quote.id = quoteLength+1;
    Quote.datePosted = new Date(Quote.datePosted)
    this.quotes.push(Quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
