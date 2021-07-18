export const createProductLink = (productName,productId) => {
    return `product-detail/${productName.split(" ").join("-").split("/").join(" ")}/${productId}`
}