import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    { 
      nombre: 'Mariano',
      especialidad: 'Ingeniero Aerospacial',
      descripcion: 'Ingeniero en la Agencia Espacial'
    },
    { 
      nombre: 'Ignacio',
      especialidad: 'Neurocirujano',
      descripcion: 'Neurocirujano en el Hospital Hopkins'
    },
    { 
      nombre: 'Matteo',
      especialidad: 'Ingeniero Químico',
      descripcion: 'Químico Industrial en Boston Cientific'
    }
  ]

  constructor() {
    console.log ('Servicio funcionando!!!')
   }

  obtenerEquipo() {
    return this.equipo;
  }
}
