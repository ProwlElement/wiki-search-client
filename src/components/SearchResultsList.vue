<script setup lang="ts">
import SearchResultItem from './SearchResultItem.vue'
import { useSearchStore } from '@/stores/search'
const search = useSearchStore()
const { results, loading } = search
</script>

<template>
  <div class="flex flex-col gap-4 bg-white rounded-xl w-full p-8 overflow-y-scroll overflow-x-visible scrollbar-none scrollbar-track-transparent scrollbar-thumb-light ">
    <SearchResultItem v-for="article in results" :key="article.title">
      <template #title>{{ article.title }} </template>
      <template #details>
        <div v-html="article.title"></div>
      </template>
    </SearchResultItem>
  </div>
</template>
