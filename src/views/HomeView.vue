<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item-title">
          Онлайн-сервис <br>
          доставки еды на дом
        </h2>

        <p class="banner-item-subtitle">
          Блюда из любимого ресторана привезет
          курьер в перчатках, маске и с антисептиком
        </p>

      </div>
    </div>
  </section>

  <section class="products">
    <div class="container">

      <div class="products-header">
        <h3 class="products-header--title">
          Рестораны
        </h3>

        <input class="products-header--search" type="text" placeholder="Поиск блюд и ресторанов" />
      </div>

      <div class="products-wrapper" id="rests-container">
        <router-link class="products-card" :to="`./rest?id=${rest.id}`" v-for="rest in restArr" :key="rest.id">
          <div class="products-card__image">
            <!-- <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс."> -->
            <img :src="getUrl(rest.img)" alt="Пицца плюс.">
          </div>

          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description--title">{{ rest.title }}</h4>
              <div class="products-card__description--title--badge">{{ rest.time }} мин</div>

            </div>

            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info--rating">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                      fill="#FFC107" />
                  </svg>
                  {{ rest.rating }}
                </div>
                <div class="products-card__description-info--price">От {{ rest.price }} ₽</div>
                <div class="products-card__description-info--group"> {{ rest.type }} </div>
              </div>
            </div>
          </div>
        </router-link>
        <!-- 
        <div class="products-card">
          <div class="products-card__image">
            <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
          </div>

          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description--title">Пицца плюс</h4>
              <div class="products-card__description--title--badge">50 мин</div>

            </div>

            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info--rating">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                      fill="#FFC107" />
                  </svg>
                  4.5
                </div>
                <div class="products-card__description-info--price">От 900 ₽</div>
                <div class="products-card__description-info--group">Пицца </div>
              </div>
            </div>
          </div>
        </div>

        <div class="products-card">
          <div class="products-card__image">
            <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
          </div>

          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description--title">Пицца плюс</h4>
              <div class="products-card__description--title--badge">50 мин</div>

            </div>

            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info--rating">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                      fill="#FFC107" />
                  </svg>
                  4.5
                </div>
                <div class="products-card__description-info--price">От 900 ₽</div>
                <div class="products-card__description-info--group">Пицца </div>
              </div>
            </div>
          </div>
        </div>

        <div class="products-card">
          <div class="products-card__image">
            <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
          </div>

          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description--title">Пицца плюс</h4>
              <div class="products-card__description--title--badge">50 мин</div>

            </div>

            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info--rating">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                      fill="#FFC107" />
                  </svg>
                  4.5
                </div>
                <div class="products-card__description-info--price">От 900 ₽</div>
                <div class="products-card__description-info--group">Пицца </div>
              </div>
            </div>
          </div>
        </div>

        <div class="products-card">
          <div class="products-card__image">
            <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
          </div>

          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description--title">Пицца плюс</h4>
              <div class="products-card__description--title--badge">50 мин</div>

            </div>

            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info--rating">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                      fill="#FFC107" />
                  </svg>
                  4.5
                </div>
                <div class="products-card__description-info--price">От 900 ₽</div>
                <div class="products-card__description-info--group">Пицца </div>
              </div>
            </div>
          </div>
        </div>

        <div class="products-card">
          <div class="products-card__image">
            <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
          </div>

          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description--title">Пицца плюс</h4>
              <div class="products-card__description--title--badge">50 мин</div>

            </div>

            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info--rating">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                      fill="#FFC107" />
                  </svg>
                  4.5
                </div>
                <div class="products-card__description-info--price">От 900 ₽</div>
                <div class="products-card__description-info--group">Пицца </div>
              </div>
            </div>
          </div>
        </div> -->

      </div>
    </div>
  </section>

  <!-- <div class="page-wrapper">

    <Header></Header>

    <main class="main">
      <section class="banner">
        <div class="container">
          <div class="banner-item">
            <h2 class="banner-item-title">
              Онлайн-сервис <br>
              доставки еды на дом
            </h2>

            <p class="banner-item-subtitle">
              Блюда из любимого ресторана привезет
              курьер в перчатках, маске и с антисептиком
            </p>

          </div>
        </div>
      </section>

      <section class="products">
        <div class="container">

          <div class="products-header">
            <h3 class="products-header--title">
              Рестораны
            </h3>

            <input class="products-header--search" type="text" placeholder="Поиск блюд и ресторанов" />
          </div>

          <div class="products-wrapper" id="rests-container">
            <a class="products-card" href="./goods.html">
              <div class="products-card__image">
                <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
              </div>

              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--title--badge">50 мин</div>

                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                          fill="#FFC107" />
                      </svg>
                      4.5
                    </div>
                    <div class="products-card__description-info--price">От 900 ₽</div>
                    <div class="products-card__description-info--group">Пицца </div>
                  </div>
                </div>
              </div>
            </a>

            <div class="products-card">
              <div class="products-card__image">
                <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
              </div>

              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--title--badge">50 мин</div>

                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                          fill="#FFC107" />
                      </svg>
                      4.5
                    </div>
                    <div class="products-card__description-info--price">От 900 ₽</div>
                    <div class="products-card__description-info--group">Пицца </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="products-card">
              <div class="products-card__image">
                <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
              </div>

              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--title--badge">50 мин</div>

                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                          fill="#FFC107" />
                      </svg>
                      4.5
                    </div>
                    <div class="products-card__description-info--price">От 900 ₽</div>
                    <div class="products-card__description-info--group">Пицца </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="products-card">
              <div class="products-card__image">
                <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
              </div>

              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--title--badge">50 мин</div>

                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                          fill="#FFC107" />
                      </svg>
                      4.5
                    </div>
                    <div class="products-card__description-info--price">От 900 ₽</div>
                    <div class="products-card__description-info--group">Пицца </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="products-card">
              <div class="products-card__image">
                <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
              </div>

              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--title--badge">50 мин</div>

                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                          fill="#FFC107" />
                      </svg>
                      4.5
                    </div>
                    <div class="products-card__description-info--price">От 900 ₽</div>
                    <div class="products-card__description-info--group">Пицца </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="products-card">
              <div class="products-card__image">
                <img src="../assets/images/rest/image1.jpg" alt="Пицца плюс.">
              </div>

              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--title--badge">50 мин</div>

                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.6515 5.31973C14.5553 5.02227 14.2915 4.81101 13.9793 4.78288L9.73947 4.39789L8.06292 0.473749C7.9393 0.18616 7.65776 0 7.34495 0C7.03215 0 6.75061 0.18616 6.62699 0.474421L4.95043 4.39789L0.709893 4.78288C0.398319 4.81168 0.135163 5.02227 0.0384405 5.31973C-0.0582818 5.61718 0.0310434 5.94343 0.266741 6.14909L3.47158 8.95976L2.52655 13.1226C2.45739 13.4287 2.5762 13.7451 2.83016 13.9287C2.96667 14.0273 3.12638 14.0775 3.28744 14.0775C3.4263 14.0775 3.56404 14.0401 3.68766 13.9661L7.34495 11.7803L11.0009 13.9661C11.2684 14.1271 11.6057 14.1124 11.8591 13.9287C12.1131 13.7445 12.2318 13.428 12.1627 13.1226L11.2177 8.95976L14.4225 6.14966C14.6582 5.94343 14.7482 5.61774 14.6515 5.31973Z"
                          fill="#FFC107" />
                      </svg>
                      4.5
                    </div>
                    <div class="products-card__description-info--price">От 900 ₽</div>
                    <div class="products-card__description-info--group">Пицца </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>

    <div class="cart-modal__overlay">
      <div class="cart-modal">
        <div class="cart-modal__header">
          <div class="cart-modal__header--title">Корзина</div>

          <div class="cart-modal__header--close">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.2535 12.4992L24.6006 3.15163C24.8577 2.89431 24.9996 2.55102 25 2.18496C25 1.8187 24.8581 1.475 24.6006 1.21809L23.7815 0.399187C23.524 0.14126 23.1807 0 22.8142 0C22.4484 0 22.1051 0.14126 21.8476 0.399187L12.5004 9.74614L3.15285 0.399187C2.89573 0.14126 2.55224 0 2.18598 0C1.82012 0 1.47663 0.14126 1.21951 0.399187L0.4 1.21809C-0.133333 1.75142 -0.133333 2.6189 0.4 3.15163L9.74736 12.4992L0.4 21.8463C0.142683 22.1041 0.00101626 22.4474 0.00101626 22.8134C0.00101626 23.1795 0.142683 23.5228 0.4 23.7803L1.21931 24.5992C1.47642 24.8569 1.82012 24.9984 2.18577 24.9984C2.55203 24.9984 2.89553 24.8569 3.15264 24.5992L12.5002 15.252L21.8474 24.5992C22.1049 24.8569 22.4482 24.9984 22.814 24.9984H22.8144C23.1805 24.9984 23.5238 24.8569 23.7813 24.5992L24.6004 23.7803C24.8575 23.523 24.9994 23.1795 24.9994 22.8134C24.9994 22.4474 24.8575 22.1041 24.6004 21.8465L15.2535 12.4992Z"
                fill="black" />
            </svg>
          </div>
        </div>

        <div class="cart-modal__body">
          <div class="cart-item">
            <p class="cart-item__title">Ролл угорь стандарт</p>

            <div class="cart-item__controls">
              <div class="cart-item__controls--price">250 ₽</div>

              <button class="btn btn-outline" type="button">-</button>
              <div class="cart-item__controls--count">1</div>
              <button class="btn btn-outline" type="button">+</button>
            </div>
          </div>

          <div class="cart-item">
            <p class="cart-item__title">Ролл угорь стандарт</p>

            <div class="cart-item__controls">
              <div class="cart-item__controls--price">250 ₽</div>

              <button class="btn btn-outline" type="button">-</button>
              <div class="cart-item__controls--count">1</div>
              <button class="btn btn-outline" type="button">+</button>
            </div>
          </div>

          <div class="cart-item">
            <p class="cart-item__title">Ролл угорь стандарт</p>

            <div class="cart-item__controls">
              <div class="cart-item__controls--price">250 ₽</div>

              <button class="btn btn-outline" type="button">-</button>
              <div class="cart-item__controls--count">1</div>
              <button class="btn btn-outline" type="button">+</button>
            </div>
          </div>

        </div>

        <div class="cart-modal__footer">
          <div class="cart-modal__footer--price">1250 ₽</div>

          <div class="cart-modal__footer--controls">
            <button class="btn btn-primary" type="button" aria-label="вход пользователя">
              Оформить заказ
            </button>
            <button class="btn btn-outline" type="button" aria-label="корзина товаров">
              Отмена
            </button>

          </div>
        </div>
      </div>

    </div>

    <Footer></Footer>

  </div> -->

</template>

<script setup>
import {restArr} from '../constants/rests';

const getUrl = (name) => {
  return new URL(`../assets/images/rest/${name}`, import.meta.url);
}

</script>

<style scoped></style>
