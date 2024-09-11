import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  users_list: IUser[] = []

  selected_user:IUser = {
    id: 0,
    name: "nombre",
    username: "user_1",
    phone: "123456789",
    website: "www.pagina.net"
  }

  tittle: string = "Tabla de Usuarios";
  message: string = ":D";

  constructor(private _service: UserService){

    this._service.getAll().subscribe(
      response => this.users_list = response
    )

   }

   seleccionar_usuario(user: IUser): void{
    this.selected_user = user;
   }

   eventoRecibido(message: string){
    this.message = message
   }

}
