import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone:true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  name:string = "kagabo"
  age:number = 25
  isDesableUper:boolean = false
  isDesableLower:boolean = false

  constructor(){}
  

  
  onUpper():void{
    this.age = this.age + 1
    if(this.age>30){
      this.isDesableUper = true
    }
  }

  

  onLower():void{
    this.age = this.age - 1
    if (this.age<20) {
      this.isDesableLower = true
    }
    if(this.age<30){
      this.isDesableUper = false
    }
  }
}
