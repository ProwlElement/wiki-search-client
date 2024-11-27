<script setup lang="ts">
import SearchItemPage from './components/SearchItemPage.vue'
import SearchResultsList from './components/SearchResultsList.vue'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <header>
    <TheNav />
  </header>

  <main class="flex justify-between gap-4">
    <SearchResultsList />
    <SearchItemPage />
  </main>

  <footer class="">footer</footer>
</template>
