/*
Character creation: Use composition to generate different character types. Be creative with your character types... warriors, wizards, scientists, prom queen... whatever! Characters should have specific attributes. For instance, in a medieval RPG, characters might have strength and intelligence attributes among others. In an '80's high school RPG, characters might have snark and charm. You can add and even update these attributes using composition.
*/

// some functional methods here

//
export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// for incrementing number based fields
export const changeInt = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

// for setting string fields
export const setString = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: value,
    });
  };
};

const changeAttack = changeInt('throwshit');
const setAttack = setString('throwshit');
// attack();

/*

person = {
  name,
  job = {
    name,
    attack = {
      regularAttack,
      specialAttack,
      ultimateAttack,
    },
    buff
  }
  hp
},
declareName(),

*/

const declareName = (person) => ({
  declareName: () => {
    return `My name is ${person.name} and my job is ${person.job}.`;
  },
});

// const attack = changeInt('attack');

// const character = (job) => {
//   return (name) => {
//     let person = {
//       name,
//       job,
//     };
//     return { ...declareName(person), ...storeState(job) };
//   };
// };

//creates the knight
export const knight = (attack, hp) => {
  const iniX = 0;
  const iniY = 0;
  return (name) => {
    return {
      name,
      attack,
      hp,
      x: iniX,
      y: iniY,
      ...tipFedora(name),
      ...joust(name),
    };
  };
};

// movement
const move = (x, y) => ({
  
})

//behaviors of the knight

const joust = (prop) => ({
  joust: () => {
    return `${prop} knocks you down with a joust`;
  },
});

const tipFedora = (person) => ({
  tipFedora: () => {
    return `${person} tips fedora.`;
  },
});

//creates the cleric

export const cleric = (name) => {
  let character = {
    name,
  };
  return { ...heal(character) };
};

//behaviors of the cleric

const heal = (person) => ({
  heal: () => {
    return `${person.name} heals.`;
  },
});

// const throwPotion = changeInt('throwPotion');

// // functions derived from functional methods
// const photosynthesis = changeInt('light');
// const cleric = storeState('cleric');
// cleric(throwPotion(3));

// const charKnight = character(knight);
// const charRobotPirate = character('robotPirate');
// const charCleric = character('cleric');

// example on creation

// const seung = storeState(charCleric('Seung'));
// console.log(seung.declareName());
// console.log(seung().declareName());
// console.log(seung(setAttack(3)));
// console.log(seung(setAttack(-3)));
