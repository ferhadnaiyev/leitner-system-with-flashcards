-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardId" TEXT NOT NULL,
    "termin" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "boxId" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cards" ("boxId", "cardId", "createdAt", "definition", "id", "termin", "userId") SELECT "boxId", "cardId", "createdAt", "definition", "id", "termin", "userId" FROM "Cards";
DROP TABLE "Cards";
ALTER TABLE "new_Cards" RENAME TO "Cards";
CREATE UNIQUE INDEX "Cards_id_key" ON "Cards"("id");
CREATE UNIQUE INDEX "Cards_cardId_key" ON "Cards"("cardId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
