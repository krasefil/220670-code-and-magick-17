'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  if(!arr.length ) return;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120,40);
  ctx.fillText('Список результатов:', 120,70);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + TEXT_WIDTH + GAP + ((TEXT_WIDTH + BAR_WIDTH)* i), CLOUD_Y + BAR_WIDTH + BAR_WIDTH);
    ctx.fillText(names[i], CLOUD_X + TEXT_WIDTH + GAP + ((TEXT_WIDTH + BAR_WIDTH)* i), CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    ctx.fillStyle = names[i] == 'Вы'? 'rgba(255, 0, 0, 1)' : 'rgba('+randomInteger(0,255)+', '+randomInteger(0,255)+', '+randomInteger(0,255)+', 1)';
    ctx.fillRect(CLOUD_X + TEXT_WIDTH + GAP + ((TEXT_WIDTH + BAR_WIDTH)* i),  CLOUD_HEIGHT - TEXT_WIDTH + GAP +  FONT_GAP, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime );
    ctx.fillStyle = '#000';

  }
};
