export class ProductData {
    productId: string | null = null;
    sellingPrice: number | null = null;
    productName: string | null = null;
    productCategory: string | null = null;

    constructor(
        productId: string | null = null,
        sellingPrice: number | null = null,
        productName: string | null = null,
        productCategory: string | null = null
    ) {
        this.productId = productId;
        this.sellingPrice = sellingPrice;
        this.productName = productName;
        this.productCategory = productCategory;
    }
}
