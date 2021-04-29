function calculateGram() {
    const final_price = getFinalPrice();
    const price_per_pounds = getPricePerPounds();
    const discount = getDiscount();
    const result_gram = (227 * final_price) / (price_per_pounds * discount);
    alert(result_gram + ' 克 ');
}

function getFinalPrice() {
    return $('#final_price').val();
}

function getPricePerPounds() {
    return $('#price_per_pounds').val();
}

function getDiscount() {
    return $('#discount').val();
}
