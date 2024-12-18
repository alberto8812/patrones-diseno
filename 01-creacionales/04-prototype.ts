/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {
    public title: string;
    private content: string;
    public author: string;

    constructor(
        title: string,
        content: string,
        author: string
    ) {
        this.content = content
        this.title = title
        this.author = author
    }

    // referencias  enviamos los valores para crear un clone
    // es un metodo que permite retornar un clone
    clone() {
        return new Document(this.title, this.content, this.author)
    }

    displayInfo() {
        console.log(this.title)
        console.log(this.content)
        console.log(this.author)

    }


}

function main() {
    const documentOne = new Document("Cotizacion", "500 dolares", "Fernando")
}