/*
  Warnings:

  - You are about to alter the column `lat` on the `doctor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `long` on the `doctor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- DropForeignKey
ALTER TABLE "signs_disease_join" DROP CONSTRAINT "signs_disease_join_diseaseId_fkey";

-- DropForeignKey
ALTER TABLE "signs_disease_join" DROP CONSTRAINT "signs_disease_join_signId_fkey";

-- AlterTable
ALTER TABLE "doctor" ALTER COLUMN "lat" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "long" SET DATA TYPE DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "signs_disease_join" ADD CONSTRAINT "signs_disease_join_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "signs_disease_join" ADD CONSTRAINT "signs_disease_join_signId_fkey" FOREIGN KEY ("signId") REFERENCES "signs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "disease.name_unique" RENAME TO "disease_name_key";

-- RenameIndex
ALTER INDEX "signs.name_unique" RENAME TO "signs_name_key";

-- RenameIndex
ALTER INDEX "disease_signs_unique" RENAME TO "signs_disease_join_signId_diseaseId_key";

-- RenameIndex
ALTER INDEX "specialist.name_unique" RENAME TO "specialist_name_key";
