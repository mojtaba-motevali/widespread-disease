-- CreateTable
CREATE TABLE "disease" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "spreads" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sideeffect" TEXT[],
    "causedBy" TEXT[],
    "medicrecom" TEXT[],
    "specialistId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signs" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signs_disease_join" (
"id" SERIAL,
    "signId" INTEGER NOT NULL,
    "diseaseId" INTEGER NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "doctor" (
"id" SERIAL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT,
    "lat" DECIMAL(65,30) NOT NULL,
    "long" DECIMAL(65,30) NOT NULL,
    "phone" TEXT,
    "specialistId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specialist" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "disease.name_unique" ON "disease"("name");

-- CreateIndex
CREATE UNIQUE INDEX "signs.name_unique" ON "signs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "disease_signs_unique" ON "signs_disease_join"("signId", "diseaseId");

-- CreateIndex
CREATE UNIQUE INDEX "specialist.name_unique" ON "specialist"("name");

-- AddForeignKey
ALTER TABLE "disease" ADD FOREIGN KEY("specialistId")REFERENCES "specialist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "signs_disease_join" ADD FOREIGN KEY("diseaseId")REFERENCES "disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "signs_disease_join" ADD FOREIGN KEY("signId")REFERENCES "signs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor" ADD FOREIGN KEY("specialistId")REFERENCES "specialist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
