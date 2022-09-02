import { setString, changeInt } from "./character.js";

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
  const heal = char.hp + item;
  const health = setString('hp')(heal);
  return health(char);
};

export const useItem = (char) => {
  //const usedItem = item;
  const itemUsed = setString('food')(0);
  return itemUsed(char);
}
//Stretch goal find a way to eat partial food.

// export const itemConsumed = (item, char) => {
//   return (consumeItem) => {
//     const newChar = consumeItem(item, char);
//     return (useItem) => {
//       const character = useItem(newChar);
//       return character;
//     }
   
//   }
  
// };

// export const itemConsumed = (item, char) => {
//   return () {

//     ...useItem(char),
//     ...consumeItem(item, char),
//   }
// };

export const foodUsed = (item, char) => {
  const charAte = useItem(char);
  const itemUsed = consumeItem(item, charAte);
  return itemUsed;
}