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
  };

  @Output() event = new EventEmitter<string>();
  @Output() userAdded = new EventEmitter<IUser>();

  get message(): string {
    return `Información actualizada para el usuario con id: ${this.user.id}`;
  }

  private isValidUser(user: IUser): boolean {
    return user.name && user.username && user.phone && user.website ? true : false;
  };

  private resetForm(): void {
    this.user = {
      id: 0,
      name: "",
      username: "",
      phone: "",
      website: ""
    };
  }
  
  agregarUsuario(): void {
    if (this.isValidUser(this.user)) {
      this.userAdded.emit(this.user);
      this.resetForm();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }

  enviar(): void {
    this.event.emit(this.message);
  }
}