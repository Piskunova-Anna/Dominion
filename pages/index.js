import { flats, flexTable } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';

function cardRenderer(item) {
    const card = new Card( item, '.template__object');
    const generateCard = card.generateCard();
    section.addItem(generateCard);
}

const section = new Section({ items: flats, renderer: (item) => { cardRenderer(item) } }, flexTable);
section.renderItems();