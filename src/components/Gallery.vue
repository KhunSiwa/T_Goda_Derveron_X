<template>
  <div>
    <div class="mb-3">
      <img :src="mainImage" class="w-full h-72 md:h-96 object-cover rounded" :alt="`Image ${selected + 1}`" />
    </div>

    <div class="flex gap-2 overflow-x-auto">
      <button
        v-for="(img, i) in images"
        :key="i"
        @click="selected = i"
        class="flex-none rounded overflow-hidden focus:outline-none"
        :aria-pressed="selected === i"
      >
        <img :src="img" class="w-24 h-16 object-cover" :class="selected === i ? 'ring-2 ring-indigo-500' : ''" />
      </button>
    </div>
  </div>
</template>

<script setup>
// Interactive Gallery: main image with clickable thumbnails.
// Uses a local `selected` ref to avoid re-renders elsewhere.
import { defineProps, ref, computed } from 'vue'

const props = defineProps({ images: { type: Array, default: () => [] } })
const images = props.images

const selected = ref(0)

// Computed main image (updates when `selected` changes)
const mainImage = computed(() => images && images.length ? images[selected.value] : '')
</script>
