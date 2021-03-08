import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';

@Component({
    selector: 'app-visor',
    templateUrl: './visor.component.html',
})
export class VisorComponent implements OnInit {


    constructor(public signalRService: SignalRService) { }

    buffer  =  this.signalRService.buffer;

    fechaFronted = (new Date()).toString();

    ngOnInit(): void {
    }

    iniciarPrueba(): void {
        this.signalRService.iniciarPrueba();
    }

    pausarPrueba(): void {
        this.signalRService.pausarPrueba();
    }

    // reset():void{
    //     this.signalRService.buffer = [];
    // }

}
