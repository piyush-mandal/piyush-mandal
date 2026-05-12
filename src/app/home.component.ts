import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './app.css'
})
export class HomeComponent {
  readonly projects = PROJECTS;
}
