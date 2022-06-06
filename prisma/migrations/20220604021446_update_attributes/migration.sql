/*
  Warnings:

  - You are about to drop the `ProductVariantValues` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VariantsValuesMap` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ProductAttributesMap` DROP FOREIGN KEY `ProductAttributesMap_attribute_id_fkey`;

-- DropForeignKey
ALTER TABLE `ProductVariantValues` DROP FOREIGN KEY `ProductVariantValues_creator_id_fkey`;

-- DropForeignKey
ALTER TABLE `VariantsValuesMap` DROP FOREIGN KEY `VariantsValuesMap_variant_id_fkey`;

-- DropForeignKey
ALTER TABLE `VariantsValuesMap` DROP FOREIGN KEY `VariantsValuesMap_variant_value_id_fkey`;

-- DropTable
DROP TABLE `ProductVariantValues`;

-- DropTable
DROP TABLE `VariantsValuesMap`;

-- CreateTable
CREATE TABLE `ProductVariantsMap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `variant_id` INTEGER NOT NULL,
    `creator_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductVariantsMap` ADD CONSTRAINT `ProductVariantsMap_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `Sellers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariantsMap` ADD CONSTRAINT `ProductVariantsMap_variant_id_fkey` FOREIGN KEY (`variant_id`) REFERENCES `ProductVariants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductAttributesMap` ADD CONSTRAINT `ProductAttributesMap_attribute_id_fkey` FOREIGN KEY (`attribute_id`) REFERENCES `ProductVariantsMap`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
