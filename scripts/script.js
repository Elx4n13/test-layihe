
const popularProducts = document.querySelector('.cards')
const products = [
    {
        image: './img/imagee.png',
        name: 'IPhone 12 mini 256GB Black limit jad ndh',
        price: 2389.99,
        moneyOfMonth: 450,
    },
    {
        image: './img/imagee.png',
        name: 'IPhone 12 mini 256GB Black limit jad ndh',
        price: 2389.99,
        moneyOfMonth: 450,
    },
    {
        image: './img/imagee.png',
        name: 'IPhone 12 mini 256GB Black limit jad ndh',
        price: 2389.99,
        moneyOfMonth: 450,
    },
    {
        image: './img/imagee.png',
        name: 'IPhone 12 mini 256GB Black limit jad ndh',
        price: 2389.99,
        moneyOfMonth: 450,
    }
]
products.map(item => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `<div class="top">
   <img src="${item.image}" alt="product-image">
</div>
<div class="product-name">
   <span>${item.name}</span>
</div>
<div class="price-product">
   <div class="price">
       <span>${item.price}₼</span>
   </div>
   <div class="credit">
       <span class="percent">0%</span>
       <span class="money-of-month">18 ay, ${item.moneyOfMonth}₼</span>
   </div>
</div>
<div class="card-button"> <span> pulsuz çatddırılma </span></div>`
    popularProducts.appendChild(card)

})
const cardslar = document.querySelectorAll('.card')
console.log(cardslar)
cardslar.forEach(item => {
    item.addEventListener('mouseover', changeText)
    item.addEventListener('mouseout', changeDefOut);
    function changeText() {
        const cardButton = item.lastChild
        cardButton.innerHTML = 'Səbətə əlavə et'
        cardButton.style.backgroundColor = '#FB9300'
        cardButton.style.color = '#FFFFFF'
    }
    function changeDefOut() {
        const cardButton = item.lastChild
        cardButton.innerHTML = 'pulsuz çatddırılma'
        cardButton.style.backgroundColor = '#FFFFFF'
        cardButton.style.color = '#009e36'
    }
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 2,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        950: {
            slidesPerView: 4,
            spaceBetween: 2
        },
        0: {
            slidesPerView: 3,

        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 2
        }
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 0,

    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        1000: {
            slidesPerView: 3,
            spaceBetween: 2
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 2
        }, 500: {
            slidesPerView: 2,
            spaceBetween: 2
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 1
        }
    },

});
const displayContacts = document.querySelector('#showContact')
const contactIcon = document.querySelector('#contactIcon')
const locationContact = document.querySelector('.reLocation')
const mailContact = document.querySelector('.reMail')

displayContacts.addEventListener('click', showContacts)
function showContacts() {
    if (contactIcon.classList == 'ri-arrow-right-s-line') {
        contactIcon.classList.remove("ri-arrow-right-s-line")
        contactIcon.classList.add("ri-arrow-down-s-line")
        locationContact.style.display = 'flex'
        mailContact.style.display = 'flex'

    }
    else {
        contactIcon.classList.remove("ri-arrow-down-s-line")
        contactIcon.classList.add("ri-arrow-right-s-line")
        locationContact.style.display = 'none'
        mailContact.style.display = 'none'

    }
}
const displayBusiness = document.querySelector('#showBusiness')
const businessIcon = document.querySelector('#businessIcon')
const contentBusiness = document.querySelector('.reBusiness')

displayBusiness.addEventListener('click', showBusiness)
function showBusiness() {
    if (businessIcon.classList == 'ri-arrow-right-s-line') {
        businessIcon.classList.remove("ri-arrow-right-s-line")
        businessIcon.classList.add("ri-arrow-down-s-line")
        contentBusiness.style.display = 'block'
    }
    else {
        businessIcon.classList.remove("ri-arrow-down-s-line")
        businessIcon.classList.add("ri-arrow-right-s-line")
        contentBusiness.style.display = 'none'
    }
}
const displayCustomers = document.querySelector('#showCustomers')
const customerIcon = document.querySelector('#customerIcon')
const contentCustomer = document.querySelector('.reCustomers')

displayCustomers.addEventListener('click', showCustomers)
function showCustomers() {
    if (customerIcon.classList == 'ri-arrow-right-s-line') {
        customerIcon.classList.remove("ri-arrow-right-s-line")
        customerIcon.classList.add("ri-arrow-down-s-line")
        contentCustomer.style.display = 'block'
    }
    else {
        customerIcon.classList.remove("ri-arrow-down-s-line")
        customerIcon.classList.add("ri-arrow-right-s-line")
        contentCustomer.style.display = 'none'
    }
}
const comments = [{
    name: 'Nihad',
    surname: 'Abdlyv',
    date: '12.06.2021',
    rating: 4,
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve`
}, {
    name: 'Nihad',
    surname: 'Abdlyv',
    date: '12.06.2021',
    rating: 4,
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve`
}, {
    name: 'Nihad',
    surname: 'Abdlyv',
    date: '12.06.2021',
    rating: 4,
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve`
}, {
    name: 'Nihad',
    surname: 'Abdlyv',
    date: '12.06.2021',
    rating: 4,
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve`
}, {
    name: 'Nihad',
    surname: 'Abdlyv',
    date: '12.06.2021',
    rating: 4,
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve`
}, {
    name: 'Nihad',
    surname: 'Abdlyv',
    date: '12.06.2021',
    rating: 4,
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve`
}]
const commentlists = document.querySelector('.user-comments')
let commentLimit = 3;
const getComments = (commentLimit) => {
    commentlists.innerHTML = ''
    for (i = 0; i <= commentLimit; i++) {
        const userComment = document.createElement('div');
        userComment.className = 'user-comment'
        userComment.innerHTML = `<div class="comment-info">
        <div class="info-user">
        <p class="name-sur">${comments[i].name} ${comments[i].surname}</p><span>|</span><p class="date-commnet">${comments[i].date}</p>
        </div>
        <p class="rating-comment">
          <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        </p>
      </div>
      <div class="comment-content">
        <p>${comments[i].comment}</p>
      </div>
      <hr>
      `
        if (commentLimit === 3 && i === 3) {
            userComment.classList.add('last')
        }
        commentlists.appendChild(userComment)
    }
}
getComments(commentLimit)
const nonMoreComment = document.querySelector('.nonMore')

const upLimit = () => {
    commentLimit = 5;
    getComments(commentLimit)
    nonMoreComment.style.display = 'flex';
    moreComment.style.display = 'none'
}
const smallLimit = () => {
    commentLimit = 3;
    getComments(commentLimit)
    moreComment.style.display = 'flex';
    nonMoreComment.style.display = 'none'
}
const moreComment = document.querySelector('.more')
moreComment.addEventListener('click', upLimit)
nonMoreComment.addEventListener('click', smallLimit)
