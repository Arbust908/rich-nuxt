<template>
  <div class="pt-8 px-4 sm:px-8 lg:px-12 h-full overflow-y-auto">
    <div class="flex justify-between mb-4">
      <h1 class="text-2xl leading-6 font-medium text-gray-900">Cabezera</h1>
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
    <section class="grid grid-cols-1 gap-4 overflow-y-auto pb-6">
      <article class="max-w-2xl">
        <h1
          class="text-4xl tracking-tight font-extrabold text-gray-900space-y-2"
        >
          <input
            v-model="hero.titulo[0]"
            class="inline text-orange-900 text-5xl tracking-tight font-extrabold bg-white bg-opacity-25 focus:bg-white focus:bg-opacity-100 hover:bg-opacity-70 rounded p-2"
          />
          <input
            v-model="hero.titulo[1]"
            class="inline text-orange-600 text-5xl tracking-tight font-extrabold bg-white bg-opacity-25 focus:bg-white focus:bg-opacity-100 hover:bg-opacity-70 rounded p-2"
          />
        </h1>
      </article>
      <article class="max-w-2xl flex gap-4 relative">
        <img
          :src="imgSrc"
          class="object-cover pointer-events-none rounded max-w-sm"
        />
        <div>
          <button
            type="submit"
            class="absolute bottom-0 left-0 ml-3 mb-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            @click.prevent="save"
          >
            Cambiar
          </button>
        </div>
      </article>
      <article class="max-w-2xl grid grid-cols-2 items-center">
        <button
          class="flex items-center justify-center p-2 border border-transparent rounded-md bg-orange-600 max-w-xs"
        >
          <input
            v-model="hero.buttons.main.title"
            class="text-white bg-white bg-opacity-25 focus:bg-white focus:bg-opacity-100 hover:bg-opacity-70 rounded p-2 border-0 font-medium focus:text-warmGray-700"
            type="text"
          />
        </button>
        <div>
          <strong>Accion</strong>
          <div class="relative">
            <input
              type="text"
              readonly
              value="Politicas y redireccion a la turnera"
              class="w-full rounded bg-transparent text-sm text-warmGray-500 italic"
            />
            <div
              class="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2"
            >
              <IconSolidLock class="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </article>
      <article class="max-w-2xl grid grid-cols-2 items-center">
        <button
          class="flex items-center justify-center p-2 border border-transparent rounded-md bg-orange-600 max-w-xs"
        >
          <input
            v-model="hero.buttons.second.title"
            class="text-white bg-white bg-opacity-25 focus:bg-white focus:bg-opacity-100 hover:bg-opacity-70 rounded p-2 border-0 font-medium focus:text-warmGray-700"
            type="text"
          />
        </button>
        <div>
          <strong>Accion</strong>
          <input
            v-model="hero.buttons.second.link"
            type="text"
            class="w-full rounded bg-transparent text-sm focus:bg-white"
          />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Hero',
  layout: 'backoffice',
  middleware: 'mustBeLogged',
  data() {
    return {
      hero: {
        titulo: ['Rich Cova', 'Rulologo'],
        subtitle:
          'Estudio de peluquería especializado en cabellos ondulados, rizados y afros.',
        buttons: {
          main: {
            title: 'Sacar Turno',
          },
          second: {
            title: 'Tienda online',
            link: 'https://richtiendashop.mitiendanube.com/',
          },
        },
        heroSrc: 'rulologo.jpg',
      },
    }
  },
  head() {
    return {
      title: 'Cabezera || Rich Cova',
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
    imgSrc() {
      return require(`@/assets/img/${this.hero.heroSrc}`)
    },
  },
  async beforeMount() {
    const response = await this.$axios.get(`/info/hero/`)
    this.hero = response.data.data
  },
  methods: {
    ...mapActions({
      openSuccess: 'openSuccess',
      openError: 'openError',
    }),
    async save() {
      const userToken = this.user.token
      const response = await this.$axios.patch(
        `/info/hero/${userToken}`,
        this.hero
      )
      if (response.data.status === 'success') {
        this.openSuccess(`Logramos guardar toda la Cabezera!.`)
        // this.$router.push('/panel/fotos')
      } else {
        this.openSuccess(
          `Hubo un error guardando la Cabezera. Proba recargando el sitio.`
        )
      }
    },
  },
}
</script>
