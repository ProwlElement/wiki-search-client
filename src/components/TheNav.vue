<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<template>
  <div class="flex justify-between gap-4 p-4">
    <img :src="logo" alt="" srcset="" width="32" height="32" />
    <nav>
      <ul class="flex justify-between gap-1 bg-white rounded-xl p-1">
        <li>
          <button class="px-4 py-2 bg-white rounded-xl hover:bg-dark active:bg-dark hover:text-white transition-colors">
            Search
          </button>
        </li>
        <li>
          <button class="px-4 py-2 bg-white rounded-xl hover:bg-dark hover:text-white transition-colors">
            History
          </button>
        </li>
      </ul>
    </nav>
    <input class="w-full bg-white rounded-xl px-4 outline-none" type="search" name="" id="" />
  </div>
</template>

<script lang="ts">
export default {}
</script>
