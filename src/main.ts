import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HelloComponent } from './app/comps/hello/hello.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(HelloComponent, {
    providers: [provideAnimations()]
})
  .catch(err => console.error(err));
