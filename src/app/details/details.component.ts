import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  q1:any = [];
  q2:any = [];
  q3:any = [];
  q4:any = [];
  q5:any = [];
  q1table=true;
  q2table=false;
  q3table=false;
  q4table=false;
  yearlytable=false;
  value!: string;

  first!:string
  second!:string
  third!:string

  constructor() { }

  ngOnInit(): void {

    this.value='Q1'

    for(let i=1000;i<64000;i=i+i) {
      this.q1.push(i)
      console.log(this.q1);   
  }
  for(let i=1500;i<96000;i=i+i){
    this.q2.push(i)
    console.log(this.q2);
  }
  for(let i=2000;i<128000;i=i+i){
    this.q3.push(i)
    console.log(this.q3);
  }
  for(let i=2500;i<160000;i=i+i){
    this.q4.push(i)  
  }
  console.log(this.q4);

  }

  onQ1Click(){
    this.q1table = true;
    this.q2table = false;
    this.q3table = false;
    this.q4table = false;
    console.log(this.q1table);
    this.value = 'Q1'
    this.first = "April 2020-21"
    this.second = "May 2020-21"
    this.third = "June 2020-21"
    
  }
  onQ2Click(){
    this.q1table = false;
    this.q2table = true;
    this.q3table = false;
    this.q4table = false;
    console.log(this.q2table);
    this.value = 'Q2';
    this.first = "July 2020-21"
    this.second = "August 2020-21"
    this.third = "september 2020-21"
  }
  onQ3Click(){
    this.q1table = false;
    this.q2table = false;
    this.q3table = true;
    this.q4table = false;
    console.log(this.q3table);
    this.value = 'Q3';
    this.first = "October 2020-21"
    this.second = "November 2020-21"
    this.third = "December 2020-21"
  }
  onQ4Click(){
    this.q1table = false;
    this.q2table = false;
    this.q3table = false;
    this.q4table = true;
    console.log(this.q4table);
    this.value = 'Q4';
    this.first = "January 2020-21"
    this.second = "February 2020-21"
    this.third = "March 2020-21"
  }
  yearlyClick(){
    this.yearlytable = true;
  }
}

