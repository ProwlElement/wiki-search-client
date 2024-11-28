<template>
  <div
    class="pros prose-sm bg-light rounded-xl w-full p-4 hover:w-[calc(120%)] transition-all cursor-pointer"
  >
    <h2 class="m-0">
      <slot name="title"></slot>
      test
    </h2>
    <slot name="details"> </slot>
  </div>
</template>
