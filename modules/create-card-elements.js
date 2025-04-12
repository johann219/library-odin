const createSpellNameElement = (spell, card) => card.querySelector('.spell-name').textContent = spell.spellName;

const createSpellLevelElement = (spell, card) => card.querySelector('.spell-spec').textContent = `${spell.spellType} ${spell.spellLevel}`;

const createSpellTraitsElement = (spell, card) => {
    const traits = new DocumentFragment();
    
    spell.spellTraits.forEach((trait) => {
        const traitElement = card.querySelector('.spell-trait').cloneNode(true);
        traitElement.textContent = trait;
        traits.append(traitElement);
    });

    card.querySelector('.spell-trait').remove();

    card.querySelector('.spell-traits-wrapper').append(traits);
};

const createSpellTraditionsElement = (spell, card) => card.querySelector('.spell-traditions .stat-value').textContent = ` ${spell.spellTraditions.join(' ')}`;

const createSpellCastElement = (spell, card) => card.querySelector('.spell-cast .stat-value').textContent = ` ${spell.spellCast}`;

const createSpellRangeElement = (spell,card) => {
    if (spell.spellStats.spellRange === null) {
        card.querySelector('.spell-range').remove();
        return;
    }
    card.querySelector('.spell-range .stat-value').textContent = ` ${spell.spellStats.spellRange}`;
};

const createSpellAreaElement = (spell,card) => {
    if (spell.spellStats.spellArea === null) {
        card.querySelector('.spell-area').remove();
        return;
    }
    card.querySelector('.spell-area .stat-value').textContent = ` ${spell.spellStats.spellArea}`;
};

const createSpellTargetElement = (spell,card) => {
    if (spell.spellStats.spellTarget === null) {
        card.querySelector('.spell-target').remove();
        return;
    }
    card.querySelector('.spell-target .stat-value').textContent = ` ${spell.spellStats.spellTarget}`;
};

const createSpellSavingElement = (spell,card) => {
    if (spell.spellStats.spellSaving === null) {
        card.querySelector('.spell-saving').remove();
        return;
    }
    card.querySelector('.spell-saving .stat-value').textContent = ` ${spell.spellStats.spellSaving}`;
};

const createSpellDurationElement = (spell,card) => {
    if (spell.spellStats.spellDuration === null) {
        card.querySelector('.spell-duration').remove();
        return;
    }
    card.querySelector('.spell-duration .stat-value').textContent = ` ${spell.spellStats.spellDuration}`;
};

const createSpellDescriptionElement = (spell, card) => card.querySelector('.spell-description').textContent = `${spell.spellDescription}`;

const createSpellHeightenedElement = (spell, card) => {
    
    if (spell.spellHeightened === '') {
        card.querySelector('.spell-heightened').remove();
        return;
    }
    card.querySelector('.spell-heightened .stat-value').textContent = `${spell.spellHeightened}`
};

const createSpellKnownStatus = (spell, card) => {
    if (spell.spellKnown) {
        card.querySelector('.card').classList.add('known');
        card.querySelector('.spell-known').textContent = 'Forget spell';
    }
};

const createSpellID = (spell, card) => {
    const spellID = `${spell.spellName.split(' ').join('').toLowerCase()}_${spell.spellType.toLowerCase()}_${spell.spellLevel}_${crypto.randomUUID().slice(-12)}`;
    spell.spellID = spellID;
    card.querySelector('.spell-id').textContent = spellID;
}
const createCardElements = (spell, card) => {
    createSpellNameElement(spell,card);
    createSpellLevelElement(spell,card);
    createSpellTraitsElement(spell, card);
    createSpellTraditionsElement(spell, card);
    createSpellCastElement(spell, card);
    createSpellRangeElement(spell, card);
    createSpellAreaElement(spell, card)
    createSpellTargetElement(spell, card);
    createSpellSavingElement(spell, card);
    createSpellDurationElement(spell, card);
    createSpellDescriptionElement(spell, card);
    createSpellHeightenedElement(spell, card);
    createSpellKnownStatus(spell, card);
    createSpellID(spell, card);
    return card;
};

export { createCardElements };