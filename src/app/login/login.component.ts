import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  keyChange = false;
  boardChange = false;

  constructor() { }
  vCharChange() {
    this.keyChange = !this.keyChange ;
  }
  keyboardChange() {
    this.boardChange = !this.boardChange ;
    console.log(this.boardChange);
  }
  ngOnInit() {
  }

}
