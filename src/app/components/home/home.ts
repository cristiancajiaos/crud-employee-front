import {Component, OnInit} from '@angular/core';
import { faUserTie, faList } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{

  public faUserTie: IconDefinition = faUserTie;
  public faList: IconDefinition = faList;

  ngOnInit(): void {
  }
}
