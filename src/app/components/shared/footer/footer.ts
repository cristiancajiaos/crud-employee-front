import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {

  private currentDate: Date = new Date();
  public currentYear!: number;

  ngOnInit() {
    this.currentYear = this.currentDate.getFullYear();
  }

}
