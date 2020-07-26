import { CoreModule, Module } from 'rxcomp';
import { FormModule } from 'rxcomp-form';
import { StoreModule } from 'rxcomp-store';
import AppComponent from './app.component';

export default class AppModule extends Module {}

AppModule.meta = {
	imports: [
		CoreModule,
		FormModule,
		StoreModule,
	],
	declarations: [],
	bootstrap: AppComponent,
};
