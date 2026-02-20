/*
  Warnings:

  - Changed the type of `nivel` on the `Conhecimento` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "nivelConhecimento" AS ENUM ('Iniciante', 'Intermediario', 'Avancado');

-- AlterTable
ALTER TABLE "Conhecimento" DROP COLUMN "nivel",
ADD COLUMN     "nivel" "nivelConhecimento" NOT NULL;
