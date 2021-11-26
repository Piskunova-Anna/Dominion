import { flats, flexTable, popupPicture, popupfullPic, popupPicName, arrow, arrowLeft, arrowRight } from '../utils/constants.js';
import { flats, flexTable } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { ImageAnimation } from '../components/ImageAnimation.js';

const openFullImg = new PopupWithImage(popupPicture, popupfullPic, popupPicName);
const massiveImg = new ImageAnimation(arrowLeft, arrowRight);

function cardRenderer(item) {
    const card = new Card(openFullImg, massiveImg, item, '.template__object');
    const generateCard = card.generateCard();
    section.addItem(generateCard);
}

const section = new Section({ items: flats, renderer: (item) => { cardRenderer(item) } }, flexTable);
section.renderItems();

openFullImg.setEventListeners();