/**
 * ! Patrón Strategy
 *
 * El patrón Strategy es un patrón de diseño de software que define una
 * familia de algoritmos, los encapsula y los hace intercambiables.
 *
 *
 * * Es útil cuando se tiene una clase que tiene un comportamiento que puede
 * * cambiar en tiempo de ejecución y se quiere delegar la responsabilidad de
 * * la implementación a otra clase.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

/**
 * !Objetivo: Explicar el patrón Strategy usando un ejemplo donde varios
 * ! patitos compiten en una carrera y cada uno tiene su propia
 * ! estrategia de movimiento (por ejemplo, nadar, volar o caminar).
 */


interface IMovimiento {
    mover(): void;
}

// estrategia numero 1

class swimFast implements IMovimiento {
    mover() {
        console.log('Nadando rápido');
    }
}

// estrategia numero 2
class flyFast implements IMovimiento {
    mover() {
        console.log('Volando rápido');
    }
}

// estrategia numero 3

class walkFast implements IMovimiento {
    mover() {
        console.log('Caminando rápido');
    }
}

// implmentar la estrate

class Duck {
    private movimiento: IMovimiento;
    private name: string;

    constructor(name: string, movimiento: IMovimiento) {
        this.movimiento = movimiento;
        this.name = name;
    }

    performMove() {
        console.log(`El patito ${this.name} esta:`);
        this.movimiento.mover();
    }

    setMovimiento(movimiento: IMovimiento) {
        this.movimiento = movimiento;
    }
}


function main() {
    const patito1 = new Duck('patito1', new swimFast());
    const patito2 = new Duck('patito2', new flyFast());
    const patito3 = new Duck('patito3', new walkFast());
    patito1.performMove();
    patito1.setMovimiento(new flyFast());
    patito1.performMove();
    patito2.performMove();
    patito3.performMove();

}