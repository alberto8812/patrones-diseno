/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface Abilitie {
  use(): void;
}

class SwordAttack implements Abilitie {
  use(): void {
    console.log('Ataque con espada');
  }
}
class MagicSpell implements Abilitie {
  use(): void {
    console.log('Lanzar hechizo');
  }
}

/**
 * ! Implementación del patrón Bridge
 */
abstract class Character {
  protected abilitie: Abilitie;
  constructor(abilitie: Abilitie) {
    this.abilitie = abilitie;
  }
  setAbilitie(abilitie: Abilitie): void {
    this.abilitie = abilitie;
  }
  // Método que delega la funcionalidad a la implementación
  //como es una clase abstracta permite definir quien usa la habilidad en las clases hijas
  abstract performAbility(): void;
}

class Warrior extends Character {
  performAbility(): void {
    console.log('Guerrero');
    this.abilitie.use();
  }
}

class Mage extends Character {
  performAbility(): void {
    console.log('Mago');
    this.abilitie.use();
  }
}

function main() {
  const swordAttack = new SwordAttack();
  const magicSpell = new MagicSpell();

  const warrior = new Warrior(swordAttack);
  const mage = new Mage(magicSpell);

  warrior.performAbility();
  mage.performAbility();

  warrior.setAbilitie(magicSpell);
  warrior.performAbility();
}
