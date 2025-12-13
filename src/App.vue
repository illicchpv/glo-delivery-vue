<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Modal from './components/Modal.vue';
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <div class="page-wrapper">

    <Header @toggleModal="isOpen = !isOpen"></Header>

    <main class="main">

      <router-view></router-view>

    </main>

    <Modal title="modal tittle" :isOpen="isOpen" @toggleModal="isOpen = !isOpen"></Modal>

    <Footer></Footer>

  </div>
</template>

<style scoped></style>
