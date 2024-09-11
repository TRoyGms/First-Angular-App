import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {

  users_list: IUser[] = [];
  local_users: IUser[] = [];
  selected_user: IUser = {
    id: 1,
    name: "nombre",
    username: "user_1",
    phone: "123456789",
    website: "www.pagina.net"
  };

  tittle: string = "Tabla de Usuarios";
  message: string = ":D";

  constructor(private _service: UserService) {}

  ngOnInit() {
    this._service.getAll().subscribe(
      response => this.users_list = response
    );
  }

  agregarUsuario(user: IUser): void {
    user.id = this.local_users.length + 1 + this.users_list.length; // Asignar un ID único basado en la longitud de la lista
    this.local_users.push(user);
  }

  seleccionar_usuario(user: IUser): void {
    this.selected_user = user;
  }

  eventoRecibido(message: string) {
    this.message = message;
  }

  getAllUsers(): IUser[] {
    return [...this.users_list, ...this.local_users];
  }
}
