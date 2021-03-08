import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../../services/signal-r.service';

@Component({
    selector: 'app-gases',
    templateUrl: './gases.component.html',
    styleUrls: ['./gases.component.css']
})
export class GasesComponent implements OnInit {


    constructor(public signalRService: SignalRService) { }

    ngOnInit(): void {
    }

    iniciarPrueba(): void {
        this.signalRService.iniciarPrueba();
    }

    pausarPrueba(): void {
        this.signalRService.pausarPrueba();
    }

    reset():void{
        this.signalRService.buffer = []
    }

}
