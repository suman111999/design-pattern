export enum ArtifactType {
    Bomb = 1,
    NPC,//non playable components
    Enemy
}

export interface IGameArtifact {
    name: string;
    move(): void;
    act(): void;
}

//EnenyType

export enum EnemyType {
    Goblin = 1,
    Orc,
    Skeleton
}