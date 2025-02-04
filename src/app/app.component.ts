import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TableComponent} from './components/table/table.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-end';

}
