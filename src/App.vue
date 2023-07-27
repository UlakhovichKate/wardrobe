<template>
  <header>
    <h1>Wardrobe</h1>
  </header>
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
  import { ref } from "vue";

  const dataCoats = ref([
      'src/assets/cloth/coats/1674046687-bestwhiteshirts2023-mango-1674046465.png',
      'src/assets/cloth/coats/hmgoepprod.jpg',
      'src/assets/cloth/coats/sportswear-phoenix-fleece-womens-over-oversized-crewneck-sweatshirt-Wj2Rd6.png'
  ])
  const dataBags = ref([
      "src/assets/cloth/bags/2022-L6-CK2-20151158-01-1.jpg",
      "src/assets/cloth/bags/148605A213_main.jpg"
  ])
  const dataHats = ref([
      'src/assets/cloth/hats/Chok.Lids Everyday Bucket Hat.webp',
      'src/assets/cloth/hats/eb0cb2f7-350f-49ea-95f9-86a87207a32e.webp'
  ])
  const dataPants = ref([
      'src/assets/cloth/pants/100140170113000_0_1664227209494.jpg',
      'src/assets/cloth/pants/h_5051839610620.jpg'
  ])
  const dataFull = ref([
      'src/assets/cloth/full/1656012267-best-flowy-dresses-women-doen-dress-1656012229.png',
      'src/assets/cloth/full/best.jpg'
  ])
  const dataShoes = ref([
      'src/assets/cloth/shoes/1433977020_main.jpg',
      'src/assets/cloth/shoes/images.jpg'
  ])
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
