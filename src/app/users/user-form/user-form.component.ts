import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() user: IUser = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  }

  @Output() event = new EventEmitter<string>();

  get message(): string {
    return `Información actualizada para el usuario con id: ${this.user.id}`;
  }

  mostrar(): void {
    console.log(this.user);
    console.log(this.message);
  }

  enviar(): void {
    this.event.emit(this.message);
  }
}
