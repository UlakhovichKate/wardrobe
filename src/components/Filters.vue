<template>
  <div class="filter">
    Filters:
    <ul class="list">
      <li class="item" v-for="(item, index) in items" :data-tag="item.id" :key="index" @click="addFilter(item.id)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from "vue";

const items = ref(null);

async function fetchBackend() {
  try {
    const response = await fetch('http://localhost:8000/wp-json/wp/v2/tags?per_page=100');
    const tags = await response.json();

    items.value = tags.map(x => {
      return {
        'id': x.id,
        'name': x.name
      }
    })

  } catch (error) {
    console.error(error);
  }
}

fetchBackend();

const emit = defineEmits(['selectTag'])
const filters = ref([]);

function addFilter(n) {
  if (filters.value.includes(n)) {
    let x = filters.value.indexOf(n)
    filters.value.splice(x, 1)
  } else {
    filters.value.push(n)
  }

  emit('selectTag', filters)
}

</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
}

.item {
  padding: 1px 10px 3px;
  border-radius: 3px;
  background-color: #2c3e50;
  color: #fff;
  cursor: pointer;
}

.item:hover,
.item.active {
  background-color: #3a7bb5;
}
</style>
