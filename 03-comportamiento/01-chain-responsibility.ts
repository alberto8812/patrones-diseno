/**
 * ! Patron Chain of Responsibility
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes
 * a lo largo de una cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no
 * * se sabe de antemano qué tipo de procesamiento se necesita o en qué orden
 * * pero se sabe que se necesita procesar en una secuencia.
 *
 * https://refactoring.guru/es/design-patterns/chain-of-responsibility
 */

//indica los eslavones de la cadena
interface Handler {
    setNext(handler: Handler): Handler;//permite hacer la cadena de responsabilidad dinámica y no estática como en el ejemplo
    handle(request: string): void;//manejador de la cadena intenta resolberlo
}


//molde de la cadena
abstract class BaseHandle implements Handler {
    private nextHandler?: Handler;

    //metodo para establecer el siguiente eslabón de la cadena
    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
    }

}


//soporte basico
class BasicSupport extends BaseHandle {

    override handle(request: string): void {
        if (request === 'basic') {
            console.log('Soporte básico');
            return;
        }
        super.handle(request);
    }
}

//soporte intermedio
class IntermediateSupport extends BaseHandle {

    override handle(request: string): void {
        if (request === 'intermediate') {
            console.log('Soporte intermedio');
            return;
        }
        super.handle(request);
    }
}

//soporte avanzado
class AdvancedSupport extends BaseHandle {

    override handle(request: string): void {
        if (request === 'advanced') {
            console.log('Soporte avanzado');
            return;
        }
        console.log('No se puede resolver');
    }
}


function main() {
    const basic = new BasicSupport();
    const intermediate = new IntermediateSupport();
    const advanced = new AdvancedSupport();

    basic.setNext(intermediate).setNext(advanced);

    basic.handle('basic');
    basic.handle('intermediate');
    basic.handle('advanced');
    basic.handle('super advanced');
}

