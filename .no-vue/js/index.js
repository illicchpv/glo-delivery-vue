const modalFunc = () => {
  const modal = document.querySelector('.cart-modal__overlay');
  const cartBtn = document.querySelector('#cart-button');

  const openModal = () => {
    modal.classList.add('open');
  };

  const closeModal = (e) => {
    if (
      e.target.classList.contains('cart-modal__overlay') ||
      e.target.closest('.cart-modal__header--close')
    ) {
      modal.classList.remove('open');
    }
  };

  cartBtn.addEventListener('click', openModal);
  modal.addEventListener('click', closeModal);
};

const restArr = [
  {
    id: 1,
    title: 'Пицца плюс',
    time: '50',
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    img: 'image1.jpg',
  },
  {
    id: 2,
    title: 'Тануки',
    time: '50',
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    img: 'image2.jpg',
  },
  {
    id: 3,
    title: 'FoodBand',
    time: '50',
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    img: 'image3.jpg',
  },
  {
    id: 4,
    title: 'Жадина-пицца',
    time: '50',
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    img: 'image4.jpg',
  },
  {
    id: 5,
    title: 'Точка еды',
    time: '50',
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    img: 'image5.jpg',
  },
  {
    id: 6,
    title: 'PizzaBurger',
    time: '50',
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    img: 'image6.jpg',
  },
];
const goodsArr = [
  {
    id: 1,
    title: 'Ролл угорь стандарт',
    info: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
    price: 250,
    img: 'image1.jpg',
  },
  {
    id: 2,
    title: 'Калифорния лосось стандарт',
    info: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
    price: 395,
    img: 'image2.jpg',
  },
  {
    id: 3,
    title: 'Окинава стандарт',
    info: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
    price: 250,
    img: 'image3.jpg',
  },
  {
    id: 4,
    title: 'Цезарь маки хl',
    info: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
    price: 250,
    img: 'image4.jpg',
  },
  {
    id: 5,
    title: 'Ясай маки стандарт 185 г',
    info: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
    price: 250,
    img: 'image5.jpg',
  },
  {
    id: 6,
    title: 'Ролл с креветкой стандарт',
    info: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
    price: 250,
    img: 'image6.jpg',
  },
]

const restFunc = () => {
  const containerRest = document.querySelector('#rests-container');
  const containerGoods = document.querySelector('#products-container');

  const loading = () => {
    if(containerRest) containerRest.innerHTML = '<p style="width: 100%; text-align: center;"> Загрузка... </p>';
    if(containerGoods) containerGoods.innerHTML = '<p style="width: 100%; text-align: center;"> Загрузка... </p>';
  };

  const renderRests = (arr) => {
    containerRest.innerHTML = '';
    arr.forEach(card => {
      containerRest.insertAdjacentHTML('beforeend', `
            <a class="products-card"  href="./goods.html?id=${card.id}">
              <div class="products-card__image">
                <img src="./images/rest/${card.img}" alt="${card.title}">
              </div>

              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">${card.title}</h4>
                  <div class="products-card__description--title--badge">${card.time} мин</div>

                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z" fill="#FFC107" /></svg>
                      ${card.rating}
                    </div>
                    <div class="products-card__description-info--price">От ${card.price} ₽</div>
                    <div class="products-card__description-info--group">${card.type}</div>
                  </div>
                </div>
              </div>
            </a>
        `);

    });
  };

  const renderGoods = (arr) => {
    containerGoods.innerHTML = '';
    arr.forEach(card => {
      containerGoods.insertAdjacentHTML('beforeend', `
            <div class="products-card">
              <div class="products-card__image">
                <img src="./images/goods/${card.img}" alt="${card.title}">
              </div>

              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h5 class="products-card__description--name">${card.title}</h5>
                </div>

                <div class="products-card__description-row">
                  <p class="products-card__description--text">${card.info}</p>
                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-controls">
                    <button class="btn btn-primary" type="button" aria-label="вход пользователя">
                      В корзину
                      <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4641 8.93594H4.15937L4.62656 7.98438L12.3891 7.97031C12.6516 7.97031 12.8766 7.78281 12.9234 7.52344L13.9984 1.50625C14.0266 1.34844 13.9844 1.18594 13.8812 1.0625C13.8303 1.00175 13.7667 0.952815 13.6949 0.919089C13.6232 0.885363 13.5449 0.867653 13.4656 0.867188L3.59062 0.834375L3.50625 0.4375C3.45312 0.184375 3.225 0 2.96562 0H0.551562C0.405279 0 0.264987 0.0581108 0.161549 0.161549C0.0581109 0.264987 0 0.405279 0 0.551563C0 0.697846 0.0581109 0.838138 0.161549 0.941576C0.264987 1.04501 0.405279 1.10313 0.551562 1.10313H2.51875L2.8875 2.85625L3.79531 7.25156L2.62656 9.15938C2.56587 9.24129 2.52931 9.33856 2.52103 9.44018C2.51274 9.5418 2.53306 9.64371 2.57969 9.73438C2.67344 9.92031 2.8625 10.0375 3.07187 10.0375H4.05312C3.84393 10.3153 3.73094 10.6538 3.73125 11.0016C3.73125 11.8859 4.45 12.6047 5.33437 12.6047C6.21875 12.6047 6.9375 11.8859 6.9375 11.0016C6.9375 10.6531 6.82187 10.3141 6.61562 10.0375H9.13281C8.92362 10.3153 8.81063 10.6538 8.81094 11.0016C8.81094 11.8859 9.52969 12.6047 10.4141 12.6047C11.2984 12.6047 12.0172 11.8859 12.0172 11.0016C12.0172 10.6531 11.9016 10.3141 11.6953 10.0375H13.4656C13.7687 10.0375 14.0172 9.79062 14.0172 9.48594C14.0163 9.33981 13.9576 9.19997 13.854 9.09693C13.7504 8.99389 13.6102 8.93602 13.4641 8.93594V8.93594ZM3.82031 1.92188L12.8172 1.95156L11.9359 6.88594L4.86875 6.89844L3.82031 1.92188ZM5.33437 11.4953C5.0625 11.4953 4.84062 11.2734 4.84062 11.0016C4.84062 10.7297 5.0625 10.5078 5.33437 10.5078C5.60625 10.5078 5.82812 10.7297 5.82812 11.0016C5.82812 11.1325 5.7761 11.2581 5.68351 11.3507C5.59091 11.4433 5.46533 11.4953 5.33437 11.4953V11.4953ZM10.4141 11.4953C10.1422 11.4953 9.92031 11.2734 9.92031 11.0016C9.92031 10.7297 10.1422 10.5078 10.4141 10.5078C10.6859 10.5078 10.9078 10.7297 10.9078 11.0016C10.9078 11.1325 10.8558 11.2581 10.7632 11.3507C10.6706 11.4433 10.545 11.4953 10.4141 11.4953V11.4953Z" fill="white" /></svg>
                    </button>

                    <span class="products-card__description-controls--price">${card.price} ₽</span>
                  </div>
                </div>
              </div>
            </div>
        `);

    });
  };

  loading();
  if (containerRest){
    setTimeout(() => renderRests(restArr), 500);
  } else {
    setTimeout(() => renderGoods(goodsArr), 500);
  }

};

modalFunc();
restFunc();