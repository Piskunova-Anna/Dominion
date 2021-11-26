import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popup, image, text) {
        super(popup);
        this._image = image;
        this._text = text;
    }

    open({ photo }) {
        this._image.src = photo;
        super.open();
    }
}