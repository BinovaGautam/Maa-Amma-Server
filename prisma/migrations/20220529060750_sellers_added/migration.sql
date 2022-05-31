/*
  Warnings:

  - Added the required column `seller_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductVariantValues" DROP CONSTRAINT "ProductVariantValues_creator_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariants" DROP CONSTRAINT "ProductVariants_creator_id_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "seller_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Sellers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "admin_id" INTEGER NOT NULL,

    CONSTRAINT "Sellers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sellers" ADD CONSTRAINT "Sellers_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariants" ADD CONSTRAINT "ProductVariants_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "Sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantValues" ADD CONSTRAINT "ProductVariantValues_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "Sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
