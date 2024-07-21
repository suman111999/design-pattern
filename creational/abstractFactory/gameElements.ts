import { IGameArtifact } from "./interfaces";

export class BaseGameArtifact implements IGameArtifact {
    constructor(public name: string) {
        this.name = name;
        console.log(`Creating ${this.name}`);
    }

    act() {
        console.log(`super act`);
    }

    move() {
        console.log(`super move`);
    }
};

export class Bomb extends BaseGameArtifact {
    constructor(name: string) {
        super(name);
        console.log(`Creating ${this.name} as a bomb`);
    }
    move() {
        console.log(`${this.name} explodes!`);
    }

    act() {
        console.log(`${this.name} detonates!`);
    }
}

export class Enemy extends BaseGameArtifact {
    constructor(name: string) {
        super(name);
        console.log(`Creating ${this.name} as an enemy`);
    }
    move() {
        console.log(`${this.name} moves!`);
    }

    act() {
        console.log(`${this.name} attacks!`);
    }
}

export class NPC extends BaseGameArtifact {
    constructor(name: string) {
        super(name);
        console.log(`Creating ${this.name} as an NPC`);
    }

    move() {
        console.log(`${this.name} talks!`);
    }

    act() {
        console.log(`${this.name} does nothing!`);
    }
}

// Type of Enemey
// Goblin = 1,
//     Orc,
//     Skeleton

export class Goblin extends Enemy {
    constructor(name: string) {
        super(name);
        console.log(`Creating ${this.name} as a goblin`);
    }
    move() {
        console.log(`${this.name} moves slowly!`);
    }

    act() {
        console.log(`${this.name} attacks with a club!`);
    }
}

export class Orc extends Enemy {
    constructor(name: string) {
        super(name);
        console.log(`Creating ${this.name} as an orc`);
    }

    move() {
        console.log(`${this.name} moves quickly!`);
    }

    act() {
        console.log(`${this.name} attacks with a sword!`);
    }
}

export class Skeleton extends Enemy {
    constructor(name: string) {
        super(name);
        console.log(`Creating ${this.name} as a skeleton`);
    }

    move() {
        console.log(`${this.name} moves silently!`);
    }

    act() {
        console.log(`${this.name} attacks with a skeletal weapon!`);
    }
}

