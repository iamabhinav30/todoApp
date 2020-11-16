import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MediatorService } from '../services/mediator.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private utility: UtilityService,
    private mediator: MediatorService) { }


  public user;
  data;


  ngOnInit() {


    // this.utility.loaderResponse.subscribe(res => {
    //   this.data = res;
    // });

    // debugger;
    this.mediator.Event('user').subscribe(res => {
      this.user = res;
      console.log('res', res);
    })

    console.log()
  }

  public todo: any;
  public items: Array<TodoItems> = [];
  public totalTasks: number = 0;
  public remainingTodoItems: number = 0;

  addList(form: NgForm) {
    if (form.valid) {
      let arrElement = {
        // name: form.value.todo,
        name: form.controls['todo'].value,
        isDone: false
      }
      this.items.push(arrElement);
      this.totalTasks = this.items.length;
    }
  }

  toggleItem(item) {
    item.isDone = !item.isDone;
    this.remainingTodoItems = this.getRemainingCount();
  }

  getRemainingCount() {
    return this.items.filter(item => !item.isDone).length
  }
}

export class TodoItems {
  name: string;
  isDone: boolean;
}
