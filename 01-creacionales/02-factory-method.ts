/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */


interface hamburger {
    prepare(): void;
}

class chickenBurger implements hamburger {
    prepare(): void {
        console.log('Preparando hamburguesa de pollo');
    }
}

class beefBurger implements hamburger {
    prepare(): void {
        console.log('Preparando hamburguesa de res');
    }
}

/**
 * ! Factory Method
 * La clase abstracta BurgerStore define el método orderBurger
 * que delega la creación de la hamburguesa a las subclases.
 * no permite instanciar la clase directamente.
 * define el esqueleto para otros métodos.
 */
abstract class BurgerStore {
    abstract createBurger(): hamburger;

    orderBurger(): void {
        const burger = this.createBurger();
        burger.prepare();
    }
}

/**
 * no se usa implment debido queremos extender y implemntar el orderBurger
 * en las subclases, por lo que se usa extends en lugar de implements 
 *direntamente con sumirimaos que la clase abstracta BurgerStore
 */
class ChickenBurgerStore extends BurgerStore {
    createBurger(): hamburger {
        return new chickenBurger();
    }
}

class BeefBurgerStore extends BurgerStore {
    createBurger(): hamburger {
        return new beefBurger();
    }
}
