import { Component, Input, OnInit } from '@angular/core';
import { Mediciones } from 'src/app/interfaces/mediciones';

@Component({
    selector: 'app-visor',
    templateUrl: './visor.component.html',
    styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

    @Input() buffer = [];

    constructor() { }

    ngOnInit(): void {
    }

}
