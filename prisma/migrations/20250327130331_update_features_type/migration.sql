-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "miles" INTEGER NOT NULL,
    "features" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "listerId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "listingId" INTEGER NOT NULL,
    CONSTRAINT "Message_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Car" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
