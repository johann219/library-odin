import { Spell } from "./spell.js";

const fireball = new Spell (
    'Fireball',
    'Spell',
    '4',
    ['evocation', 'fire'],
    ['arcane', 'primal'],
    '2 verbal somatic',
    {
        spellRange: '500 feet',
        spellArea: '20-foot burst',
        spellSaving: 'basic Reflex',
    },
    'A roaring blast of fire detonates at a spot you designate, dealing 6d6 fire damage.',
    '(+1) The damage increases by 2d6.',
    true
);

const electricArc = new Spell (
    'Electric Arc',
    'Cantrip',
    '1',
    ['cantrip', 'concentrate', 'electricity', 'manipulate'],
    ['arcane', 'primal'],
    '2 verbal somatic',
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
    '2 verbal somatic',
    {
        spellDuration: '1 hour',
    },
    'You lengthen your stride beyond what should be possible. You gain a +10-foot status bonus to your Speed',
    '(2nd) The duration increases to 8 hours',
    false
);

export { fireball, electricArc, longstrider };