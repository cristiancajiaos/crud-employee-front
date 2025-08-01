import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {

  public faUserTie: IconDefinition = faUserTie;

  ngOnInit(): void {
  }

}
