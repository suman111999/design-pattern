import { EnemyFactory } from "./abstractFactoryClass";
import { EnemyType } from "./interfaces";

const enemyFactory = new EnemyFactory();

const goblin = enemyFactory.createGameElement('Goblin', EnemyType.Goblin);

const orc = enemyFactory.createGameElement('orc', EnemyType.Orc);

const skeleton = enemyFactory.createGameElement('Skeleton', EnemyType.Skeleton);

goblin.act();
goblin.move();

orc.act();
orc.move();

skeleton.act();
skeleton.move();