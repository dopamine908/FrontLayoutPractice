const GramPerPound = 227;

const ItemChildComponentHtml = "<li class=\"bg-gray-100 flex justify-between items-center py-2 px-5 my-6 shadow-md rounded-xl\">\n" +
    "            <div>\n" +
    "                <label for=\"\">品項：</label>\n" +
    "                <input name=\"bean_name\" type=\"text\" class=\"border-2 rounded-l\">\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"\">牌價/每半磅(227g)：</label>\n" +
    "                <input name=\"price_per_pound\" type=\"number\" class=\"border-2 rounded-l\">\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"\">購買克數：</label>\n" +
    "                <input name=\"gram_to_buy\" type=\"number\" class=\"border-2 rounded-l\">\n" +
    "            </div>\n" +
    "            <button onclick=\"deleteItem(this)\" class=\"delete-btn px-2 py-1 border-2 rounded-xl border-gray-400 fill-current text-gray-400 hover:text-red-400 hover:border-red-400\">\n" +
    "                <svg class=\"w-6\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n" +
    "                     stroke=\"currentColor\">\n" +
    "                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n" +
    "                          d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\"/>\n" +
    "                </svg>\n" +
    "            </button>\n" +
    "        </li>";

$('#add-item-btn').click(appendNewItem);
$('#submit-btn').click(showFinalCalculatePriceResult);

function appendNewItem() {
    $('#item-list').append(ItemChildComponentHtml);
}

function deleteItem(dom) {
    $(dom).parent().remove();
}

function getPricePerPoundValue(dom) {
    const price_per_pound = $(dom).find("input[name='price_per_pound']").val();
    console.log(typeof price_per_pound);
    return price_per_pound;
}

function getBeanNameValue(dom) {
    return $(dom).find("input[name='bean_name']").val();
}

function getGramToBuyValue(dom) {
    return $(dom).find("input[name='gram_to_buy']").val();
}

function getProductDetailCollection() {
    let ProductDetailCollection = [];
    $('#item-list li').each(function () {
        let ProductDetail = new Object();
        ProductDetail.bean_name = getBeanNameValue(this);
        ProductDetail.price_per_pound = getPricePerPoundValue(this);
        ProductDetail.gram_to_buy = getGramToBuyValue(this);
        ProductDetailCollection.push(ProductDetail)
    });

    return ProductDetailCollection;
}

function getDiscountValue() {
    return $('#discount').val();
}

function printResult(total_price) {
    $('.result-show').html(total_price);
}

function calculateTotalPrice() {
    const ProductDetailCollection = getProductDetailCollection();
    const Discount = getDiscountValue();
    let total_price = 0;
    ProductDetailCollection.forEach(function (ProductDetail) {
        total_price += ProductDetail.price_per_pound * (ProductDetail.gram_to_buy / GramPerPound);
    });
    total_price = total_price * Discount;
    return total_price;
}

function showFinalCalculatePriceResult() {
    const total_price = calculateTotalPrice();
    printResult(total_price);
}

// [p1*(g1/227)+p2*(g2/227) + ... pi*(gi/227)]*discount
