-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "profileImageUrl" TEXT,
    "primaryEmailAddress" TEXT NOT NULL,
    "primaryEmailAddressId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coin" (
    "id" SERIAL NOT NULL,
    "market_cap_rank" INTEGER NOT NULL,
    "symbol" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "current_price" DOUBLE PRECISION NOT NULL,
    "price_change_percentage_1h_in_currency" DOUBLE PRECISION NOT NULL,
    "price_change_percentage_24h_in_currency" DOUBLE PRECISION NOT NULL,
    "price_change_percentage_7d_in_currency" DOUBLE PRECISION NOT NULL,
    "market_cap" INTEGER NOT NULL,
    "total_volume" INTEGER NOT NULL,
    "high_24h" DOUBLE PRECISION NOT NULL,
    "low_24h" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Coin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "coinId" INTEGER NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_userId_coinId_key" ON "Portfolio"("userId", "coinId");

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_coinId_fkey" FOREIGN KEY ("coinId") REFERENCES "Coin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
