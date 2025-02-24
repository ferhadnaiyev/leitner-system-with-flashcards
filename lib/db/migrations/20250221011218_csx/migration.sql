/*
  Warnings:

  - The primary key for the `Cards` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Cards` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardId" INTEGER NOT NULL,
    "termin" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "boxId" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cards" ("boxId", "cardId", "createdAt", "definition", "termin", "userId") SELECT "boxId", "cardId", "createdAt", "definition", "termin", "userId" FROM "Cards";
DROP TABLE "Cards";
ALTER TABLE "new_Cards" RENAME TO "Cards";
CREATE UNIQUE INDEX "Cards_id_key" ON "Cards"("id");
CREATE UNIQUE INDEX "Cards_cardId_key" ON "Cards"("cardId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
