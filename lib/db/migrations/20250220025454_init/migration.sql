-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boxes" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '1',
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
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
