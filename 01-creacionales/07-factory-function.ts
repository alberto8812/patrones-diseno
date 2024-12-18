/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

// Ejemplo de Factory Function
type Greeting = 'es' | 'en' | 'fr' | 'de';

function createGreeting(language: Greeting) {
    return function (name: string) {

        const messages = {
            es: 'Hola',
            en: 'Hello',
            fr: 'Bonjour',
            de: 'Hallo'
        };

        return `${messages[language]} ${name}`;
    }

}

function main() {
    const greeting = createGreeting('es');
    console.log(greeting('Mundo'));
}