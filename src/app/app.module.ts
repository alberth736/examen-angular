import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; // Importa MatPaginatorModule
import { MatMenuModule } from '@angular/material/menu';
import { Blog2Component } from './blog2/blog2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatTableDataSource } from '@angular/material/table';
import { RegisterComponent } from './register/register.component';

import { MatListModule } from '@angular/material/list'; // Importa el módulo MatListModule


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,
    Blog2Component,
    UsuariosComponent,
    PokemonesComponent,
    TableComponent,
    RegisterComponent,
  ],
  imports: [
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
