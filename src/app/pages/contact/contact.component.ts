import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { EmailServiceService } from '../../services/email/email-service.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: Message = new Message();
  alertShow: boolean = false;
  successShow: boolean = false;
  erroMessage: string;

  constructor(private emailService: EmailServiceService) { }
 
  ngOnInit() {
  }

  public messageSend(message: Message) {
    this.alertShow = false;
    this.successShow = false;
    this.emailService.sendEmail(message).subscribe((data) => {
      this.message = new Message();
      this.showSuccess();
    }, err => this.showError(err));
  }

  public SendData(reqForm:NgForm){

    if(!reqForm.valid)
      return;
    
  }

  private showError(err: any){
    //alert(err.error.message.response);
    this.alertShow = true;
    this.successShow = false;
    this.erroMessage = err.error.message.response.substring(err.error.message.response.indexOf(':') + 2, err.error.message.response.length);
  }

  private showSuccess(){
    this.successShow = true;
    this.alertShow = false;
  }
}
