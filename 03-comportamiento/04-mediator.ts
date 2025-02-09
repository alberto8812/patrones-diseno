/**
 * ! Patrón mediator
 * Es un patrón de diseño de comportamiento que ayuda a reducir
 * las dependencias desordenadas entre objetos.
 * Este patrón limita la comunicación directa entre ellos,
 * haciendo que solo interactúen a través de un objeto mediador.
 *
 * * Es útil reducir la complejidad de las relaciones entre objetos
 *
 * https://refactoring.guru/es/design-patterns/mediator
 */

// chatroom
class ChatRoom {
    private users: User[] = [];
    public title: string;

    constructor(title: string) {
        this.title = title;
    }
    addUser(user: User): void {
        this.users.push(user);
    }


    sednMessage(sender: User, message: string): void {


        const userTosend = this.users.filter((user) => user !== sender);
        for (const user of userTosend) {
            user.recibeMessage(sender, message);
        }

    }

}

class User {
    private userName: string;
    private chatroom: ChatRoom;

    constructor(userName: string, chatroom: ChatRoom) {
        this.userName = userName;
        this.chatroom = chatroom;
    }

    sendMessag(message: string): void {
        console.log(`%c${this.userName} says: ${message}`, 'color: blue');
        this.chatroom.sednMessage(this, message);
    }

    recibeMessage(sender: User, message: string): void {
        console.log(`%c${this.userName} recibe ${sender.userName} says: ${message}`, 'color: green');
    }

}

function runMediator(): void {
    const chatroom = new ChatRoom('Sala de chat');
    const user1 = new User('User1', chatroom);
    const user2 = new User('User2', chatroom);
    const user3 = new User('User3', chatroom);

    chatroom.addUser(user1);
    chatroom.addUser(user2);
    chatroom.addUser(user3);

    user1.sendMessag('Hola a todos');
    user2.sendMessag('Hola User1');
    user3.sendMessag('Hola User1 y User2');
}