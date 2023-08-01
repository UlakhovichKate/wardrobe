<template>
  <div class="filter">
    <ul class="list">
      <li class="item"
          v-for="(item, index) in items"
          :data-tag="item.id"
          :key="index"
          @click="addFilter(item.id);toggleBtn(index)"
          :class="{ active: activeClass[index] }">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

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
const activeClass = reactive({})

function addFilter(n) {
  if (filters.value.includes(n)) {
    let x = filters.value.indexOf(n)
    filters.value.splice(x, 1)
  } else {
    filters.value.push(n)
  }
  emit('selectTag', filters)
}

const toggleBtn = (index) => {
  activeClass[index] = !activeClass[index]
}

</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.item {
  padding: 1px 10px 3px;
  border-radius: 3px;
  background-color: #a4a4a4;
  color: #fff;
  cursor: pointer;
}

.item:hover {
  opacity: 0.7;
}

.item.active {
  background-color: #a1be94;
}

</style>
