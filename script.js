const spellBook = [];

const SpellStats = function (
    spellRange = null,
    spellArea = null,
    spellTarget = null,
    spellSaving = null,
    spellDuration = null) {
        if(!new.target) {
            throw Error ("Need 'new' keyword to call a constructor");
        }

        this.spellRange = spellRange;
        this.spellArea = spellArea;
        this.spellTarget = spellTarget;
        this.spellSaving = spellSaving;
        this.spellDuration = spellDuration;
}

const Spell = function (
    spellName, 
    spellType,
    spellLevel,
    spellTraits,
    spellTraditions,
    spellCast,
    spellStats,
    spellDescription,
    spellHeightened,
    spellKnown = false) {
        if(!new.target) {
            throw Error ("Need 'new' keyword to call a constructor");
        }

        this.spellName = spellName;
        this.spellType = spellType;
        this.spellLevel = spellLevel;
        this.spellTraits = spellTraits.slice();
        this.spellTraditions = spellTraditions.slice();
        this.spellCast = spellCast.slice();
        
        this.spellStats = new SpellStats(
            spellStats.spellRange,
            spellStats.spellArea,
            spellStats.spellTarget,
            spellStats.spellSaving,
            spellStats.spellDuration,
        );
        
        this.spellDescription = spellDescription;
        this.spellHeightened = spellHeightened;
        this.spellKnown = spellKnown;
}

const fireball = new Spell (
    'Fireball',
    'Spell',
    '4',
    ['evocation', 'fire'],
    ['arcane', 'primal'],
    [2, 'verbal', 'somatic'],
    {
        spellRange: '500 feet',
        spellArea: '20-foot burst',
        spellSaving: 'basic Reflex',
    },
    'A roaring blast of fire detonates at a spot you designate, dealing 6d6 fire damage.',
    '(+1) The damage increases by 2d6.',
    false
);

const electricArc = new Spell (
    'Electric Arc',
    'Cantrip',
    '1',
    ['cantrip', 'concentrate', 'electricity', 'manipulate'],
    ['arcane', 'primal'],
    [2, 'verbal', 'somatic'],
    {
        spellRange: '30 feet',
        spellTarget: '1 or 2 creatures',
        spellSaving: 'basic Reflex',
    },
    'An arc of lightning leaps from one target to another. You deal electricity damage equal to 1d4 plus your spellcasting modifier.',
    '(+1) The damage increases by 1d4.',
    false
);

const longstrider = new Spell (
    'Longstrider',
    'Spell',
    '1',
    ['transmutation'],
    ['arcane', 'primal'],
    [2, 'verbal', 'somatic'],
    {
        spellDuration: '1 hour',
    },
    'You lengthen your stride beyond what should be possible. You gain a +10-foot status bonus to your Speed',
    '(2nd) The duration increases to 8 hours',
    false
);

const template = document.querySelector('template');
const container = document.querySelector('.content-container');

const createSpellHeader = (spell, card) => {
    card.querySelector('.spell-name').textContent = spell.spellName;
    card.querySelector('.spell-spec').textContent = `${spell.spellType} ${spell.spellLevel}`;
};

const createSpellTraits = (spell, card) => {
    const traits = new DocumentFragment();
    
    spell.spellTraits.forEach((trait) => {
        const traitElement = card.querySelector('.spell-trait').cloneNode(true);
        traitElement.textContent = trait;
        traits.append(traitElement);
    });

    card.querySelector('.spell-trait').remove();

    card.querySelector('.spell-traits-wrapper').append(traits);
};

const createSpellTraditions = (spell, card) => card.querySelector('.spell-traditions .stat-value').textContent = ` ${spell.spellTraditions.join(' ')}`;

const createSpellCast = (spell, card) => card.querySelector('.spell-cast .stat-value').textContent = ` ${spell.spellCast.join(' ')}`;

const createSpellRange = (spell,card) => {
    if (spell.spellStats.spellRange === null) {
        card.querySelector('.spell-range').remove();
        return;
    }
    card.querySelector('.spell-range .stat-value').textContent = ` ${spell.spellStats.spellRange}`;
};

const createSpellArea = (spell,card) => {
    if (spell.spellStats.spellArea === null) {
        card.querySelector('.spell-area').remove();
        return;
    }
    card.querySelector('.spell-area .stat-value').textContent = ` ${spell.spellStats.spellArea}`;
};

const createSpellTarget = (spell,card) => {
    if (spell.spellStats.spellTarget === null) {
        card.querySelector('.spell-target').remove();
        return;
    }
    card.querySelector('.spell-target .stat-value').textContent = ` ${spell.spellStats.spellTarget}`;
};

const createSpellSaving = (spell,card) => {
    if (spell.spellStats.spellSaving === null) {
        card.querySelector('.spell-saving').remove();
        return;
    }
    card.querySelector('.spell-saving .stat-value').textContent = ` ${spell.spellStats.spellSaving}`;
};

const createSpellDuration = (spell,card) => {
    if (spell.spellStats.spellDuration === null) {
        card.querySelector('.spell-duration').remove();
        return;
    }
    card.querySelector('.spell-duration .stat-value').textContent = ` ${spell.spellStats.spellDuration}`;
};

const createSpellDescription = (spell, card) => card.querySelector('.spell-description').textContent = `${spell.spellDescription}`;

const createSpellHeightened = (spell, card) => {
    
    if (spell.spellHeightened === '') {
        card.querySelector('.spell-heightened').remove();
        return;
    }
    card.querySelector('.spell-heightened .stat-value').textContent = `${spell.spellHeightened}`
};

const createCardFromSpell = (spell, card) => {
    createSpellHeader(spell,card);
    createSpellTraits(spell, card);
    createSpellTraditions(spell, card);
    createSpellCast(spell, card);
    createSpellRange(spell, card);
    createSpellArea(spell, card)
    createSpellTarget(spell, card);
    createSpellSaving(spell, card);
    createSpellDuration(spell, card);
    createSpellDescription(spell, card);
    createSpellHeightened(spell, card);
    
    return card;
};

spellBook.push(fireball);
spellBook.push(electricArc);
spellBook.push(longstrider);

const renderSpellBook = (spellBook) => {
    const spellBookElement = new DocumentFragment();

    spellBook.forEach((spell) => {
        const card = template.content.cloneNode(true);
        spellBookElement.append(createCardFromSpell(spell, card));
    });
    
    container.append(spellBookElement);
};

const renderSpell = (spell) => {
    const card = template.content.cloneNode(true);
    container.append(createCardFromSpell(spell, card));
};

renderSpellBook(spellBook);

const formModal = document.querySelector('.form-modal');
const formOpen = document.querySelector('.form-open');

const openModal = () => {
    formModal.style.display = 'block';
};

const closeModal = () => {
    formModal.style.display = 'none';
};

formOpen.addEventListener('click', () => {
    openModal();
});

window.addEventListener('click', (event) => {
    if (event.target === formModal) {
        closeModal();
    }
});

const createCardBtn = document.querySelector('.create-card');

const radioInputs = document.querySelectorAll('input[type="radio"]');

radioInputs.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        document.querySelector('[checked]').removeAttribute('checked');
        event.target.setAttribute('checked', '');
    });
});

const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');

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
    const spellName = document.querySelector('#spell-name').value;
    const spellType = document.querySelector('input[type="radio"][checked]').value;
    const spellLevel = document.querySelector('#spell-level').value;
    const spellTraits = document.querySelector('#spell-traits').value.split(' ');

    const spellTraditions = [];
    document.querySelectorAll('input[type="checkbox"][checked]').forEach((check) => spellTraditions.push(check.value));

    const spellCast = document.querySelector('#spell-cast').value.split(' ');
    const spellRange = document.querySelector('#spell-range').value === '' ? null : document.querySelector('#spell-range').value;
    const spellArea = document.querySelector('#spell-area').value === '' ? null : document.querySelector('#spell-area').value;
    const spellTarget = document.querySelector('#spell-target').value === '' ? null: document.querySelector('#spell-target').value;
    const spellSaving = document.querySelector('#spell-saving').value === '' ? null: document.querySelector('#spell-saving').value;
    const spellDuration = document.querySelector('#spell-duration').value === '' ? null: document.querySelector('#spell-duration').value;
    const spellDescription = document.querySelector('#spell-description').value;
    const spellHeightened = document.querySelector('#spell-heightened').value;
    const spellKnown = document.querySelector('#spell-known').hasAttribute('checked');
    
    console.log(spellHeightened);

    const newSpell = new Spell (
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

    console.log(newSpell);

    spellBook.push(newSpell);

    renderSpell(newSpell);

    closeModal();
};

createCardBtn.addEventListener('click', createSpellObjectFromForm);

// const spellNameElement = clone.querySelector('.spell-name');
// const spellSpecElement = clone.querySelector('.spell-spec');
// const spellTraitsWrapperElement = clone.querySelector('.spell-traits-wrapper');
// const spellTraitElement = clone.querySelector('.spell-trait');
// const spellTraditionsElement = clone.querySelector('.spell-traditions');
// const spellCastElement = clone.querySelector('.spell-cast');
// const spellRangeElement = clone.querySelector('.spell-range');
// const spellAreaElement = clone.querySelector('.spell-area');
// const spellTargetElement = clone.querySelector('.spell-target');
// const spellSavingElement = clone.querySelector('.spell-saving');
// const spellDurationElement = clone.querySelector('.spell-duration');
// const spellDescriptionElement = clone.querySelector('.spell-description');
// const spellHeightenedElement = clone.querySelector('.spell-heightened');