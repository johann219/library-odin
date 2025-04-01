const spellbook = [];

const SpellComponents = function (isVerbal, isSomatic, isMaterial) {
    if(!new.target) {
        throw Error ("Need 'new' keyword to call a constructor");
    }
    
    this.verbal = isVerbal;
    this.somatic = isSomatic;
    this.material = isMaterial;
};


const Spell = function (spellName, spellDesc, spellSchool, spellLevel, spellComponents, spellKnown) {
    if(!new.target) {
        throw Error ("Need 'new' keyword to call a constructor");
    }

    this.spellName = spellName;
    this.spellDesc = spellDesc;
    this.spellSchool = spellSchool;
    this.spellLevel = spellLevel;
    this.spellKnown = spellKnown;
    
    this.spellComponents = new SpellComponents(spellComponents.isVerbal, spellComponents.isSomatic, spellComponents.isMaterial);
}

const fireball = new Spell (
    'Fireball',
    'Summon a flaming ball that deals 6d6 fire damage in 6 foot radius',
    'Arcane',
    '4',
    {
        isVerbal: true,
        isSomatic: true,
        isMaterial: false
    },
    false
);

console.log(fireball);