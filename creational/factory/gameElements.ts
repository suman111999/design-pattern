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

