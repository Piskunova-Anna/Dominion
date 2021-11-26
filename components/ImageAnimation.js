export class ImageAnimation {
  constructor(left, right) {
    this._right = right;
    this._left = left;
  }

  arrowRight(massive, i) {
    if (massive[i] < massive.length) {
      i++;
      this._left.disabled = '';
    }
    else {
      this._right.disabled = 'true';
    }
  }

  arrowLeft(massive, i) {
    if (massive[i] > i === 0) {
      i--;
      this._right.disabled = '';
    }
    else {
      this._left.disabled = 'true';
    }
  }
}