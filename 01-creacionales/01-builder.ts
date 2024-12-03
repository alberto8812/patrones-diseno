import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

/**
 * Clase que representa un objeto computer
 */
class computer {
    public cpu: string = 'cpu- i7';
    public ram: string = 'ram- i7';
    public storage: string = 'storage- i7';
    public gpu?: string = 'gpu- i7';

    displayConfiguration() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`STORAGE: ${this.storage}`);
        console.log(`GPU: ${this.gpu}`);
    }
}

/**
 * clase que va a construir el objeto computer
 */
class ComputerBuilder {
    private computer: computer;

    constructor() {
        this.computer = new computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;// para poder encadenar los métodos de la clase ComputerBuilder , el this es el objeto que se está construyendo en ese momento  
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build() {
        return this.computer;
    }
}

function main() {
    const basicComputer = new ComputerBuilder()
        .setCPU('Intel core 2 Duo') // se crea una instancia de la clase ComputerBuilder    
        .setRAM('4GB')
        .setStorage('1TB')
        .build();// se construye el objeto

    console.log('Basic %Computer', COLORS.blue);
    basicComputer.displayConfiguration();// se muestra la configuración del objeto

    const gamingComputer = new ComputerBuilder()
        .setCPU('Intel core i9')
        .setRAM('16GB')
        .setStorage('2TB')
        .setGPU('Nvidia RTX 3080')
        .build();
    console.log('Gaming %Computer', COLORS.green);
    gamingComputer.displayConfiguration();



}
main();
