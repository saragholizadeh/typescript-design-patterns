interface Prototype<T> {
  clone(): T;
}

class CharacterTemp implements Prototype<CharacterTemp> {
  constructor(
    public name: string,
    public health: number,
    public speed: number,
    public weapon: string,
    public skinColor: string
  ) {}

  clone(): CharacterTemp {
    return new CharacterTemp(
      this.name,
      this.health,
      this.speed,
      this.weapon,
      this.skinColor
    );
  }
}

const warriorPrototype = new CharacterTemp(
  "Warrior",
  100,
  30,
  "Sword",
  "Tan"
);

const archerPrototype = new CharacterTemp(
  "Archer",
  70,
  50,
  "Bow",
  "White"
);

const player1 = warriorPrototype.clone();
player1.name = "Ali";

const player2 = warriorPrototype.clone();
player2.name = "Reza";

const player3 = archerPrototype.clone();
player3.name = "Sara";
