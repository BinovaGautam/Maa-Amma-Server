/*
  Warnings:

  - You are about to drop the column `image` on the `Categories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "image",
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;
