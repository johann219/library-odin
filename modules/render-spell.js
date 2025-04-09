import { createCardElements } from './create-card-elements.js';

const template = document.querySelector('template');

const createTemplateClone = () => template.content.cloneNode(true);

const renderSpell = (spell, container) => {
    const card = createTemplateClone();
    container.append(createCardElements(spell, card));
};

const renderSpellBook = (spellBook, container) => {
    const spellBookElement = new DocumentFragment();

    spellBook.forEach((spell) => renderSpell(spell, spellBookElement));
    
    container.append(spellBookElement);
};

export { renderSpell, renderSpellBook };