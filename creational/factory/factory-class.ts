import { Bomb, Enemy, NPC } from "./gameElements";
import { ArtifactType } from "./interfaces";

export class Factory {
    //this is factory method to create objects
    createGameArtifact(name: string, elementType: ArtifactType) {
        switch (elementType) {
            case ArtifactType.Bomb:
                return new Bomb(name);
            case ArtifactType.NPC:
                return new NPC(name);
            case ArtifactType.Enemy:
                return new Enemy(name);
            default:
                throw new Error('Invalid artifact type');
        }
    }
}