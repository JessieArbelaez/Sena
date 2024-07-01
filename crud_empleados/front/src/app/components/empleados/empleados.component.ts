import { Component, OnInit } from '@angular/core';

import { EmpleadoService } from '../../services/empleado.service';

import { NgForm, FormsModule } from '@angular/forms';

import { Empleado } from '../../../models/empleado';

declare var M: any;

@Component({

  selector: 'app-empleados',
  
  standalone: true,

  templateUrl: './empleados.component.html',

  styleUrls: ['./empleados.component.css'],

  imports: [FormsModule],

  providers: [EmpleadoService]

})

export class EmpleadosComponent implements OnInit {

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {

  }

  agregarEmpleado(form?: NgForm) {

    this.empleadoService.PostEmpleado(form?.value)

      .subscribe(res => {

        this.resetForm(form);

        M.toast({ html: 'Guardado satisfactoriamente' });

      });

  }

  resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro

    if (form) {

      form.reset();

      this.empleadoService.selectedEmpleado = new Empleado();

    }

  }

}