import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Holaa mundoodododo';
  age = 19
  
  subTitle= 'Contador con estado de sesion'
  
  counter: number = 0
  
  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0
  }
  //sers? = []
  users: string[] = ['Maria', 'Jose']

  visible: boolean = false

  setvisible(): void{
    this.visible = this.visible ? false : true
    console.log('Se ha hecho click en el boton')
  }
  setCounter(counter: number): void{
    this.counter = counter
  }
}
