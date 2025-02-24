/*
  Warnings:

  - You are about to drop the `Boxes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `box_id` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Cards` table. All the data in the column will be lost.
  - Added the required column `boxId` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `definition` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `termin` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Boxes_boxId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Boxes";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cards" (
    "cardId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "termin" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "boxId" INTEGER NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cards" ("cardId", "userId") SELECT "cardId", "userId" FROM "Cards";
DROP TABLE "Cards";
ALTER TABLE "new_Cards" RENAME TO "Cards";
CREATE UNIQUE INDEX "Cards_cardId_key" ON "Cards"("cardId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
