import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

interface Usuario {
  foto: string;
  nombre: string;
  correo: string;
  genero: string;
  edad: number;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['foto', 'nombre', 'correo', 'genero', 'edad'];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios); // Inicializamos dataSource

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.http.get<any>('https://randomuser.me/api/?results=50').subscribe(
      (data: any) => {
        this.usuarios = data.results.map((usuario: any) => ({
          foto: usuario.picture.large,
          nombre: `${usuario.name.first} ${usuario.name.last}`,
          correo: usuario.email,
          genero: usuario.gender,
          edad: usuario.dob.age
        }));
        this.dataSource.data = this.usuarios; // Actualizamos la data del dataSource
      },
      error => console.error('Error al obtener la lista de usuarios', error)
    );
  }
}
