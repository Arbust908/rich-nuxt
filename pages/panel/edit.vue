<template>
  <main>
    <form
      action="POST"
      enctype="multipart/form-data"
      class="flex flex-col gap-4 mx-8 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
      @submit.prevent="save"
    >
      <h2 class="block text-3xl font-medium text-gray-700 sm:mt-px sm:pt-2">
        {{ imgCtx.title }}
      </h2>
      <div class="mt-1 w-full">
        <div
          class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
        >
          <div class="space-y-3 text-center">
            <!-- <div
              class="image-input"
              :style="{ 'background-image': `url(${previewImage})` }"
              @click="chooseImage"
            >
              <span v-if="!previewImage" class="placeholder">
                Choose an Image
              </span>
              <input
                class="file-input"
                ref="fileInput"
                type="file"
                @input="onSelectFile"
              />
            </div> -->
            <!-- :style="{ 'background-image': `url(${previewImage})` }" -->
            <img
              v-if="imgSrc"
              :src="`${imgSrc}`"
              class="pointer-events-none rounded max-w-sm object-contain"
            />
            <svg
              v-else
              class="mx-auto h-16 w-16 text-orange-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer bg-white px-6 py-2 rounded-md font-medium text-orange-600 hover:bg-orange-500 hover:text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 mx-auto"
                @click="chooseImage"
              >
                <span>{{ imgSrc ? 'Cambiar Imagen' : 'Elegir archivo' }}</span>
                <input
                  ref="fileInput"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                  accept="image/jpeg, image/png"
                  @input="onSelectFile"
                />
                <input
                  v-model="imgCtx.fileName"
                  name="file-name"
                  type="hidden"
                  class="sr-only"
                />
              </label>
            </div>
            <p class="text-xs text-orange-400">PNG, JPG, GIF hasta 10MB</p>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="ml-3 mb-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      >
        Subir
      </button>
    </form>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import picaso from '@/mixins/picaso'
export default {
  name: 'FotoEdit',
  mixins: [picaso],
  layout: 'backoffice',
  middleware: 'mustBeLogged',
  data() {
    return {
      previewImage: null,
      files: null,
    }
  },
  head() {
    return {
      title: 'Cabezera || Rich Cova',
    }
  },
  computed: {
    ...mapState({
      imgCtx: (state) => state.pannel.changing_image,
      user: (state) => state.user,
    }),
    imgSrc() {
      return this.imgCtx && this.imgCtx.heroSrc
        ? this.getApiImage(this.imgCtx.heroSrc)
        : this.previewImage
        ? this.previewImage
        : null
    },
  },
  methods: {
    ...mapActions({
      openSuccess: 'openSuccess',
      openError: 'openError',
      setImageContext: 'pannel/changeImage',
    }),
    async save() {
      const userToken = this.user.token
      const input = this.$refs.fileInput
      console.log(input.files)
      const response = await this.$axios.post(
        `/upload/${userToken}`,
        input.files
      )
      if (response.data.status === 'success') {
        this.openSuccess(`Logramos guardar la nueva imagen.`)
        // this.$router.push('/panel/fotos')
      } else {
        this.openError(`Hubo un error guardando la Imagen.`)
      }
    },
    chooseImage() {
      this.$refs.fileInput.click()
    },

    onSelectFile() {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        this.files = files
        const reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },
  },
}
</script>
