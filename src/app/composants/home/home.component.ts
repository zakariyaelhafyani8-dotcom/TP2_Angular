import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  // On attend que la vue soit rendue pour que #test existe dans le DOM.
  ngAfterViewInit() {
    $('#test').on('click', function () {
      alert(' test jquery ');
    });
  }
}
