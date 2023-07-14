/*
  Warnings:

  - You are about to drop the column `userId` on the `Timeregister` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Timeregister` DROP FOREIGN KEY `Timeregister_userId_fkey`;

-- AlterTable
ALTER TABLE `Timeregister` DROP COLUMN `userId`;
