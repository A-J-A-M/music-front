import _ from 'lodash';
import React from 'react';

import './Key.css';
// import { NOTE_TO_KEY } from './constants';
const NOTE_TO_KEY = {
  c2   : 'q',
  df2  : '2',
  d2   : 'w',
  ef2  : '3',
  e2   : 'e',
  f2   : 'r',
  gf2  : '5',
  g2   : 't',
  af2  : '6',
  a2   : 'y',
  bf2  : '7',
  b2   : 'u',
  c3   : 'z',
  df3  : 's',
  d3   : 'x',
  ef3  : 'd',
  e3   : 'c',
  f3   : 'v',
  gf3  : 'g',
  g3   : 'b',
  af3  : 'h',
  a3   : 'n',
  bf3  : 'j',
  b3   : 'm',
  c4   : 'k',
  df4  : 'i',
  d4   : '8',
  ef4  : 'l',
  e4   : 'o',
  f4   : '9',
  gf4  : 'ñ',
  g4   : 'p',
  af4  : '0',
  a4   : '\-',
  bf4  : '\+',
  b4   : '\¿',
};

class Key extends React.Component {
  noteIsFlat = (note) => {
    return note.length > 2;
  }

  keyIsPressed = (note, pressedKeys) => {
    return _.includes(pressedKeys, NOTE_TO_KEY[note]);
  }

  render() {
    let keyClassName = "key";
    const noteIsFlat = this.noteIsFlat(this.props.note);
    const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);
    if (noteIsFlat) {
      keyClassName += " flat";
    }
    if (keyIsPressed) {
      keyClassName += " pressed";
    }

    let key;
    if (noteIsFlat) {
      key = <div className={keyClassName}></div>;
    } else {
      key = (
        <div className={keyClassName}>
          <div className="key-text">{this.props.note.toUpperCase()}</div>
        </div>
      );
    }
    return key;
  }
}

export { Key };