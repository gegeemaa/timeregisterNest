/*
  Warnings:

  - Added the required column `userId` to the `Timeregister` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Timeregister` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Timeregister` ADD CONSTRAINT `Timeregister_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
