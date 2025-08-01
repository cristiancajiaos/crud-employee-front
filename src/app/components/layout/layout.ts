import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  providers: []
})
export class Layout implements OnInit {

  public faUserTie: IconDefinition = faUserTie;

  constructor() {}

  ngOnInit(): void {}

}


