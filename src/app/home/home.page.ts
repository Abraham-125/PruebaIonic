import { Component } from '@angular/core';
import { HomeService } from './api/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputText: string = '';
  items: any;
  datos: any;
  guardado: string = '';

  constructor(private apiService: HomeService) {}

  guardarEnLocalStorage() {
    localStorage.setItem('inputValue', this.inputText);
    this.guardado = this.inputText; 
  }


  ngOnInit(): void {
    this.apiService.obtenerDatos().subscribe({
      next: (respApi: any) => {
        this.items = respApi;
        localStorage.setItem('DATOS', JSON.stringify(respApi));
        this.datos = localStorage.getItem('DATOS');
        this.datos = JSON.parse(this.datos);
      },
      error: (errorApi) => {
        console.error(errorApi);
      }
    });
  }
}
