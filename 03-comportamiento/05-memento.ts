/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto,
 * de manera que el objeto pueda ser restaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder
 * * volver a él en un futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */

class GameMemento {
    private level: number;
    private health: number;
    private position: number;

    constructor(level: number, health: number, position: number) {
        this.level = level;
        this.health = health;
        this.position = position;
    }

    getLevel(): number {
        return this.level;
    }

    getHealth(): number {
        return this.health;
    }

    getPosition(): number {
        return this.position;
    }
}

class Game {
    private level: number;
    private health: number;
    private position: number;

    constructor(level: number, health: number, position: number) {
        this.level = level;
        this.health = health;
        this.position = position;
    }

    save(): GameMemento {
        return new GameMemento(this.level, this.health, this.position);
    }


    play(level: number, health: number, position: number): void {
        this.level = level;
        this.health = health;
        this.position = position;
    }
    restore(memento: GameMemento): void {
        this.level = memento.getLevel();
        this.health = memento.getHealth();
        this.position = memento.getPosition();
    }
}

class GameCareTaker {
    private mementos: GameMemento[] = [];

    addMemento(memento: GameMemento): void {
        this.mementos.push(memento);
    }

    pop(): GameMemento | undefined {
        return this.mementos.pop();
    }
}

function clientMemento() {
    const game = new Game(1, 100, 0);
    const careTaker = new GameCareTaker();

    careTaker.addMemento(game.save());

    game.play(2, 90, 10);
    careTaker.addMemento(game.save());

    game.play(3, 80, 20);
    careTaker.addMemento(game.save());

    game.restore(careTaker.pop()!);
    console.log(game);

    game.restore(careTaker.pop()!);
    console.log(game);

    game.restore(careTaker.pop()!);
    console.log(game);
}
