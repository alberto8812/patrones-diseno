/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

import { COLORS } from '../helpers/colors.ts';


interface Location {
    display(x: number, y: number): void;
}

// flyweight

class LocationIcon implements Location {
    private type: string;//hotel, restaurant, etc
    private iconImage: string;//imagen del marcador
    constructor(type: string, iconImage: string) {
        this.type = type;
        this.iconImage = iconImage;
    }

    display(x: number, y: number): void {
        console.log(`Mostrando ${this.type} en (${x}, ${y}) con el icono ${this.iconImage}`);
    }
}

//fabrica de flyweights
/**
 * tiene todos los elementos que van a estar prensete en memoria una unica vez
 */
class LocationIconFactory {
    //grupo de marcadores que comparten el icono de laubicaion
    private icons: Record<string, LocationIcon> = {};

    getLocation(type: string): LocationIcon {
        let location = this.icons[type];
        if (!location) {
            const iconImage = `imagen_de_${type.toLocaleLowerCase()}.png`;
            this.icons[type] = new LocationIcon(type, iconImage);
        }
        return location;
    }
}
//


class MapLocation {
    private coordinattes: { x: number, y: number }
    private icon: LocationIcon;

    constructor(icon: LocationIcon, x: number, y: number) {
        this.icon = icon;
        this.coordinattes = { x, y };
    }

    display(): void {
        this.icon.display(this.coordinattes.x, this.coordinattes.y);
    }

}


function mainFlyweight() {
    const facttory = new LocationIconFactory();

    const locations = [
        new MapLocation(facttory.getLocation('hotel'), 10, 20)
    ]
}