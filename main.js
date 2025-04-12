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

const spellKnownBtns = document.querySelectorAll('.spell-known');
const spellDeleteBtns = document.querySelectorAll('.spell-delete');

const changeSpellStatus = (e) => {
    const spellCard = e.target.closest('.card');
    const spellObject = spellBook.find((spell) => spell.spellID === spellCard.querySelector('.spell-id').textContent);

    if (spellObject.spellKnown) {
        spellObject.spellKnown = false;
        spellCard.querySelector('.spell-known').textContent = 'Learn spell';
        spellCard.classList.remove('known');
    } else {
        spellObject.spellKnown = true;
        spellCard.querySelector('.spell-known').textContent = 'Forget spell';
        spellCard.classList.add('known');
    }
};

const deleteSpell = (e) => {
    const spellCard = e.target.closest('.card');
    const spellObject = spellBook.find((spell) => spell.spellID === spellCard.querySelector('.spell-id').textContent);

    spellBook.splice(spellBook.indexOf(spellObject), 1);
    spellCard.remove();
};

spellKnownBtns.forEach((btn) => btn.addEventListener('click', changeSpellStatus));

spellDeleteBtns.forEach((btn) => btn.addEventListener('click', deleteSpell));