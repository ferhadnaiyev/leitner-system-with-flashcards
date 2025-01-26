const sql = require('better-sqlite3');

const db = sql('cards.db');

const dummyCards = [
    { id: 1, termin: "apple", definition: "alma", boxID: 1 },
    { id: 2, termin: "banana", definition: "banan", boxID: 1 },
    { id: 3, termin: "cherry", definition: "gilas", boxID: 1 },
    { id: 4, termin: "grape", definition: "üzüm", boxID: 1 },
    { id: 5, termin: "lemon", definition: "limon", boxID: 2 },
    { id: 6, termin: "orange", definition: "portağal", boxID: 3 },
    { id: 7, termin: "peach", definition: "şaftalı", boxID: 4 },
    { id: 8, termin: "pear", definition: "armud", boxID: 5 },
    { id: 9, termin: "plum", definition: "ərik", boxID: 5 },
    { id: 10, termin: "strawberry", definition: "çiyələk", boxID: 6 },
];

// Yeni 50 kelime ekliyoruz.
for (let i = 11; i <= 60; i++) {
    dummyCards.push({
        id: i,
        termin: `word${i}`, // Örnek termin: word11, word12, vb.
        definition: `definition${i}`, // Örnek definition: definition11, vb.
        boxID: Math.floor(Math.random() * 6) + 1, // Rastgele 1-6 arasında boxID
    });
}

db.prepare(`
    CREATE TABLE IF NOT EXISTS cards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        termin TEXT NOT NULL,
        definition TEXT NOT NULL,
        boxID INTEGER NOT NULL
     )
`).run();

async function initData() {
    const stmt = db.prepare(`
       INSERT INTO cards (termin, definition, boxID) VALUES (
          @termin,
          @definition,
          @boxID
       )
    `);

    for (const card of dummyCards) {
        stmt.run(card);
    }
}
initData();
