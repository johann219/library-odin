const SpellStats = class {
    constructor(
        spellRange = null,
        spellArea = null,
        spellTarget = null,
        spellSaving = null,
        spellDuration = null) {
            this.spellRange = spellRange;
            this.spellArea = spellArea;
            this.spellTarget = spellTarget;
            this.spellSaving = spellSaving;
            this.spellDuration = spellDuration;
    }
}

const Spell = class {
    constructor(
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
}

export { Spell };