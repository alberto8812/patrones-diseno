/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

class Player {
  name: string;
  level: number;
  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
}

interface Room {
  enter(player: Player): void;
}

class SecrearRoom implements Room {
  enter(player: Player): void {
    console.log(`${player.name} ha entrado a la sala secreta`);
  }
}

//3. Crear un proxy - magic portal
class MagicPortal implements Room {
  private secreatRoom: SecrearRoom;;

  constructor(secreatRoom: SecrearRoom) {
    this.secreatRoom = secreatRoom;
  }

  enter(player: Player): void {
    if (player.level >= 10) {
      this.secreatRoom.enter(player);
    } else {
      console.log(`${player.name} no tiene permiso para entrar a la sala secreta`);
    }
  }
}

function main() {
  const player = new Player('John', 9);
  const secreatRoom = new SecrearRoom();
  const magicPortal = new MagicPortal(secreatRoom);

  magicPortal.enter(player);
} 