/**
 * ! Patrón Template Method
 *
 * El patrón Template Method es un patrón de diseño de comportamiento
 * que define el esqueleto de un algoritmo en una operación,
 * delegando algunos pasos a las subclases.
 *
 * Permite que las subclases redefinan ciertos pasos de un algoritmo
 * sin cambiar su estructura.
 *
 * * Es útil cuando se tiene un algoritmo que sigue una secuencia de pasos
 * * y se quiere permitir a las subclases que redefinan algunos de esos pasos.
 *
 * https://refactoring.guru/es/design-patterns/template-method
 */

/**
 * Contexto: Vamos a implementar un sistema que permite preparar
 * diferentes bebidas calientes, como café y té.
 *
 * Aunque el proceso general para preparar ambas bebidas es similar
 * (hervir agua, añadir el ingrediente principal, servir en una taza),
 * hay pasos específicos que varían dependiendo de la bebida.
 *
 * El patrón Template Method es perfecto para este caso,
 * ya que define un esqueleto general del algoritmo en una clase base
 * y delega los detalles específicos a las subclases.
 */


abstract class HotBeverage {
    prepare(): void {
        this.boilWater();
        this.addMainIngredient();
        this.pourInCup();
        this.addCondiments();
    }

    private boilWater(): void {
        console.log('Hervir agua');
    }

    private pourInCup(): void {
        console.log('Servir en taza');
    }

    protected abstract addMainIngredient(): void;
    protected abstract addCondiments(): void;

}

class Tea extends HotBeverage {
    protected override addMainIngredient(): void {
        console.log('Añadir té');
    }

    protected override addCondiments(): void {
        console.log('Añadir limón');
    }
}

class Coffee extends HotBeverage {
    protected override addMainIngredient(): void {
        console.log('Añadir café');
    }

    protected override addCondiments(): void {
        console.log('Añadir leche');
    }
}


function main() {
    const tea = new Tea();
    const coffee = new Coffee();

    console.log('Preparando té...');
    tea.prepare();

    console.log('\nPreparando café...');
    coffee.prepare();
}