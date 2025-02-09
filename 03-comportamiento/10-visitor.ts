/**
 * !Patrón Visitor
 *
 * El patrón Visitor es un patrón de diseño de comportamiento
 * que te permite separar algoritmos de los objetos sobre
 * los que operan.
 *
 * * Es útil cuando necesitas añadir nuevas operaciones a
 * * clases estables sin cambiar su código.
 *
 * https://refactoring.guru/es/design-patterns/visitor
 */

/**
 * Contexto: Imagina que estás diseñando un sistema para un parque
 * temático con diferentes tipos de atracciones:
 * montañas rusas, casas del terror y ruedas de la fortuna.
 *
 * Cada atracción tiene su propio precio de entrada y ofrece un descuento
 * dependiendo del tipo de visitante (niño, adulto o adulto mayor).
 *
 * Aquí es donde entra el patrón Visitor, que permite aplicar operaciones
 * específicas (como calcular el precio con descuento) dependiendo tanto
 * de la atracción como del tipo de visitante,
 * sin modificar las clases originales.
 */


interface Visitor {
    visitRollerCoaster(element: RollerCoaster): void;
    visitHauntedHouse(element: HauntedHouse): void;
    visitFerrisWheel(element: FerrisWheel): void;
}

interface Visitable {
    accept(visitor: Visitor): void;
}

class RollerCoaster implements Visitable {
    constructor(public price: number) { }

    accept(visitor: Visitor): void {
        visitor.visitRollerCoaster(this);
    }
}

class HauntedHouse implements Visitable {
    constructor(public price: number) { }

    accept(visitor: Visitor): void {
        visitor.visitHauntedHouse(this);
    }
}

class FerrisWheel implements Visitable {
    constructor(public price: number) { }

    accept(visitor: Visitor): void {
        visitor.visitFerrisWheel(this);
    }
}

class DiscountVisitor implements Visitor {
    visitRollerCoaster(element: RollerCoaster): void {
        this.visitRollerCoaster(element);
        console.log(`Precio de montaña rusa con descuento: $${element.price - 5}`);
    }

    visitHauntedHouse(element: HauntedHouse): void {
        this.visitHauntedHouse(element);
        console.log(`Precio de casa del terror con descuento: $${element.price - 3}`);
    }

    visitFerrisWheel(element: FerrisWheel): void {
        console.log(`Precio de rueda de la fortuna con descuento: $${element.price - 2}`);
    }
}

// Client code
function main() {
    const rollerCoaster = new RollerCoaster(20);
    const hauntedHouse = new HauntedHouse(15);
    const ferrisWheel = new FerrisWheel(10);

    const discountVisitor = new DiscountVisitor();

    rollerCoaster.accept(discountVisitor);
    hauntedHouse.accept(discountVisitor);
    ferrisWheel.accept(discountVisitor);
}   