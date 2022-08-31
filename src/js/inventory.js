import { setString } from "./character.js";

export const storeItem = (prop) => {
  return (value) => ({
    [prop]: [value],
  });
};

export const storeItem2 = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: value,
    });
  };
};

export const consumeItem = (item, char) => {
  const heal = char.hp + item.food;
  const health = setString('hp')(heal);
  //  char.setString('food')(-(heal));
  return health(char);
};

export const useItem = (item, char) => {
  const usedItem = item.food;
  const itemUsed = setString('hp')(- (usedItem));
  return itemUsed(char);
}

export const itemConsumed = (item, char) => {
  consumeItem(item, char);
  useItem(item, char);
  return char;
}