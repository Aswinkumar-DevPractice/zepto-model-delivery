import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';

import { Websocket } from './services/websocket';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   data = signal<any>(null);
   
   constructor(private ws : Websocket){
       this.ws.connect().subscribe( res => this.data.set(res));
   };

  
}
