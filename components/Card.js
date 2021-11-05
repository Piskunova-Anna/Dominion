export class Card {
    constructor(/*handleCardClick, handleCompClick,*/ data, cardSelector) {
        this._photo = data.photo;
        this._price = data.price;
        this._address = data.address;
        this._metro = data.metro;
        this._level = data.level;
        this._num = data.num;
        this._cardSelector = cardSelector;
        this._alt = data.address;
        this._text = data.text;
        /*this._handleCardClick = handleCardClick;
        this._compositionClick = handleCompClick;*/
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
        /*this._setEventListeners();*/

        this._element.querySelector('.object__photo').src = this._photo;
        this._element.querySelector('.object__photo').alt = this._alt;
        this._element.querySelector('.object__price').textContent = this._price;
        this._element.querySelector('.object__address').textContent = this._address;
        this._element.querySelector('.object__metro').textContent = this._metro;
        this._element.querySelector('.object__level').textContent = this._level;
        this._element.querySelector('.object__num').textContent = this._num;
        this._element.querySelector('.object__text').textContent = this._text;

        return this._element;
    }

   /* _setEventListeners() {
        this._element.querySelector('.grid__image').addEventListener('click', () => {
            this._handleCardClick.open({ name: this._name, image: this._image });
        })
        this._element.querySelector('.grid__composition').addEventListener('click', () => {
            this._compositionClick.open({ text: this._description });
        })
    }*/
}