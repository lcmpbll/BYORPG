import { itemConsumed, consumeItem, storeItem2 } from '../src/js/inventory.js';
import { knight, setString } from '../src/js/character.js';

describe('inventory', () => {
  test('some function to test', () => {
    const poopKnight = knight(5, 10);
    const filmer = poopKnight('filmer');
    // const food = storeItem('food')(3);
    const filmerWithFood = setString('food')(3);
    // const filmerWithFood = food(filmer);
    expect(filmerWithFood(filmer).food).toEqual(3);
  });

  test('store item', () => {
    const poopKnight = knight(5, 10);
    const filmer = poopKnight('filmer');
    const food = storeItem2('food')(3);
    const filmerWithFood = food(filmer);
    expect(filmerWithFood.food).toEqual(3);
  });

  test('consume item', () => {
    const poopKnight = knight(5, 7);
    const filmer = poopKnight('filmer');
    const food = storeItem2('food')(3);
    const filmerWithFood = food(filmer);
    const filmerAteFood = consumeItem(food, filmerWithFood);
    expect(filmerAteFood.hp).toEqual(10);
  });

  test('consume item', () => {
    const poopKnight = knight(5, 7);
    const filmer = poopKnight('filmer');
    const food = storeItem2('food')(3);
    const filmerWithFood = food(filmer);
    const filmerAteFood = itemConsumed(food, filmerWithFood);
    expect(filmerAteFood).toEqual(0);
  });
});
