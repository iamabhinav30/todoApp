import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoApp';
  var = 'hackerearth';

  ngOnInit() {
    // const foo = new Observable(res => {
    //   res.next(42);
    //   res.next(100);
    // });

    // foo.subscribe(x => {
    //   console.log(x);
    // });


    // const foo = new Observable(res => {
    //   res.next(1);
    //   res.next(2);
    //   res.complete();
    //   res.next(3);
    // });

    // foo.subscribe(x => {
    //   console.log(x);
    // });

    const sub = new ReplaySubject(1);
    sub.next(1);
    // sub.subscribe(console.log);
    // sub.next(2);
    // sub.subscribe(console.log);

    const a = sub.subscribe(console.log);
    a.unsubscribe();
    sub.next(2);
    sub.subscribe(console.log);





  }



}
