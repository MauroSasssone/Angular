import { Component, OnInit } from '@angular/core';
import {Usuario} from './formulario'
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
public usuario : Usuario;
  constructor() { 
this.usuario = new Usuario('','','','')
  }

  ngOnInit(): void {
  }
onSubmit(){
  console.log("evento submit lanzado!!")
  console.log(this.usuario)
}
}
