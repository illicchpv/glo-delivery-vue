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
            <img :src="getUrl(rest.img)" :alt="rest.title">
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
      </div>
    </div>
  </section>

</template>

<script setup>
import {restArr} from '../constants/rests';

const getUrl = (name) => {
  return new URL(`../assets/images/rest/${name}`, import.meta.url);
}
</script>

<style scoped></style>
