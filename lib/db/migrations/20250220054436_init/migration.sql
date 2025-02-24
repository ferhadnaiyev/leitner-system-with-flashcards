/*
  Warnings:

  - The primary key for the `Boxes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Boxes` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Boxes` table. All the data in the column will be lost.
  - You are about to drop the column `lastPracticeDate` on the `Boxes` table. All the data in the column will be lost.
  - You are about to drop the column `needPractice` on the `Boxes` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Boxes` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Boxes` table. All the data in the column will be lost.
  - The primary key for the `Cards` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `boxId` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `definition` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `term` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Cards` table. All the data in the column will be lost.
  - Added the required column `name` to the `Boxes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `box_id` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardId` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boxes" (
    "boxId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Boxes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Boxes" ("boxId", "userId") SELECT "boxId", "userId" FROM "Boxes";
DROP TABLE "Boxes";
ALTER TABLE "new_Boxes" RENAME TO "Boxes";
CREATE UNIQUE INDEX "Boxes_boxId_key" ON "Boxes"("boxId");
CREATE TABLE "new_Cards" (
    "cardId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "box_id" INTEGER NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Cards_box_id_fkey" FOREIGN KEY ("box_id") REFERENCES "Boxes" ("boxId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cards" ("userId") SELECT "userId" FROM "Cards";
DROP TABLE "Cards";
ALTER TABLE "new_Cards" RENAME TO "Cards";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
