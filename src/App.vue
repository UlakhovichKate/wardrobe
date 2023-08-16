<template>
  <main>
    <div class="page">
      <div class="section left">
        <slider :data="dataFull"/>
      </div>
      <div class="center">
        <div class="section coats">
          <slider :data="dataCoats"/>
        </div>
        <div class="section pants">
          <slider :data="dataPants"/>
        </div>
      </div>
      <div class="right">
        <div class="section hats">
          <slider :data="dataHats"/>
        </div>
        <div class="section bags">
          <slider :data="dataBags"/>
        </div>
        <div class="section shoes">
          <slider :data="dataShoes"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import Slider from "./components/Slider.vue";
  import { ref, reactive } from "vue";

  const dataCoats = reactive({
      data: [
        'IMG_0753.jpg',
        'IMG_0754.jpg',
        'IMG_0755.jpg',
        'IMG_0758.jpg',
        'IMG_0759.jpg',
        'IMG_0760.jpg',
        'IMG_0761.jpg',
        'IMG_0762.jpg',
        'IMG_0765.jpg',
        'IMG_0766.jpg',
        'IMG_0767.jpg',
        'IMG_0768.jpg',
        'IMG_0769.jpg',
        'IMG_0771.jpg',
        'IMG_0773.jpg',
        'IMG_0790.jpg',
        'IMG_0791.jpg',
        'IMG_0914.jpg',
        'IMG_0916.jpg',
        'IMG_0922.jpg',
      ],
      type: 'coats'
  });
  const dataBags = reactive({
    data: [
      "IMG_0774.jpg",
      "IMG_0775.jpg",
      "IMG_0776.jpg",
      "IMG_0777.jpg",
      "IMG_0778.jpg",
      "IMG_0779.jpg",
      "IMG_0780.jpg",
      "IMG_0781.jpg",
      "IMG_0782.jpg",
      "IMG_0783.jpg"
    ],
    type: 'bags'
  });
  const dataHats = reactive({
    data: [
            'IMG_0931.jpg',
            'IMG_0932.jpg',
            'IMG_0933.jpg',
            'IMG_0934.jpg',
            'IMG_0935.jpg',
            'IMG_0936.jpg',
            'IMG_0937.jpg',
    ],
    type: 'hats'
  });
  const dataPants = reactive({
    data: [
      'IMG_0756.jpg',
      'IMG_0757.jpg',
      'IMG_0763.jpg',
      'IMG_0764.jpg',
      'IMG_0797.jpg',
      'IMG_0921.jpg',
      'IMG_0923.jpg',
      'IMG_0924.jpg',
    ],
    type: 'pants'
  });
  const dataFull = reactive({
    data: [
      'IMG_0752.jpg',
      'IMG_0792.jpg',
      'IMG_0793.jpg',
      'IMG_0794.jpg',
      'IMG_0795.jpg',
      'IMG_0796.jpg',
      'IMG_0911.jpg',
      'IMG_0912.jpg',
      'IMG_0915.jpg',
      'IMG_0917.jpg',
      'IMG_0918.jpg',
      'IMG_0919.jpg',
      'IMG_0920.jpg',
      'IMG_0925.jpg',
      'IMG_0926.jpg',
      'IMG_0927.jpg',
    ],
    type: 'full'
  });
  const dataShoes = reactive({
    data: [
      'IMG_0784.jpg',
      'IMG_0785.jpg',
      'IMG_0786.jpg',
      'IMG_0787.jpg',
      'IMG_0788.jpg',
      'IMG_0789.jpg',
      'IMG_0929.jpg',
      'IMG_0930.jpg'
    ],
    type: 'shoes'
  });
</script>

<style>
  .page {
    display: flex;
    box-sizing: border-box;
    height: 95vh;
    gap: 10px;
  }

  .left {
    max-width: 30%;
  }

  .center {
    max-width: 40%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .right {
    max-width: 30%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .section {
    width: 100%;
  }

  .coats {
    height: 43vh;
  }

  .pants {
    height: 50vh;
  }


  .hats {
    height: 30vh;
  }

  .bags {
    height: 31vh;
  }

  .shoes {
    height: 31vh;
  }
</style>
