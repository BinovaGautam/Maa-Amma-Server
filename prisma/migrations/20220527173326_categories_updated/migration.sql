-- AlterTable
ALTER TABLE "Categories" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "parent_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
