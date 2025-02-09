/**
 * ! Patrón Iterator
 * Este patrón permite recorrer los elementos de una colección sin exponer
 * la estructura interna de la colección.
 *
 * * Es útil cuando se necesita recorrer una colección de elementos sin importar
 * * cómo se almacenan los elementos.
 *
 * https://refactoring.guru/es/design-patterns/iterator
 */


interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
    current(): T | null;
}


class Pokemon {
    private name: string;
    private type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

}


class PokemonList {
    private pokemons: Pokemon[] = [];

    add(pokemon: Pokemon) {
        this.pokemons.push(pokemon);
    }

    get(index: number): Pokemon | null {
        if (index < 0 || index >= this.pokemons.length) {
            return null;
        }
        return this.pokemons[index];
    }

    getlength(): number {
        return this.pokemons.length;
    }

    createIterator(): PokemonIterator {
        return new PokemonIterator(this);//this es la lista de pokemons que se va a recorrer,intancia de la clase PokemonList
    }
}

// Implementación del iterador

class PokemonIterator implements Iterator<Pokemon> {
    private index: number = 0;
    private pokemonList: PokemonList;

    constructor(pokemonList: PokemonList) {
        this.pokemonList = pokemonList;
    }

    next(): Pokemon | null {
        if (this.hasNext()) {
            return this.pokemonList.get(this.index++);
        }
        return null;
    }

    hasNext(): boolean {
        return this.index < this.pokemonList.getlength();
    }

    current(): Pokemon | null {
        return this.pokemonList.get(this.index);
    }
}


function main() {
    const pokemonList = new PokemonList();
    pokemonList.add(new Pokemon("Pikachu", "Electric"));
    pokemonList.add(new Pokemon("Charmander", "Fire"));
    pokemonList.add(new Pokemon("Squirtle", "Water"));
    pokemonList.add(new Pokemon("Bulbasaur", "Grass"));
    pokemonList.add(new Pokemon("Jigglypuff", "Normal"));
    pokemonList.add(new Pokemon("Snorlax", "Normal"));

    const iterator = pokemonList.createIterator();

    while (iterator.hasNext()) {
        const pokemon = iterator.next();
        console.log(pokemon);
    }
}
main();