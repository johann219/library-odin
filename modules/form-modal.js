import { Spell } from './spell.js';

const formModalElement = document.querySelector('.form-modal');
const formOpenBtn = document.querySelector('.form-open');

const formBodyElement = formModalElement.querySelector('form');

const createCardBtn = formBodyElement.querySelector('.create-card');
const radioInputs = formBodyElement.querySelectorAll('input[type="radio"]');
const checkboxInputs = formBodyElement.querySelectorAll('input[type="checkbox"]');

const openModal = () => {
    formModalElement.style.display = 'block';
};

const closeModal = () => {
    formModalElement.style.display = 'none';
};

radioInputs.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        formBodyElement.querySelector('[checked]').removeAttribute('checked');
        event.target.setAttribute('checked', '');
    });
});

checkboxInputs.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.hasAttribute('checked')) {
            event.target.removeAttribute('checked');
        } else {
            event.target.setAttribute('checked', '');
        }
    });
});

const createSpellObjectFromForm = () => {
    const spellName = formBodyElement.querySelector('#spell-name').value;
    const spellType = formBodyElement.querySelector('input[type="radio"][checked]').value;
    const spellLevel = formBodyElement.querySelector('#spell-level').value;
    const spellTraits = formBodyElement.querySelector('#spell-traits').value.split(' ');

    const spellTraditions = [];
    formBodyElement.querySelectorAll('input[type="checkbox"][checked]').forEach((check) => spellTraditions.push(check.value));

    const spellCast = `${formBodyElement.querySelector('#spell-cast-actions').value} ${formBodyElement.querySelector('#spell-cast-components').value}`;
    const spellRange = formBodyElement.querySelector('#spell-range').value === '' ? null : formBodyElement.querySelector('#spell-range').value;
    const spellArea = formBodyElement.querySelector('#spell-area').value === '' ? null : formBodyElement.querySelector('#spell-area').value;
    const spellTarget = formBodyElement.querySelector('#spell-target').value === '' ? null: formBodyElement.querySelector('#spell-target').value;
    const spellSaving = formBodyElement.querySelector('#spell-saving').value === '' ? null: formBodyElement.querySelector('#spell-saving').value;
    const spellDuration = formBodyElement.querySelector('#spell-duration').value === '' ? null: formBodyElement.querySelector('#spell-duration').value;
    const spellDescription = formBodyElement.querySelector('#spell-description').value;
    const spellHeightened = formBodyElement.querySelector('#spell-heightened').value;
    const spellKnown = formBodyElement.querySelector('#spell-known').hasAttribute('checked');

    const spell = new Spell (
        spellName, 
        spellType,
        spellLevel,
        spellTraits,
        spellTraditions,
        spellCast,
        {
            spellRange,
            spellArea,
            spellTarget,
            spellSaving,
            spellDuration
        },
        spellDescription,
        spellHeightened,
        spellKnown
    );

    return spell;
};



export { formModalElement, formOpenBtn, createCardBtn, createSpellObjectFromForm, openModal, closeModal };
