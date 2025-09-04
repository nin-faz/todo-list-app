import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header';
import { PwaPromptComponent } from './shared/components/pwa-prompt/pwa-prompt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PwaPromptComponent],
  template: `
    <app-header></app-header>
    <main class="container mx-auto p-4">
      <router-outlet></router-outlet>
    </main>
    <app-pwa-prompt></app-pwa-prompt>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('todo-list-app');
}
