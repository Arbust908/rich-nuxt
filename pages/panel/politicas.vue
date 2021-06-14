<template>
  <div class="pt-8 px-4 sm:px-8 lg:px-12 h-full overflow-y-auto">
    <div class="flex justify-between mb-4">
      <h1 class="text-2xl leading-6 font-medium text-gray-900">Politicas</h1>
      <div>
        <button
          type="button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          @click="$router.push('/panel')"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          @click.prevent="save"
        >
          Guardar
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pb-6"
    >
      <div
        v-for="(politica, key) in politicas"
        :key="key"
        class="mt-1 flex gap-2 items-start"
      >
        <label
          :for="`politica-${key}`"
          class="block text-xl font-bold text-gray-700 sm:mt-px sm:pt-2 w-5"
        >
          {{ key }}
        </label>
        <textarea
          v-model="politicas[key]"
          :name="`politica-${key}`"
          rows="5"
          class="max-w-lg shadow-sm block w-full focus:ring-orange-500 focus:border-orange-500 sm:text-sm border border-gray-300 rounded-md"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Politicas',
  layout: 'backoffice',
  middleware: 'mustBeLogged',
  data() {
    return {
      politicas: {},
    }
  },
  head() {
    return {
      title: 'Politicas || Rich Cova',
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  async beforeMount() {
    const response = await this.$axios.get(`/info/policies/`)
    this.politicas = response.data.data
  },
  methods: {
    ...mapActions({
      openSuccess: 'openSuccess',
      openError: 'openError',
    }),
    async save() {
      this.endWithDot()
      const userToken = this.user.token
      const response = await this.$axios.patch(
        `/info/policies/${userToken}`,
        this.politicas
      )
      if (response.data.status === 'success') {
        this.openSuccess(
          `Las ${this.politicas.length} politicas se guardaron bien!.`
        )
        // this.$router.push('/panel/fotos')
      } else {
        this.openSuccess(
          `Hubo un error guardando las politicas. Proba recargando el sitio.`
        )
      }
    },
    endWithDot() {
      for (const llave in this.politicas) {
        if (Object.hasOwnProperty.call(this.politicas, llave)) {
          let text = this.politicas[llave]
          const finishingDot = text.endsWith('.')
          if (!finishingDot) {
            text = text + '.'
          }
          this.politicas[llave] = text
        }
      }
    },
  },
}
</script>

data() { return { timeline, } },
