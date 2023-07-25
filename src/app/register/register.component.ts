import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    // Realizar aquí la lógica de registro si es necesario.
    // Por ahora, simplemente redirigiremos al componente del blog después de registrarse.
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
