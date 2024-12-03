/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

//productos 
interface Hamburger {
    prepare(): void;
}

interface Drink {
    pour(): void;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log("preparando hamburgesa de pollo")
    }

}
class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log("preparando hamburgesa de carne")
    }
}

class Water implements Drink {
    pour(): void {
        console.log("Siriviendo un vaso de agua")
    }

}

class Soda implements Drink {
    pour(): void {
        console.log("Siriviendo un vaso de soda")
    }

}

// definimos las fabricas 

interface RestaurantFactory {
    createHumburger(): Hamburger
    createDrink(): Drink
}

class fastFoodRestauranFactory implements RestaurantFactory {
    createHumburger(): Hamburger {
        return new BeefHamburger()
    }
    createDrink(): Drink {
        return new Soda();
    }

}
class HealthyRestauranFactory implements RestaurantFactory {
    createHumburger(): Hamburger {
        return new ChickenHamburger()
    }
    createDrink(): Drink {
        return new Water();
    }

}

// como usarla :

/*
* recive la intacia 
*/
function main(factory: RestaurantFactory) {
    const hamburger = factory.createHumburger();
    const drink = factory.createDrink();

    hamburger.prepare()
    drink.pour()
}

//enviamos la intacia de lo qdeseamos ordenar 
main(new fastFoodRestauranFactory())

