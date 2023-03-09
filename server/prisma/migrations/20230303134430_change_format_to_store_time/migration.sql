/*
  Warnings:

  - You are about to drop the column `hourEnd` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the column `hourStart` on the `classes` table. All the data in the column will be lost.
  - Added the required column `startEnd` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classes" DROP COLUMN "hourEnd",
DROP COLUMN "hourStart",
ADD COLUMN     "startEnd" INTEGER NOT NULL,
ADD COLUMN     "startTime" INTEGER NOT NULL;
