import { fireball, electricArc, longstrider } from './modules/mock-up-spells.js';
import { renderSpell, renderSpellBook } from './modules/render-spell.js';
import { formModalElement, formOpenBtn, createCardBtn, createSpellObjectFromForm, openModal, closeModal } from './modules/form-modal.js';

const spellBook = [];

spellBook.push(fireball);
spellBook.push(electricArc);
spellBook.push(longstrider);

const cardContainer = document.querySelector('.card-container');

renderSpellBook(spellBook, cardContainer);

formOpenBtn.addEventListener('click', () => {
    openModal();
});

window.addEventListener('click', (event) => {
    if (event.target === formModalElement) {
        closeModal();
    }
});

const addNewSpell = () => {
    const newSpell = createSpellObjectFromForm();
    spellBook.push(newSpell);
    renderSpell(newSpell, cardContainer);
    closeModal();
};

createCardBtn.addEventListener('click', addNewSpell);