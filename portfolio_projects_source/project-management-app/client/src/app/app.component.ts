import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header class="app-header">
      <h1>📋 Project Management</h1>
    </header>
    <main><router-outlet></router-outlet></main>
  `,
  styles: [`.app-header{padding:16px;background:#1976d2;color:#fff}`]
})
export class AppComponent {
  title = 'pm-client';
}
