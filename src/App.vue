<template>
  <header class="header">
    <h1>Wardrobe</h1>
    <filters @select-tag="getFilter" />
  </header>
  <main>
    <div class="page">
      <div class="section left">
        <slider :selectedTag="selectedTag" data="9"/>
      </div>
      <div class="center">
        <div class="section coats">
          <slider :selectedTag="selectedTag" data="10"/>
        </div>
        <div class="section pants">
          <slider :selectedTag="selectedTag" data="11"/>
        </div>
      </div>
      <div class="right">
        <div class="section hats">
          <slider :selectedTag="selectedTag" data="12"/>
        </div>
        <div class="section bags">
          <slider :selectedTag="selectedTag" data="18"/>
        </div>
        <div class="section shoes">
          <slider :selectedTag="selectedTag" data="13"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import Slider from "./components/Slider.vue";
  import {ref} from "vue";
  import Filters from "./components/Filters.vue";

  const selectedTag = ref(null);

  function getFilter(n) {
    selectedTag.value = n;
  }

</script>

<style>
 .header {
   display: flex;
   gap: 10px;
   padding: 10px 0 10px;
 }

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
