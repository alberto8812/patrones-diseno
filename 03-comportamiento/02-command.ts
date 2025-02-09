/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */
interface Command {
    execute(): void;
}


class Light {
    turnOn(): void {
        console.log('Light is on');
    }

    turnOff(): void {
        console.log('Light is off');
    }
}

class Fan {
    start(): void {
        console.log('Fan is on');
    }

    stop(): void {
        console.log('Fan is off');
    }
}

//comandos

class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOff();
    }
}

class FanOnCommand implements Command {
    private fan: Fan;

    constructor(fan: Fan) {
        this.fan = fan;
    }

    execute(): void {
        this.fan.start();
    }
}

class FanOffCommand implements Command {
    private fan: Fan;

    constructor(fan: Fan) {
        this.fan = fan;
    }

    execute(): void {
        this.fan.stop();
    }
}


class RemoteControl {
    private command: Record<string, Command> = {};

    setCommand(button: string, command: Command): void {
        this.command[button] = command;
    }

    pressButton(button: string): void {
        if (this.command[button]) {
            this.command[button].execute();
            return;
        }
        console.log('Button not found');
    }
}


function main() {
    const remote = new RemoteControl();
    const light = new Light();
    const fan = new Fan();

    remote.setCommand('A', new LightOnCommand(light));
    remote.setCommand('B', new LightOffCommand(light));
    remote.setCommand('C', new FanOnCommand(fan));
    remote.setCommand('D', new FanOffCommand(fan));

    remote.pressButton('A');
    remote.pressButton('B');
    remote.pressButton('C');
    remote.pressButton('D');
    remote.pressButton('E');
}