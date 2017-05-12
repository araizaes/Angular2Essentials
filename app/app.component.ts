import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    templateURL: 'app/app.component.html'
    styleURLs: ['app/app.component.css']
})
export class AppComponent {
    onMediaItemDelete(mediaItem){
    
    }

    firstMediaItem = {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
    };
}
