<template>
  <article class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-1 bg-gray-300 w-full">
      <img
        class="h-full w-full object-cover"
        :src="getApiImage(image)"
        :alt="fullName"
      />
    </div>
    <!-- <div class="flex-shrink-0 bg-white py-4 px-6 flex flex-col justify-between">
      <div class="flex items-center">
        <p class="font-medium text-gray-900">
          <span class="font-bold pr-2">{{ fullName }}</span>
          <time class="text-sm text-gray-500" :datetime="date">
            {{ formatDate(date) }}
          </time>
        </p>
      </div>
      <p v-if="text" class="text-sm font-medium text-gray-900">
        {{ text }}
      </p>
    </div> -->
  </article>
</template>

<script>
import picaso from '@/mixins/picaso'
export default {
  mixins: [picaso],
  props: {
    fullName: {
      type: String,
      default: 'Juan Perez',
    },
    image: {
      type: String,
      default: 'King.jpg',
    },
    date: {
      type: String,
      default: 'Ene 1, 2020',
    },
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    formatDate(date) {
      return date
    },
  },
}
</script>

<style scoped>
div {
  aspect-ratio: 1 / 1;
}
</style>
