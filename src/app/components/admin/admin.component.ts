import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public messageService: MessageService) {
    this.messageService.message =
      'ADMIN COMPONENT';
  }

  ngOnInit(): void {
  }

}
