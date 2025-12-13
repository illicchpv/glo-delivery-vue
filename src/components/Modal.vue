<template>
  <div class="cart-modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
    <div class="cart-modal">
      <div class="cart-modal__header">
        <div class="cart-modal__header--title">Корзина</div>

        <div class="cart-modal__header--close" @click="closeModal()">
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
</template>

<script setup>
  const {title, isOpen} = defineProps({title: String, isOpen: Boolean})
  console.log('props: ', title, isOpen);

  const emit = defineEmits(['toggleModal'])
  const closeModal = () => {
    emit('toggleModal')
  }  
</script>

<style scoped>
.cart-modal__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  justify-content: center;
  align-items: center;
}

.cart-modal__overlay.open {
  display: flex;
}

.cart-modal {
  border-radius: 5px;
  max-width: 780px;
  width: 100%;
  min-height: 552px;
  padding: 40px 45px;
  background: var(--gray---gray-1);
}

.cart-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.cart-modal__header--title {
  font-weight: 700;
  font-size: 36px;
  color: var(--gray---gray-10);
  margin: 0;
}

.cart-modal__header--close {
  cursor: pointer;
}

.cart-modal__body {}


.cart-modal__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 50px;
}

.cart-modal__footer--price {
  border-radius: 5px;
  padding: 15px 20px;

  align-content: center;
  background: var(--gray---gray-9);

  font-weight: 700;
  font-size: 20px;
  color: var(--gray---gray-2);
}

.cart-modal__footer--controls {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}


.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--gray---gray-5);
}

.cart-item__title {
  font-weight: 400;
  font-size: 18px;
  /* line-height: 178%; */
  color: var(--gray---gray-10);
  margin: 0;
}

.cart-item__controls {
  display: flex;
  align-items: center;
}

.cart-item__controls button {
  width: 40px;
  border: 1px solid var(--daybreak-blue---blue-5);
  color: var(--daybreak-blue---blue-5);
}

.cart-item__controls--price {
  font-weight: 700;
  font-size: 20px;
  /* line-height: 160%; */
  color: var(--gray---gray-10);
  margin-right: 47px;
}

.cart-item__controls--count {
  width: 40px;
  text-align: center;
}
</style>
