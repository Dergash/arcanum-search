const sirGarrick = {
    name: 'Sir Garrick Stout',
    age: 43,
    level: 45,
    basicStats: {
        strength: 20,
        dexterity: 17, // (18)
        constitution: 20,
        beauty: 8,
        intelligence: 13,
        perception: 14, // (15)
        willpower: 8,
        charisma: 8 // (7)
    },
    // hp: 142 + 6
    skills: [
        { key: 'bow', level: 20, training: 'beginner' },
        { key: 'throwing', level: 20, training: 'throwing' },
        { key: 'melee', level: 20, training: 'master' },
        { key: 'dodge', level: 20, training: 'expert' },
        { key: 'heal', level: 12, training: 'beginner' },
    ]
}

// Dernholm, next to sir Garrick
const humanGuard = {

}

// Dernholm
const innkeeper = {
    name: 'Innkeeper',
    age: 20,
    skills: [
        { key: 'bow', level: 8 },
        { key: 'throwing', level: 4 },
        { key: 'melee', level: 8 },
        { key: 'heal', level: 4 },
        { key: 'persuasion', level: 4 },
        { key: 'haggle', level: 6 }, // gnome
        { key: 'gambling', level: 8 },
        { key: 'firearms', level: 4 }
    ]
}

export default [sirGarrick, innkeeper]
