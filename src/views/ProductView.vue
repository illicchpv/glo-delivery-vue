<script setup>
import {goodsArr} from '../constants/goods';

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url);
}
</script>

<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="products-container">

        <div class="products-card"  v-for="good in goodsArr" :key="good.id">
          <div class="products-card__image">
            <img :src="getUrl(good.img)" :alt="good.title">
          </div>

          <div class="products-card__description">
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">{{ good.title }}</h5>
            </div>

            <div class="products-card__description-row">
              <p class="products-card__description--text">{{ good.description }}</p>
            </div>

            <div class="products-card__description-row">
              <div class="products-card__description-controls">
                <button class="btn btn-primary" type="button" aria-label="вход пользователя">
                  В корзину
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.4641 8.93594H4.15937L4.62656 7.98438L12.3891 7.97031C12.6516 7.97031 12.8766 7.78281 12.9234 7.52344L13.9984 1.50625C14.0266 1.34844 13.9844 1.18594 13.8812 1.0625C13.8303 1.00175 13.7667 0.952815 13.6949 0.919089C13.6232 0.885363 13.5449 0.867653 13.4656 0.867188L3.59062 0.834375L3.50625 0.4375C3.45312 0.184375 3.225 0 2.96562 0H0.551562C0.405279 0 0.264987 0.0581108 0.161549 0.161549C0.0581109 0.264987 0 0.405279 0 0.551563C0 0.697846 0.0581109 0.838138 0.161549 0.941576C0.264987 1.04501 0.405279 1.10313 0.551562 1.10313H2.51875L2.8875 2.85625L3.79531 7.25156L2.62656 9.15938C2.56587 9.24129 2.52931 9.33856 2.52103 9.44018C2.51274 9.5418 2.53306 9.64371 2.57969 9.73438C2.67344 9.92031 2.8625 10.0375 3.07187 10.0375H4.05312C3.84393 10.3153 3.73094 10.6538 3.73125 11.0016C3.73125 11.8859 4.45 12.6047 5.33437 12.6047C6.21875 12.6047 6.9375 11.8859 6.9375 11.0016C6.9375 10.6531 6.82187 10.3141 6.61562 10.0375H9.13281C8.92362 10.3153 8.81063 10.6538 8.81094 11.0016C8.81094 11.8859 9.52969 12.6047 10.4141 12.6047C11.2984 12.6047 12.0172 11.8859 12.0172 11.0016C12.0172 10.6531 11.9016 10.3141 11.6953 10.0375H13.4656C13.7687 10.0375 14.0172 9.79062 14.0172 9.48594C14.0163 9.33981 13.9576 9.19997 13.854 9.09693C13.7504 8.99389 13.6102 8.93602 13.4641 8.93594V8.93594ZM3.82031 1.92188L12.8172 1.95156L11.9359 6.88594L4.86875 6.89844L3.82031 1.92188ZM5.33437 11.4953C5.0625 11.4953 4.84062 11.2734 4.84062 11.0016C4.84062 10.7297 5.0625 10.5078 5.33437 10.5078C5.60625 10.5078 5.82812 10.7297 5.82812 11.0016C5.82812 11.1325 5.7761 11.2581 5.68351 11.3507C5.59091 11.4433 5.46533 11.4953 5.33437 11.4953V11.4953ZM10.4141 11.4953C10.1422 11.4953 9.92031 11.2734 9.92031 11.0016C9.92031 10.7297 10.1422 10.5078 10.4141 10.5078C10.6859 10.5078 10.9078 10.7297 10.9078 11.0016C10.9078 11.1325 10.8558 11.2581 10.7632 11.3507C10.6706 11.4433 10.545 11.4953 10.4141 11.4953V11.4953Z"
                      fill="white" />
                  </svg>
                </button>

                <span class="products-card__description-controls--price">{{ good.price }} ₽</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</template>

<style scoped></style>
