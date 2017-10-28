import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the jungle';
  colores = ['azul', 'amarillo', 'negro'];
  ocultar = true ; 
  funcion_enviar(color)
  {
    if(!this.colores.includes(color.value)){      
      this.colores.push(color.value);
    }
    color.value="";  
    return false;
  }
  fnOculta()
  {
    this.ocultar=!this.ocultar;
  }
}

