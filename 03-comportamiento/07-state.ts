/**
 * ! Patrón State
 * Este patrón permite a un objeto cambiar su comportamiento
 * cuando su estado interno cambia.
 *
 * * Es útil cuando un objeto tiene un comportamiento que depende de su estado
 * * y debe cambiar su comportamiento en tiempo de ejecución dependiendo de ese estado.
 *
 * https://refactoring.guru/es/design-patterns/state
 */

/**
 * * Objetivo: Implementar el patrón State para simular el funcionamiento
 * * de una máquina expendedora.
 * * La máquina tiene diferentes estados,
 *  * Como Esperando Dinero,
 *  * Seleccionando Producto,
 *  * Entregando Producto,
 * * y su comportamiento varía dependiendo del estado actual.
 */


interface State {
    name: string;

    insertMoney(): void;
    selectProduct(): void;
    deliverProduct(): void;
}

class VendingMachine {
    private state: State;

    constructor() {
        this.state = new WaitingMoney(this);
    }

    insertMoney() {
        this.state.insertMoney();
    }

    selectProduct() {
        this.state.selectProduct();
    }

    deliverProduct() {
        this.state.deliverProduct();
    }

    getstateName(): string {
        return this.state.name;
    }

    setState(state: State) {
        this.state = state;
    }
}
//creamos los estados

class WaitingMoney implements State {
    name = 'Esperando Dinero';
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    insertMoney() {
        this.vendingMachine.setState(new SelectingProduct(this.vendingMachine));
    }

    selectProduct() {
        //primero se debe insertar dinero
        console.log('Inserta dinero primero');
    }

    deliverProduct() {
        console.log('Inserta dinero primero');
    }
}


class SelectingProduct implements State {
    name = 'Seleccionando Producto';
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    insertMoney() {
        console.log('Ya insertaste dinero');
    }

    selectProduct() {
        this.vendingMachine.setState(new DeliveringProduct(this.vendingMachine));
    }

    deliverProduct() {
        console.log('Selecciona un producto primero');
    }
}

class DeliveringProduct implements State {
    name = 'Entregando Producto';
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    insertMoney() {
        console.log('Ya insertaste dinero');
    }

    selectProduct() {
        console.log('Ya seleccionaste un producto');
    }

    deliverProduct() {
        this.vendingMachine.setState(new WaitingMoney(this.vendingMachine));
    }
}


function main() {
    const vendingMachine = new VendingMachine();

    let selectdOption: string | null = '4';

    do {
        console.clear();
        console.log('Estado actual:', vendingMachine.getstateName());

        switch (selectdOption) {
            case '1':
                vendingMachine.insertMoney();
                break;
            case '2':
                vendingMachine.selectProduct();
                break;
            case '3':
                vendingMachine.deliverProduct();
                break;
            case '4':
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida');
                break;
        }

    } while (selectdOption !== '4');
}   