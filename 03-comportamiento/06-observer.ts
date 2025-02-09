/**
 * ! Patrón Observer
 * El patrón Observer es un patrón de diseño de comportamiento que establece
 * una relación de uno a muchos entre un objeto, llamado sujeto,
 * y otros objetos, llamados observadores, que son notificados
 * y actualizados automáticamente por el sujeto
 * cuando se producen cambios en su estado.
 *
 * * Es útil cuando necesitamos que varios objetos estén
 * * pendientes de los cambios
 *
 * !No confundirlo con RXJS Observables
 *
 * https://refactoring.guru/es/design-patterns/observer
 */


interface Observer {
    notify: (videoTitle: string) => void;
}

class YoutubeChannel {
    private suscribers: Observer[] = [];
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    subscribe(observer: Observer) {
        this.suscribers.push(observer);
    }

    unsubscribe(observer: Observer) {
        // un suscriptor se da de baja
        this.suscribers = this.suscribers.filter((suscriber) => suscriber !== observer);

    }

    uploadVideo(videoTitle: string) {
        this.suscribers.forEach((suscriber) => suscriber.notify(videoTitle));
    }


}

class Suscriber implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    notify(videoTitle: string) {
        console.log(`${this.name} ha sido notificado de un nuevo video: ${videoTitle}`);
    }
}



function main() {
    const channel = new YoutubeChannel('Mi canal');
    const suscriber1 = new Suscriber('Suscriptor 1');
    const suscriber2 = new Suscriber('Suscriptor 2');

    channel.subscribe(suscriber1);
    channel.subscribe(suscriber2);

    channel.uploadVideo('Video 1');
    channel.uploadVideo('Video 2');

    channel.unsubscribe(suscriber1);

    channel.uploadVideo('Video 3');
}   