<template>
  <input
    v-model="query"
    placeholder="Wikipedia Extreme Search"
    @keyup="search"
    class="w-full bg-white rounded-xl px-4 outline-none"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSearchStore } from '@/stores/search'
import debounce from 'lodash/debounce'

const searchStore = useSearchStore()
const query = ref('')

const search = debounce(() => {
  searchStore.searchWiki(query.value)
}, 500)
</script>
