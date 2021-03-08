import { Injectable } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';


@Injectable({
    providedIn: 'root'
})
export class SignalRService {

    public hubConecction: HubConnection;
    public buffer: any[] = [];

    private urlWS = 'https://socket-iac.azurewebsites.net/pruebas'
    // private urlWS =  'https://localhost:44354/pruebas'

    constructor() {
        let builder = new HubConnectionBuilder();

        this.hubConecction = builder
            .withUrl(this.urlWS)
            .build();

        this.hubConecction.on('RecibirMediciones', mediciones => {
            console.log(JSON.parse(mediciones));      
            this.buffer.push(mediciones);

        })

        this.hubConecction.start()
            .then(() => console.log('SignalR Connected'))
            .catch(error => console.log(error));

    }

    public iniciarPrueba(): void {
        this.hubConecction.invoke('Iniciar').catch(error => console.log(error));
    }

    public pausarPrueba(): void {
        this.hubConecction.invoke('Pausar').catch(error => console.log(error));
    }
}
