import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from "./content/content.component";

@Component({
    selector: 'app-maincontent',
    standalone: true,
    templateUrl: './maincontent.component.html',
    styleUrl: './maincontent.component.css',
    imports: [RouterOutlet, ContentComponent]
})
export class MaincontentComponent {

}
