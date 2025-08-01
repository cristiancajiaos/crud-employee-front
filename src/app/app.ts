import {Component, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('crud-employee-front');

}
