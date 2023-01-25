import { CoreModule, Module } from 'rxcomp';
import { FormModule } from 'rxcomp-form';
import AppComponent from './app.component';

export default class AppModule extends Module { }

AppModule.meta = {
  imports: [
    CoreModule,
    FormModule,
  ],
  declarations: [],
  bootstrap: AppComponent,
};
