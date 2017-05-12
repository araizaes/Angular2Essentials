import {NgModule } from 'angular/core';
import {BrowserModule} from '@angular/platform-browser';

imort {AppComponent} from './app.component';
import { MediaItemComponent } from './media-item.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}