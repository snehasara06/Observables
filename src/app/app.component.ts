import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Observables using RxJs';
  
 
obs = new Observable((observer) => {
     console.log("Observable starts")
     observer.next("1")
     setTimeout(() => { observer.next("2") }, 2000);
     setTimeout(() => { observer.error("error emitted") }, 3500);    //sending error event. observable stops here

     setTimeout(() => { observer.complete() }, 3000);   //sending complete event. observable stops here
     observer.next("4") //never called
     observer.next("5")
   })
   data=[];
 
  ngOnInit() {
 
    this.obs.subscribe(
      val=> { console.log(val) },
      error => { console.log("error")},
      () => {console.log("Completed")}
    )
  }

}
