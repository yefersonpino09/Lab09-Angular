import { Component } from '@angular/core';
/*Este componente tiene los tasks que seran reenderizados por el html*/
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: string[] = [
    'Laboratorio 09 Desarrollo en la Nube => fecha de entregra: 20/05/2023   ',
    'Laboratorio 09 Multiplataformas => fecha de entregra: 22/05/2023    ',
    'Examen 09 Procesos => Te queda un intento nota por el momento:19   ',
    "Laboratorio Desarrollo de aplicaciones web avanzado => fecha de entregra: 23/05/2023   "
    
  ];
}