import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public messageService: MessageService) {
    setTimeout(() => {
      window.alert(this.messageService.message);
    }, 5000);
  }

  ngOnInit(): void {
  }

}
