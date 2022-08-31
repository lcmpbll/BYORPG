import { storeState, changeInt, setString, knight } from './character.js';

const regularKnight = knight(3, 5);
const poopKnight = knight(5, 10);
const enemyKnight = knight(4, 7);

const seung2 = regularKnight('seung2');
const filmer = poopKnight('filmer');
const liam = enemyKnight('liam');

export const battle = (prop1, prop2) => {
  const battle1 = prop2.hp - prop1.attack;
  const attacked = setString('hp')(battle1);
  return attacked(prop2);
};

// export const poopAttackEnemy = changeInt("hp")(-5);

// use changeInt to change prop2's hp
// const attackChar = changeInt(liam.hp)(battle1);
// const battle1Result = storeState(battle1);
// const battle1 = battle(seung2, liam);
// const battle1Result = battle1.storeState();

// const knight = (attack, hp) => {
//   return (name) => {
//     return {
//       name,
//       attack,
//       hp,
//       ...tipFedora(name),
//       ...joust(name),
//     };
//   };
// };
