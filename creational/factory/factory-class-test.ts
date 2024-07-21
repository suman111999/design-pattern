import { Factory } from "./factory-class";
import { ArtifactType } from "./interfaces";

const factory = new Factory();

const cain = factory.createGameArtifact('Cain', ArtifactType.NPC);
const bomb = factory.createGameArtifact('bomb', ArtifactType.Bomb);
const mohan = factory.createGameArtifact('mohan', ArtifactType.Enemy);

cain.act();
cain.move();

bomb.act();
bomb.move();

mohan.act();
mohan.move();