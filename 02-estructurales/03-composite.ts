/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */
interface FilesystemComponent {
  showDetails(indent?: string): void;
}

class File implements FilesystemComponent {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  showDetails(indent: string = ''): void {
    console.log(`${indent}Archivo: ${this.name}`);
  }
}

class Folder implements FilesystemComponent {
  private name: string;
  private contents: FilesystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }
  addComponent(component: FilesystemComponent): void {
    this.contents.push(component);
  }

  /**
   * metodo recursivo que muestra los detalles de los archivos y carpetas
   * @param indent me
   */

  showDetails(indent?: string): void {
    console.log(`${indent}Carpeta: ${this.name}`);
    indent = indent + ' ';
    this.contents.forEach((component) => {
      component.showDetails(indent + "");
    }
    );
  }
}

function main() {
  const file1 = new File('Archivo 1');
  const file2 = new File('Archivo 2');
  const file3 = new File('Archivo 3');
  const file4 = new File('Archivo 4');
  const file5 = new File('Archivo 5');

  const folder1 = new Folder('Carpeta 1');
  folder1.addComponent(file1);
  folder1.addComponent(file2);
  folder1.addComponent(file3);

  const folder2 = new Folder('Carpeta 2');
  folder2.addComponent(file4);
  folder2.addComponent(file5);

  const folder3 = new Folder('Carpeta 3');
  folder3.addComponent(folder1);

  const rootfolder = new Folder('Raíz');
  rootfolder.addComponent(folder2);
}
