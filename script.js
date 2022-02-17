'use strict';
let txt = document.querySelector('#txt');
let capsLockIsPressed = true;
const typing = function(event) {
    if (event.code === `Space`) {
        txt.innerText += `\xa0`;
    } else if (event.code === `Enter`) {
        txt.innerText += `\n`;
    } else if (event.code === `Tab`) {
        txt.innerText += `\xa0\xa0\xa0\xa0\xa0\xa0`;
    } else if (event.code === `Backspace`) {
        txt.innerText = txt.innerText.slice(0, -1);
    } else txt.innerHTML += event.key.replace('Shift', '');
};
document.addEventListener('keydown', function(event) {
    if (event.key === 'z' || event.key === 'Z') {
        document.getElementById('z').classList.add('pressed');
    } else if (event.key === 'x' || event.key === 'X') {
        document.getElementById('x').classList.add('pressed');
    } else if (event.key === 'c' || event.key === 'C') {
        document.getElementById('c').classList.add('pressed');
        typing(event);
    } else if (event.key === 'v' || event.key === 'V') {
        document.getElementById('v').classList.add('pressed');
        typing(event);
    } else if (event.key === 'b' || event.key === 'B') {
        document.getElementById('b').classList.add('pressed');
        typing(event);
    } else if (event.key === 'n' || event.key === 'N') {
        document.getElementById('n').classList.add('pressed');
        typing(event);
    } else if (event.key === 'm' || event.key === 'M') {
        document.getElementById('m').classList.add('pressed');
        typing(event);
    } else if (event.key === ',') {
        document.getElementById('comma').classList.add('pressed');
        typing(event);
    } else if (event.key === '.') {
        document.getElementById('dot').classList.add('pressed');
        typing(event);
    } else if (event.key === '/') {
        document.getElementById('forward-slash').classList.add('pressed');
        typing(event);
    } else if (event.key === 'a' || event.key === 'A') {
        document.getElementById('a').classList.add('pressed');
        typing(event);
    } else if (event.key === 's' || event.key === 'S') {
        document.getElementById('s').classList.add('pressed');
        typing(event);
    } else if (event.key === 'd' || event.key === 'D') {
        document.getElementById('d').classList.add('pressed');
        typing(event);
    } else if (event.key === 'f' || event.key === 'F') {
        document.getElementById('f').classList.add('pressed');
        typing(event);
    } else if (event.key === 'g' || event.key === 'G') {
        document.getElementById('g').classList.add('pressed');
        typing(event);
    } else if (event.key === 'h' || event.key === 'H') {
        document.getElementById('h').classList.add('pressed');
        typing(event);
    } else if (event.key === 'j' || event.key === 'J') {
        document.getElementById('j').classList.add('pressed');
        typing(event);
    } else if (event.key === 'k' || event.key === 'K') {
        document.getElementById('k').classList.add('pressed');
        typing(event);
    } else if (event.key === 'l' || event.key === 'L') {
        document.getElementById('l').classList.add('pressed');
        typing(event);
    } else if (event.key === 'q' || event.key === 'Q') {
        document.getElementById('q').classList.add('pressed');
        typing(event);
    } else if (event.key === 'w' || event.key === 'W') {
        document.getElementById('w').classList.add('pressed');
        typing(event);
    } else if (event.key === 'e' || event.key === 'E') {
        document.getElementById('e').classList.add('pressed');
        typing(event);
    } else if (event.key === 'r' || event.key === 'R') {
        document.getElementById('r').classList.add('pressed');
        typing(event);
    } else if (event.key === 't' || event.key === 'T') {
        document.getElementById('t').classList.add('pressed');
        typing(event);
    } else if (event.key === 'y' || event.key === 'Y') {
        document.getElementById('y').classList.add('pressed');
        typing(event);
    } else if (event.key === 'u' || event.key === 'U') {
        document.getElementById('u').classList.add('pressed');
        typing(event);
    } else if (event.key === 'i' || event.key === 'I') {
        document.getElementById('i').classList.add('pressed');
        typing(event);
    } else if (event.key === 'o' || event.key === 'O') {
        document.getElementById('o').classList.add('pressed');
        typing(event);
    } else if (event.key === 'p' || event.key === 'P') {
        document.getElementById('p').classList.add('pressed');
        typing(event);
    } else if (event.key === '[') {
        document.getElementById('braket1').classList.add('pressed');
        typing(event);
    } else if (event.key === ']') {
        document.getElementById('braket2').classList.add('pressed');
        typing(event);
    } else if (event.key === ';') {
        document.getElementById('semicolon').classList.add('pressed');
        typing(event);
    } else if (event.key === `'`) {
        document.getElementById('apostrophe').classList.add('pressed');
        typing(event);
    } else if (event.key === `Enter`) {
        document.getElementById('enter').classList.add('pressed');
        typing(event);
    } else if (event.key === `\\`) {
        document.getElementById('back-slash').classList.add('pressed');
        typing(event);
    } else if (event.key === `Tab`) {
        typing(event);
    } else if (event.code === `Space`) {
        document.getElementById('space').classList.add('pressed');
        typing(event);
    } else if (event.code === `Backspace`) {
        document.getElementById('backspace').classList.add('pressed');
        typing(event);
    } else if (event.code === `ShiftRight`) {
        document.getElementById('shift-right').classList.add('pressed');
        typing(event);
    } else if (event.code === `ShiftLeft`) {
        document.getElementById('shift-left').classList.add('pressed');
    } else if (event.code === `CapsLock`) {
        if (capsLockIsPressed) {
            capsLockIsPressed = false;
            document.getElementById('caps-lock').classList.add('pressed');
        } else {
            document.getElementById('caps-lock').classList.remove('pressed');
            capsLockIsPressed = true;
        }
    } else if (event.code === `Backquote`) {
        document.getElementById('tilda').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit1`) {
        document.getElementById('1').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit2`) {
        document.getElementById('2').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit3`) {
        document.getElementById('3').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit4`) {
        document.getElementById('4').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit5`) {
        document.getElementById('5').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit6`) {
        document.getElementById('6').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit7`) {
        document.getElementById('7').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit8`) {
        document.getElementById('8').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit9`) {
        document.getElementById('9').classList.add('pressed');
        typing(event);
    } else if (event.code === `Digit0`) {
        document.getElementById('0').classList.add('pressed');
        typing(event);
    } else if (event.code === `Minus`) {
        document.getElementById('minus').classList.add('pressed');
        typing(event);
    } else if (event.code === `Equal`) {
        document.getElementById('equal').classList.add('pressed');
        typing(event);
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key === 'z' || event.key === 'Z') {
        document.getElementById('z').classList.remove('pressed');
    } else if (event.key === 'x' || event.key === 'X') {
        document.getElementById('x').classList.remove('pressed');
    } else if (event.key === 'c' || event.key === 'C') {
        document.getElementById('c').classList.remove('pressed');
    } else if (event.key === 'v' || event.key === 'V') {
        document.getElementById('v').classList.remove('pressed');
    } else if (event.key === 'b' || event.key === 'B') {
        document.getElementById('b').classList.remove('pressed');
    } else if (event.key === 'n' || event.key === 'N') {
        document.getElementById('n').classList.remove('pressed');
    } else if (event.key === 'm' || event.key === 'M') {
        document.getElementById('m').classList.remove('pressed');
    } else if (event.key === ',') {
        document.getElementById('comma').classList.remove('pressed');
    } else if (event.key === '.') {
        document.getElementById('dot').classList.remove('pressed');
    } else if (event.key === '/') {
        document.getElementById('forward-slash').classList.remove('pressed');
    } else if (event.key === 'a' || event.key === 'A') {
        document.getElementById('a').classList.remove('pressed');
    } else if (event.key === 's' || event.key === 'S') {
        document.getElementById('s').classList.remove('pressed');
    } else if (event.key === 'd' || event.key === 'D') {
        document.getElementById('d').classList.remove('pressed');
    } else if (event.key === 'f' || event.key === 'F') {
        document.getElementById('f').classList.remove('pressed');
    } else if (event.key === 'g' || event.key === 'G') {
        document.getElementById('g').classList.remove('pressed');
    } else if (event.key === 'h' || event.key === 'H') {
        document.getElementById('h').classList.remove('pressed');
    } else if (event.key === 'j' || event.key === 'J') {
        document.getElementById('j').classList.remove('pressed');
    } else if (event.key === 'k' || event.key === 'K') {
        document.getElementById('k').classList.remove('pressed');
    } else if (event.key === 'l' || event.key === 'L') {
        document.getElementById('l').classList.remove('pressed');
    } else if (event.key === 'q' || event.key === 'Q') {
        document.getElementById('q').classList.remove('pressed');
    } else if (event.key === 'w' || event.key === 'W') {
        document.getElementById('w').classList.remove('pressed');
    } else if (event.key === 'e' || event.key === 'E') {
        document.getElementById('e').classList.remove('pressed');
    } else if (event.key === 'r' || event.key === 'R') {
        document.getElementById('r').classList.remove('pressed');
    } else if (event.key === 't' || event.key === 'T') {
        document.getElementById('t').classList.remove('pressed');
    } else if (event.key === 'y' || event.key === 'Y') {
        document.getElementById('y').classList.remove('pressed');
    } else if (event.key === 'u' || event.key === 'U') {
        document.getElementById('u').classList.remove('pressed');
    } else if (event.key === 'i' || event.key === 'I') {
        document.getElementById('i').classList.remove('pressed');
    } else if (event.key === 'o' || event.key === 'O') {
        document.getElementById('o').classList.remove('pressed');
    } else if (event.key === 'p' || event.key === 'P') {
        document.getElementById('p').classList.remove('pressed');
    } else if (event.key === '[') {
        document.getElementById('braket1').classList.remove('pressed');
    } else if (event.key === ']') {
        document.getElementById('braket2').classList.remove('pressed');
    } else if (event.key === ';') {
        document.getElementById('semicolon').classList.remove('pressed');
    } else if (event.key === `'`) {
        document.getElementById('apostrophe').classList.remove('pressed');
    } else if (event.key === `Enter`) {
        document.getElementById('enter').classList.remove('pressed');
    } else if (event.key === `\\`) {
        document.getElementById('back-slash').classList.remove('pressed');
    } else if (event.key === `Tab`) {
        document.getElementById('tab').classList.remove('pressed');
    } else if (event.code === `Space`) {
        document.getElementById('space').classList.remove('pressed');
    } else if (event.code === `Backspace`) {
        document.getElementById('backspace').classList.remove('pressed');
    } else if (event.code === `ShiftRight`) {
        document.getElementById('shift-right').classList.remove('pressed');
        typing(event);
    } else if (event.code === `ShiftLeft`) {
        document.getElementById('shift-left').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Backquote`) {
        document.getElementById('tilda').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit1`) {
        document.getElementById('1').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit2`) {
        document.getElementById('2').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit3`) {
        document.getElementById('3').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit4`) {
        document.getElementById('4').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit5`) {
        document.getElementById('5').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit6`) {
        document.getElementById('6').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit7`) {
        document.getElementById('7').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit8`) {
        document.getElementById('8').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit9`) {
        document.getElementById('9').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Digit0`) {
        document.getElementById('0').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Minus`) {
        document.getElementById('minus').classList.remove('pressed');
        typing(event);
    } else if (event.code === `Equal`) {
        document.getElementById('equal').classList.remove('pressed');
        typing(event);
    }
});