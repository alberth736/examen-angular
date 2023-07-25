import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean = true;
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes realizar la lógica de autenticación si es necesario.
    // Por ahora, simplemente redirigiremos al componente del blog.
    this.router.navigate(['/blog']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
