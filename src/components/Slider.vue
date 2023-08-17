<template>
  <swiper :pagination="pagination" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(item, index) in filteredItems">
      <img :src="`/cloth/${item.category}/${item.image}.jpg`" :alt="index">
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
import {ref, watch} from "vue";

const props = defineProps(['data', 'selectedTag'])
const items = ref(props.data)
const filteredItems = ref(null);

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};

const modules = [Pagination, Navigation];

watch( ()=> props.selectedTag, (newVal)=> {
  filteredItems.value = items.value.data

  if (newVal?.value.length > 0) {

    filteredItems.value = filteredItems.value.filter(x => {
      const found = x.tags.some(r => {
        return newVal.value.indexOf(r) >= 0
      })

      if (found) {
        return x
      }
    })

  } else {
    filteredItems.value = items.value.data
  }

}, {immediate:true, deep: true});

</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  margin: 0;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url("/public/cloth/bg-pattern.jpg") 0 0 repeat;
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
  transition: all .5s;
}

.swiper-pagination-bullet-active {
  background: #a1be94;
}

.swiper-button-prev,
.swiper-button-next {
  opacity: 0;
  color: #a1be94;
  transition: all .5s;
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
