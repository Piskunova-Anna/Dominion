export class Card {
    constructor(handleCardClick, arrow, data, cardSelector) {
        this._photo = data.photo[0];
        this._price = data.price;
        this._address = data.address;
        this._metro = data.metro;
        this._level = data.level;
        this._num = data.num;
        this._cardSelector = cardSelector;
        this._alt = data.address;
        this._text = data.text;
        this._handleCardClick = handleCardClick;
        this._arrow = arrow;
    }

    _getTemplate() {
        const newCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.object')
            .cloneNode(true);

        return newCard;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.object__photo_id').src = this._photo;
        this._element.querySelector('.object__photo_id').alt = this._alt;
        this._element.querySelector('.object__price').textContent = this._price;
        this._element.querySelector('.object__address').textContent = this._address;
        this._element.querySelector('.object__metro').textContent = this._metro;
        this._element.querySelector('.object__level').textContent = this._level;
        this._element.querySelector('.object__num').textContent = this._num;
        this._element.querySelector('.object__text').textContent = this._text;
    
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.object__photo_id').addEventListener('click', () => {
            this._handleCardClick.open({ photo: this._photo });
        })
        /*this._element.querySelector('.object__arrow_right').addEventListener('click', () => {
            this._arrow.arrowRight(this._photo, 0);
        })
        this._element.querySelector('.object__arrow_left').addEventListener('click', () => {
            this._arrow.arrowLeft(this._photo);
        })*/
    }
}