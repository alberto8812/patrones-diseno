/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */


// 1. Clase Singleton
class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number = 7;

    // Método estático que devuelve la instancia única
    private constructor() {
        this.ballsCollected = 0;

    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
        }
        return DragonBalls.instance;
    }

    collectBall(): void {
        if (this.ballsCollected < 7) {
            this.ballsCollected++;
            console.log(`¡Has recolectado una esfera!`);
            return;
        }

        console.log(`Ya has recolectado las 7 esferas del dragón.`);
    }

    summonDragon(): void {
        if (this.ballsCollected === 7) {
            console.log(`¡Has invocado al dragón Shenlong!`);
            this.ballsCollected = 0;
            return;
        }

        console.log(`No puedes invocar al dragón sin las 7 esferas.`);
    }

}

function main() {
    // Crear instancia de DragonBalls
    //al ser static no se puede hacer una nueva instancia de la clase, solo se puede acceder a la instancia que se crea en el metodo getInstance
    const dragonBalls = DragonBalls.getInstance();

    // Recolectar esferas
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.collectBall();

    // Invocar al dragón
    dragonBalls.summonDragon();
}