import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(1)])
    });
  }

  public onSubmit(): void {
    const user = { name: this.form.value.name };
    this.socketService.emit('set-user', user, (resp) => console.log(resp) );
  }

}
