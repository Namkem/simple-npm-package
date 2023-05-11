"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var lyrics = ['Trrr Stibidi', 'Dop Dop Dop Dop Dop', 'Yes Yes Yes Yes', 'Shtib Shtibidi Dip Dibidi', 'Wwww Yes Yes Yes Yes'];
var alreadySung = [];
var lyricsBoard = document.createElement('div');
var line = 0;
var singMeASong = function singMeASong() {
  if (line == 0) {
    document.body.appendChild(lyricsBoard);
  }
  if (line < lyrics.length) {
    alreadySung.push(lyrics[line++]);
    lyricsBoard.innerText(alreadySung.join("<br />"));
    setTimeout(singMeASong, 1000);
  }
};
var _default = singMeASong;
exports["default"] = _default;