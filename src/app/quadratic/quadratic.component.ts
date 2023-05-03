import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.css']
})
export class QuadraticComponent {
  @HostBinding('attr.class') cssClass = 'row';

  constructor() {

  }

  result = '';
  calculate(A :number, B: number, C: number, D: number){
    let delta, x1, x2;


    if (A == 0) {
      D = D - C;
      x1 = D /B;
      this.result = 'There is a solution of the quadratics equation : x1 = ' + x1;
    } else {
      delta = (B * B) - 4 * A * (C-D);
      if (delta > 0) {

        x1 = (B + Math.sqrt(delta)) / (2 * A);
        x2 = (B - Math.sqrt(delta)) / (2 * A);
        this.result = 'There are 2 solutions of the quadratics equation : x1 = ' + x1 + ', x2 = ' + x2;
      } else if (delta == 0) {

        x1 = (0 - B) / 2 * A;
        this.result = 'There is only one solution of the quadratics equation : x1 = ' + x1
      } else {

        this.result = "There is no solution of the quadratics equation.";
      }
    }
  }

  equation = '';
   addNewItem(A : String, B :String, C: String, D: String): boolean{
     //A = +A
     if (A && B && C && D ){
       this.calculate(+A, +B, +C, +D);
       this.equation = 'Your equation: '+ A +'x^2 + '+B+'x + '+ C+' = ' + D;
     }
     else{
       this.result = 'Please fill all brackets'
     }
     return false;
   }


}
