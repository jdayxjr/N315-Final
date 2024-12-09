
import * as $ from "jquery";

var products = [];
var cart = [];

export function changePage(pageName) {
    if (pageName === "") {
        return;
    }

    $.get(`pages/${pageName}.html`, function (data) {
        console.log('data ' + data);
        $('#app').html(data);

        if (pageName === "cart") {
            loadCartItems();
        }
    }).fail(function () {
        //  console.error(`Failed to load page: ${pageName}`);
    });

    if (products.length <= 0) {
        loadProducts();
    } else {
        loadHomePage();
    }
}







function loadCartItems() {

    $(".cart-items").html("");
    $(".cart-itemsText").html("");

    if (cart.length > 0) {

        $.each(cart, (index, productIndex) => {
            let product = products[productIndex];
            let cartHTML = `
            <div class="coffelist-box">
                <div class="coffeImg">
                    <img src="${product.productImage}" alt="${product.productName}">
                </div>
                <div class="coffeName">${product.productName}</div>
                <div class="coffePriceBox">
                    <div class="price">
                        <div class="miniprice-box">
                            <div class="miniprice">
                                <span class="dollar-sign">$</span>${product.productPrice}<span class="cents">${product.productPriceCents}</span>
                            </div>
                            <span class="price-two">${product.productPriceTwo}</span>
                        </div>
                    </div>
                    <div class="priceText">with Keurig® Starter Kit</div>
                </div>
                <div class="coffeHL"></div>
                <div class="price-threeBox">
                    <span class="price-three">
                        <span class="dollar-sign">$</span>${product.productPriceThree}<span class="cents">${product.productPriceThreeCents}</span>
                    </span>
                </div>
                <div class="compareboxContainer">
                    <div class="compare-box"></div>
                    <div class="compare-text">Compare</div>
                </div>
                <div class="buy">
                    <div class="remove" id="${index}">Remove</div>
                </div>
            </div>`;

            $(".cart-items").append(cartHTML);
        });


        $(".remove").off("click").on("click", function () {
            let index = $(this).attr("id");
            cart.splice(index, 1);
            console.log("after removed", cart);
            loadCartItems();
            $(".item-text").html(cart.length);
        });
    } else {

        $(".cart-itemsText").html("You don't have any items in your shopping cart");
    }
}







function loadHomePage() {
    $("#app").html(`<div class="coffelist-container"></div>`);

    $.each(products, (index, product) => {
        let productHTML = `
        <div class="coffelist-box">
            <div class="coffeImg">
                <img src="${product.productImage}" alt="${product.productName}">
            </div>
            <div class="coffeName">${product.productName}</div>
            <div class="coffePriceBox">
                <div class="price">
                    <div class="miniprice-box">
                        <div class="miniprice">
                            <span class="dollar-sign">$</span>${product.productPrice}<span class="cents">${product.productPriceCents}</span>
                        </div>
                        <span class="price-two">${product.productPriceTwo}</span>
                    </div>
                </div>
                <div class="priceText">with Keurig® Starter Kit</div>
            </div>
            <div class="coffeHL"></div>
            <div class="price-threeBox">
                <span class="price-three">
                    <span class="dollar-sign">$</span>${product.productPriceThree}<span class="cents">${product.productPriceThreeCents}</span>
                </span>

                
            </div>
            <div class="compareboxContainer">
                <div class="compare-box"></div>
                <div class="compare-text">Compare</div>
            </div>
            <div class="buy">
                <div class="buy-now" id="${index}">Buy Now</div>
            </div>
        </div>`;
        //work on that
        $(".coffelist-container").append(productHTML);
    });

    addBuyNowListner();
}

function addBuyNowListner() {
    $(".buy-now").on("click", function () {
        let index = $(this).attr("id");
        cart.push(index);
        $(".item-text").html(cart.length);
        Swal.fire({
            title: "Success!",
            text: "The item has been added to your cart.",
            icon: "success"
        });
        console.log("buy now", index);



        $(this).off("click");
    });
}



function loadProducts() {
    $.getJSON('data/data.json', (data) => {
        products = data.PRODCUTS
        console.log(products);
        loadHomePage();
    })
}