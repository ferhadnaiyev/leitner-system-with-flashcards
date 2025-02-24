-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cards" (
    "cardId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "termin" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "boxId" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT,
    CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cards" ("boxId", "cardId", "definition", "termin", "userId") SELECT "boxId", "cardId", "definition", "termin", "userId" FROM "Cards";
DROP TABLE "Cards";
ALTER TABLE "new_Cards" RENAME TO "Cards";
CREATE UNIQUE INDEX "Cards_cardId_key" ON "Cards"("cardId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
