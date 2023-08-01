<template>
  <swiper :pagination="pagination" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(item, index) in filteredItems" :key="index" class="slide">
      <img :src="item.media" :alt="index">
      <span class="tags">{{ item.tags }}</span>
    </swiper-slide>
    <swiper-slide>
      <div class="empty-slide"></div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {ref, watch, computed } from "vue";

const props = defineProps(['data', 'selectedTag'])

const items = ref(null);
const filteredItems = ref(null);

async function fetchBackend(category) {
  try {
    const response = await fetch('http://localhost:8000/wp-json/wp/v2/posts?categories='+ category +'&per_page=100');
    const clothes = await response.json();

    items.value = clothes.map(x => {
          return {
            'tags': x.tags,
            'media': x.fimg_url
          }
        })
    filteredItems.value = items.value

  } catch (error) {
    console.error(error);
  }
}

fetchBackend(props.data);

watch( ()=> props.selectedTag, (newVal)=> {
  filteredItems.value = items.value

  if (newVal?.value.length > 0) {
    filteredItems.value = filteredItems.value.filter(x => {
      const found = x.tags.some(r=> newVal.value.indexOf(r) >= 0)
      if (found) {
        return x
      }
    })

  } else {
    filteredItems.value = items.value
  }

}, {immediate:true, deep: true});

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};

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
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.slide {
  position: relative;
}

.tags {
  position: absolute;
  top: 50px;
  left: 50px;
}
</style>
