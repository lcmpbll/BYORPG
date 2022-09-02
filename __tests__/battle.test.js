import { battle } from '../src/js/battle.js';
import { storeState, setString, knight } from '../src/js/character.js';

describe('battle', () => {
  test('should subtract seung2 attack from liam hp', () => {
    const regularKnight = knight(3, 5);
    const poopKnight = knight(5, 10);
    const enemyKnight = knight(4, 7);

    const seung2 = regularKnight('seung2');
    const filmer = poopKnight('filmer');
    const liam = enemyKnight('liam');
    const damagedLiam = battle(seung2, liam);
    expect(damagedLiam.hp).toEqual(4);
  });

  // test('should correctly create a className object using x', () => {
  //   const regularKnight = knight(3, 5);
  //   const poopKnight = knight(5, 10);
  //   const enemyKnight = knight(4, 7);

  //   const seung2 = regularKnight('seung2');
  //   const filmer = poopKnight('filmer');
  //   const liam = enemyKnight('liam');
  //   const battle1 = battle(seung2, liam);
  //   const battle1Result = storeState(battle1);
  //   expect(battle1Result()).toEqual(4);
  // });

  test('change liam hp using setString()', () => {
    const regularKnight = knight(3, 5);
    const poopKnight = knight(5, 10);
    const enemyKnight = knight(4, 7);

    const seung2 = regularKnight('seung2');
    const filmer = poopKnight('filmer');
    const liam = enemyKnight('liam');
    // const battle1 = battle(seung2, liam);
    // const attackChar = setString('hp')(battle1);
    // const liamAttacked = attackChar(liam);
    const liamAttacked = battle(seung2, liam);
    expect(liamAttacked.hp).toEqual(4);
  });
});
