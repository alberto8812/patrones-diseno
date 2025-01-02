/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

interface Notification {
  send(message: string): void;
}

class BasicNotification implements Notification {
  send(message: string): void {
    console.log(`Basic message: ${message}`);
  }
}

// clase decoradora

abstract class NotificationDecorator implements Notification {
  protected notification: Notification;
  constructor(notification: Notification) {
    this.notification = notification;
  }

  send(message: string): void {
    this.notification.send(message);
  }
}


//crear diferentes decoradores

class Emaildecoretor extends NotificationDecorator {

  private sendEmail(message: string): void {
    console.log(`Email message: ${message}`);
  }


  override send(message: string): void {
    super.send(message);//llamamos al metodo de la clase padre
    this.sendEmail(message);
    console.log(`Email message: ${message}`);
  }
}
//crear diferentes decoradores

class Smsdecoretor extends NotificationDecorator {

  private sendSMS(message: string): void {
    console.log(`SMS message: ${message}`);
  }


  override send(message: string): void {
    super.send(message);//llamamos al metodo de la clase padre
    this.sendSMS(message);
    console.log(`Email message: ${message}`);
  }
}


function mainDecorator() {
  const notification = new BasicNotification();
  const emailDecorator = new Emaildecoretor(notification);
  const smsDecorator = new Smsdecoretor(emailDecorator);

  smsDecorator.send('Hello world');
} 