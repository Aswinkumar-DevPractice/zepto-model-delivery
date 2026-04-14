import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Websocket {
  connect(): Observable<any>{
     return new Observable(observer =>{
         const socket = new WebSocket('ws://localhost:3000');

         socket.onmessage = (event) =>{
            observer.next(JSON.parse(event.data));
         };

         socket.onerror = (error) =>{
             observer.error(error);
         }
         socket.onclose = () => observer.complete();

         return () => socket.close();
     })
  }
}
