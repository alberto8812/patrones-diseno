/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

import { COLORS } from '../helpers/colors.ts';


class Proyector {
  turnOn() {
    console.log('Proyector encendido');
  }
  turnOff() {
    console.log('Proyector apagado');
  }

}

class SoundSystem {
  on() {
    console.log('Sistema de sonido encendido');
  }
  off() {
    console.log('Sistema de sonido apagado');
  }
}

class VideoPlayer {
  play(movie: string) {
    console.log(`Reproduciendo ${movie}`);
  }
  stop() {
    console.log('Video detenido');
  }
}

class PopcornMaker {
  poppingPopCorn() {
    console.log('Máquina de palomitas encendida');
  }
  turnOffPoppingPopCorn() {
    console.log('Máquina de palomitas apagada');
  }

}

// Facade patron fachada

class HomeTheaterFacade {
  proyector: Proyector;
  soundSystem: SoundSystem;
  videoPlayer: VideoPlayer;
  popcornMaker: PopcornMaker;

  constructor(proyector: Proyector, soundSystem: SoundSystem, videoPlayer: VideoPlayer, popcornMaker: PopcornMaker) {
    this.proyector = proyector;
    this.soundSystem = soundSystem;
    this.videoPlayer = videoPlayer;
    this.popcornMaker = popcornMaker;
  }

  watchMovie(movie: string) {
    this.popcornMaker.poppingPopCorn();
    this.proyector.turnOn();
    this.soundSystem.on();
    this.videoPlayer.play(movie);
  }

  endMovie() {
    this.popcornMaker.turnOffPoppingPopCorn();
    this.proyector.turnOff();
    this.soundSystem.off();
    this.videoPlayer.stop();
  }
}

function facadePattern() {
  const proyector = new Proyector();
  const soundSystem = new SoundSystem();
  const videoPlayer = new VideoPlayer();
  const popcornMaker = new PopcornMaker();

  const homeTheater = new HomeTheaterFacade(proyector, soundSystem, videoPlayer, popcornMaker);

  homeTheater.watchMovie('The Avengers');
  homeTheater.endMovie();
}
