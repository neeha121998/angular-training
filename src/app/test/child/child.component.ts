import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() value = '';
  @Output() childMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  btnClickHandler() {
    console.log('ChildComponent: btnClickHandler()');
    this.childMessage.emit('This is child message');
  }

}
