/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_productId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" TEXT;

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "ProductCategory";
