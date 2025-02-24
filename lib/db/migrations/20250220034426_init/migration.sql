/*
  Warnings:

  - You are about to alter the column `boxId` on the `Cards` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boxes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "boxId" INTEGER NOT NULL DEFAULT 1,
    "title" TEXT NOT NULL,
    "needPractice" BOOLEAN NOT NULL DEFAULT false,
    "lastPracticeDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Boxes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Boxes" ("createdAt", "id", "lastPracticeDate", "needPractice", "title", "updatedAt", "userId") SELECT "createdAt", "id", "lastPracticeDate", "needPractice", "title", "updatedAt", "userId" FROM "Boxes";
DROP TABLE "Boxes";
ALTER TABLE "new_Boxes" RENAME TO "Boxes";
CREATE UNIQUE INDEX "Boxes_boxId_key" ON "Boxes"("boxId");
CREATE TABLE "new_Cards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "boxId" INTEGER NOT NULL,
    "term" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Cards_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "Boxes" ("boxId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Cards" ("boxId", "createdAt", "definition", "id", "term", "updatedAt", "userId") SELECT "boxId", "createdAt", "definition", "id", "term", "updatedAt", "userId" FROM "Cards";
DROP TABLE "Cards";
ALTER TABLE "new_Cards" RENAME TO "Cards";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
