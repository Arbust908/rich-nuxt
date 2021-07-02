<template>
  <article class="flex flex-col rounded-lg shadow-lg overflow-hidden relative">
    <div class="flex-1">
      <img
        class="h-full w-full object-cover"
        :src="getApiImage(image)"
        :alt="fullName"
      />
    </div>
    <div class="flex-shrink-0 bg-white py-4 px-6 flex flex-col justify-between">
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
    </div>
    <button
      type="submit"
      class="absolute top-0 left-0 m-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      @click.prevent="
        changeImage({
          title: fullName,
          return: '/panel/fotos',
          fileName: image,
          heroSrc: image,
        })
      "
    >
      Cambiar
    </button>
  </article>
</template>

<script>
import picaso from '@/mixins/picaso'
import { mapActions } from 'vuex'
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
    ...mapActions({
      setImageContext: 'pannel/changeImage',
    }),
    formatDate(date) {
      return date
    },
    changeImage(imageContext) {
      this.setImageContext(imageContext)
      this.$router.push('/panel/edit')
    },
  },
}
</script>
