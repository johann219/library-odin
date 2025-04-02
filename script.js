const spellbook = [];

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
    'Heightened (+1) The damage increases by 2d6.',
    false
);

console.log(fireball);