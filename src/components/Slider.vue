<template>
  <swiper :pagination="pagination" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(item, index) in items.data">
      <img :src="item" :alt="index">
    </swiper-slide>
    <swiper-slide>
      <div class="empty-slide"></div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue'

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const items = defineProps(['data'])

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
}

const modules = [Pagination, Navigation];

</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  margin: 0;
}

.swiper-slide {
  text-align: center;
}

.swiper-slide img {
  display: block;
  max-height: 100%;
  max-width: 100%;
  margin: auto;
}

.swiper:hover .swiper-pagination-bullet {
  opacity: 1;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  opacity: 0;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  background: #a1be94;
}

.swiper-button-prev,
.swiper-button-next {
  opacity: 0;
  color: #a1be94;
}

.swiper:hover .swiper-button-prev,
.swiper:hover .swiper-button-next {
  opacity: 1;
}

.empty-slide {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
