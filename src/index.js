import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { knight } from './js/character.js';
import { battle } from './js/battle.js';
import shovelKnight from './img/shovelknight.png';
import blackKnight from './img/blackknight.png';
import sporeKnight from './img/sporeknight.png';

// User Interface Logic
$(function () {
  let knights = [];
  let pKnights = [];
  let eKnights = [];
  let kCounter = 1;
  let pCounter = 1;
  let eCounter = 1;

  let grid = new Array(7);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(8);
  }
  let battlers = [];

  // code for the webpage here
  $('#addRegKnight').on('click', function () {
    const name = $('#regKnightName').val().toUpperCase();
    const regKnight = knight(3, 5);
    const namedKnight = regKnight(name);

    createKnight(namedKnight, knights, kCounter, 'regKnight', shovelKnight);
  });

  $('#addPoopKnight').on('click', function () {
    const name = $('#poopKnightName').val();
    const poopKnight = knight(5, 10);
    const namedKnight = poopKnight(name);
    createKnight(namedKnight, pKnights, pCounter, 'pKnight', sporeKnight);
  });

  $('#addEnemyKnight').on('click', function () {
    const name = $('#enemyKnightName').val();
    const enemyKnight = knight(4, 7);
    const namedKnight = enemyKnight(name);
    createKnight(namedKnight, eKnights, eCounter, 'eKnight', blackKnight);
  });

  $('#battle').on('click', function () {
    if (battlers.length === 2) {
      console.log(`${battlers[0].name} vs. ${battlers[1].name}`);
      battlers[1] = battle(battlers[0], battlers[1]);
      console.log(battlers);
      console.log($('#attacker').children('div'));
      $(`#row${battlers[0].x}col${battlers[0].y}`).append($('#attacker').children('div'));
      // grid[battlers[1].x][battlers[1].y] = battlers[1];
      $(`#row${battlers[1].x}col${battlers[1].y}`).append($('#defender').children('div'));
      $('#vs').hide();
    }
  });

  function createKnight(knight, knightList, counter, knightType, knightImg) {
    let div = document.createElement('div');
    div.className = `${knightType}${counter} card ${knightType}`;
    let img = document.createElement('img');
    img.src = knightImg;
    img.id = `${knight.name}`;
    img.addEventListener('click', () => {
      //function for attack or ???
      console.log('You clicked ' + knight);
      if (battlers.length < 2) {
        battlers.push(knight);
        console.log(battlers);
      }
      if (battlers[0] === knight) {
        $('#attacker').append(div);
      } else if (battlers[1] === knight) {
        $('#vs').show();
        $('#defender').append(div);
      }
      // p.innerText = `${knight.name} HP: ${knight.hp}`;
    });
    let p = document.createElement('p');
    p.innerText = `${knight.name} HP: ${knight.hp}`;
    div.append(img);
    div.append(p);

    counter++;
    knightList.push(knight);
    const x = $(`#${knightType}X`).val();
    const y = $(`#${knightType}Y`).val();

    if (grid[x][y] == null) {
      knight.x = x;
      knight.y = y;
      grid[x][y] = knight;
      $(`#row${x}col${y}`).append(div);
    }
  }
});
