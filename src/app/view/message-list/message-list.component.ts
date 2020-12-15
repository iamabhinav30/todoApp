
import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MessageComponent } from './../message/message.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild(MessageComponent) firstMessageComponent: MessageComponent;

  @ViewChildren(MessageComponent) allMessageComponents: QueryList<MessageComponent>;

  @ContentChild(MessageComponent) firstProjectedMessageComponent: MessageComponent;

  @ContentChild('tempMessage') tempMessageComponent: MessageComponent;

  @ContentChildren(MessageComponent) allProjectedMessageComponent: QueryList<MessageComponent>;

  messages: string[] = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
    'Message 5',
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {

    //  @In case of content CHildren
    this.allProjectedMessageComponent.toArray().forEach(element => {
      element.message = 'This was changed from message-list component ngAfterContentInit - BY CONTENT CHILDREN'
    });

    // @in case of contentCHild
    this.firstProjectedMessageComponent.message = 'this projected msg was also changed - BY CONTENT CHILD';


    // @in case of tempMsg
    this.tempMessageComponent.message = 'This was changed from message-list component by ngAfterViewInit using #tempMessage template variable ';
  }

  ngAfterViewInit() {

    //  @In case of VIewCHildren
    this.allMessageComponents.toArray().forEach(element => {
      element.message = 'This was changed from message-list component ngAfterViewInit - VIEW CHILDREN'
    });

    // @in case of viewCHild
    this.firstMessageComponent.message = 'This was changed from message-list component ngAfterViewInit - VIEW CHILD';



  }

}
