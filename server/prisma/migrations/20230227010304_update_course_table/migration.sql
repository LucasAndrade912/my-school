/*
  Warnings:

  - Added the required column `color` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "color" TEXT NOT NULL;
