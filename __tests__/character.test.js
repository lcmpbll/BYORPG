import { cleric, knight } from '../src/js/character.js';

describe('character', () => {
  test('should correctly print name heal', () => {
    const seung = cleric('seung');
    expect(seung.heal()).toEqual('seung heals.');
  });

  test('should correctly print name tip fedora', () => {
    const regularKnight = knight(3, 5);
    const seung2 = regularKnight('seung2');
    expect(seung2.tipFedora()).toEqual('seung2 tips fedora.');
  });

  test('should correctly print joust', () => {
    const regularKnight = knight(3, 5);
    const seung2 = regularKnight('seung2');
    expect(seung2.joust()).toEqual('seung2 knocks you down with a joust');
  });

  test('should correctly print joust', () => {
    const poopKnight = knight(5, 10);
    const filmer = poopKnight('filmer');
    expect(filmer.joust()).toEqual('filmer knocks you down with a joust');
  });

  test('enemy knight has attack of 4', () => {
    const enemyKnight = knight(4, 7);
    const liam = enemyKnight('liam');
    expect(liam.attack).toEqual(4);
    expect(liam.hp).toEqual(7);
  });
});
