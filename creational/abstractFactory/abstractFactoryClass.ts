import { Goblin, Orc, Skeleton } from "./gameElements";
import { ArtifactType, EnemyType } from "./interfaces";


//simple Factory
// export class Factory {
//     //this is factory method to create objects
//     createGameArtifact(name: string, elementType: ArtifactType) {
//         switch (elementType) {
//             case ArtifactType.Bomb:
//                 return new Bomb(name);
//             case ArtifactType.NPC:
//                 return new NPC(name);
//             case ArtifactType.Enemy:
//                 return new Enemy(name);
//             default:
//                 throw new Error('Invalid artifact type');
//         }
//     }
// }

//we can extend this to create ArtifactType,EnemyType and if in future want to create some other relatable objects,we can use it.
abstract class Factory {
    createGameElement(name: string, elementType: ArtifactType | EnemyType) {

    }
}

//this create relatable object i.e enemy Type
export class EnemyFactory extends Factory {
    constructor() {
        super();
    }

    createGameElement(name: string, elementType: EnemyType) {
        switch (elementType) {
            case EnemyType.Goblin:
                return new Goblin(name);
            case EnemyType.Orc:
                return new Orc(name);
            case EnemyType.Skeleton:
                return new Skeleton(name);
            default:
                throw new Error('Invalid enemy type');
        }
    }
}



