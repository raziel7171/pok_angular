import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 10;
  @Input()
  selectedRating = 0;

  @Output()
  RatedEvent: EventEmitter<number> = new EventEmitter<number>();

  ratingArray: number[] = [];
  rated = false; 
  previousRate = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.ratingArray = Array(this.maxRating).fill(0);
  }

  hoverMouseRating(index: number): void{
    this.selectedRating = index +1;
  }
  leaveMouseRating(){
    if(this.previousRate !== 0){
      this.selectedRating = this.previousRate;
    }
    else{
    this.selectedRating=0;
  }
  }

  rate(index: number): void{
    this.selectedRating = index +1;
    this.rated = true;
    this.previousRate = this.selectedRating;
    this.RatedEvent.emit(this.selectedRating);
  }

}
