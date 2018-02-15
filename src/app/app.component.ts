import { Component } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  order: string = 'name';
  busca: string;

  produtos = [
    { id: 1, name: 'Napolitana', preco: 20.00, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ]},
    { id: 2, name: 'Marguerita', preco: 20.30, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ]},
    { id: 3, name: 'Portuguesa', preco: 20.50, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ] },
    { id: 4, name: 'Atum', preco: 21.00, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ] },
    { id: 5, name: 'Mussarela', preco: 27.00, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ] },
    { id: 6, name: 'Calabresa', preco: 22.00, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ] },
    { id: 7, name: 'Escarola', preco: 20.00, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ] },
    { id: 8, name: 'Romanesca', preco: 30.00, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ] },
    { id: 9, name: 'Vegetariana', preco: 25.00, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ] },
    { id: 10, name: 'Brigadeiro', preco: 10.00, ingredientes: [ 'Napolitana 1 ', 'Napolitana 2' ] } 
  ];


}
