let thumbs = document.querySelectorAll('.thumbnail')
const lightbox = document.querySelector('#lightbox')
let num = document.getElementById('num')
let cartIcon = document.querySelector('.cart')
let items = document.getElementById('items-div')
let cart = document.getElementById('cart-div')
thumbs.forEach(e =>{
    e.addEventListener('click', () =>{
        let active = document.querySelector('.selected')
        active.classList.remove('selected')
        e.firstChild.classList.add('selected')
        lightbox.style.display = "flex"
        let url = e.firstChild.src.replace('-thumbnail','');
        document.querySelector("#lightbox-image").src = url
        document.querySelector("#lightbox-image").style.opacity = 1
    })
})

lightbox.addEventListener('click',(e) => {
    if(e.target != document.querySelector('#lightbox-image') &&
       e.target != document.querySelector('#right')&&
       e.target != document.querySelector('#left') &&
       e.target != document.querySelector('#leftbtn') &&
       e.target != document.querySelector('#rightbtn')){
        console.log(e.target);
        lightbox.style.display = 'none'
    }
})

function increment(){
    num.innerHTML = parseInt(num.innerHTML) + 1
}
function decrement(){
    if(parseInt(num.innerHTML) > 0)
        num.innerHTML = parseInt(num.innerHTML)-1 
}

cartIcon.addEventListener('click', () =>{
    if(cart.style.display == 'none')
        cart.style.display = 'flex'
    else
    cart.style.display = 'none'
})
function addToCart() {
    let quantity = parseInt(num.innerHTML)
    if (quantity == 0) {
        return
    }
    items.innerHTML =`
    <div id="cart-item">
        <img id='thumbnail-cart' src="../images/image-product-1-thumbnail.jpg" alt="" srcset="">
        <div id="cart-text">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x ${quantity} <span id='price-cart'>$${quantity * 125}.00</span></p>
        </div>
        <img id='delete-icn' src="../images/icon-delete.svg" alt="" srcset="">
    </div>
    <button id='checkout'>Checkout</button>`
    document.getElementById('delete-icn').addEventListener('click',() =>{
        items.innerHTML = '<p>The cart is empty</p>'
    })
    cart.style.display = 'flex'
}
document.getElementById('right').addEventListener('click', () =>{
    let img = document.getElementById('lightbox-image')
    let src = img.src
    let index = parseInt(src.charAt(src.length - 5))
    switch (index) {
        case 1:
            img.src = '../images/image-product-2.jpg'
            break;
        case 2:
            img.src = '../images/image-product-3.jpg'
            break;
        case 3:
            img.src = '../images/image-product-4.jpg'
            break;
        case 4:
            img.src = '../images/image-product-1.jpg'
            break;
        default:
            break;
    }
})
document.getElementById('left').addEventListener('click', () =>{
    let img = document.getElementById('lightbox-image')
    let src = img.src
    let index = parseInt(src.charAt(src.length - 5))
    switch (index) {
        case 1:
            img.src = '../images/image-product-4.jpg'
            break;
        case 2:
            img.src = '../images/image-product-1.jpg'
            break;
        case 3:
            img.src = '../images/image-product-2.jpg'
            break;
        case 4:
            img.src = '../images/image-product-3.jpg'
            break;
        default:
            break;
    }
})

