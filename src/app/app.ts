import {Component, OnInit, signal} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements  OnInit{

  protected readonly title = signal('crud-employee-front');

  public faUserTie: IconDefinition = faUserTie;

  ngOnInit(): void {

  }
}
