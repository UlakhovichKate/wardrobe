<template>
  <main>
    <filters @select-tag="getFilter" />
    <div class="page">
      <div class="section left">
        <slider :data="dataFull" :selectedTag="selectedTag"/>
      </div>
      <div class="center">
        <div class="section coats">
          <slider :data="dataCoats" :selectedTag="selectedTag"/>
        </div>
        <div class="section pants">
          <slider :data="dataPants" :selectedTag="selectedTag"/>
        </div>
      </div>
      <div class="right">
        <div class="section hats">
          <slider :data="dataHats" :selectedTag="selectedTag"/>
        </div>
        <div class="section bags">
          <slider :data="dataBags" :selectedTag="selectedTag"/>
        </div>
        <div class="section shoes">
          <slider :data="dataShoes" :selectedTag="selectedTag"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import Slider from "./components/Slider.vue";
  import {inject, reactive, ref} from "vue";
  import Filters from "./components/Filters.vue";

  const clothData = inject("clothData");

  function getData(cat) {
    return clothData.filter((x) => {
      if (x.category === cat) {
        return x;
      }
    })
  }

  const dataCoats = reactive({
    data: getData("coats"),
    type: 'coats'
  });

  const dataBags = reactive({
    data: getData("bags"),
    type: 'bags'
  });
  const dataHats = reactive({
    data: getData("hats"),
    type: 'hats'
  });
  const dataPants = reactive({
    data: getData("pants"),
    type: 'pants'
  });
  const dataFull = reactive({
    data: getData("full"),
    type: 'full'
  });
  const dataShoes = reactive({
    data: getData("shoes"),
    type: 'shoes'
  });

  const selectedTag = ref(null);

  function getFilter(n) {
    selectedTag.value = n;
  }
</script>

<style>
  .page {
    width: calc(100vw - 20px);
    display: flex;
    box-sizing: border-box;
    height: 100vh;
    gap: 10px;
  }

  .left {
    max-width: 30%;
  }

  .center {
    max-width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .right {
    max-width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .section {
    width: 100%;
  }

  .coats {
    height: 48vh;
  }

  .pants {
    height: 50vh;
  }


  .hats {
    height: 30vh;
  }

  .bags {
    height: 36vh;
  }

  .shoes {
    height: 31vh;
  }
</style>
