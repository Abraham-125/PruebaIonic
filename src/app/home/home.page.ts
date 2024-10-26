import { Component } from '@angular/core';
import { HomeService } from './api/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items:any;

  constructor(
    private apiService: HomeService
  ) {}

  ngOnInit(): void {
    this.apiService.obtenerDatos().subscribe(
      {
        next:(respApi:any) => {
          this.items = respApi
        },
        error:(errorApi) => {
          console.error(errorApi)
        }
      }
    )
  }

}
