<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex">
          <h1 class="flex-1 text-2xl font-bold text-gray-900">Fotos</h1>
        </div>
        <section
          class="my-8 flex flex-col gap-x-4 sm:gap-x-6 xl:gap-x-8 bg-gray-50 rounded shadow-md overflow-hidden"
        >
          <div
            class="grid grid-cols-6 p-2 gap-x-4 sm:gap-x-6 xl:gap-x-8 bg-gray-600 font-bold text-gray-50"
          >
            <span class="col-span-2 flex justify-center items-center"
              >Nombre</span
            >
            <span class="col-span-2 flex justify-center items-center"
              >Email</span
            >
            <span class="col-span-1 flex justify-center items-center"
              >Cuando</span
            >
            <span class="col-span-1 flex justify-center items-center"></span>
          </div>
          <div
            v-for="(sub, key) in subs"
            :key="key"
            class="grid grid-cols-6 p-2 gap-x-4 sm:gap-x-6 xl:gap-x-8 hover:bg-gray-200"
          >
            <span class="col-span-2 flex justify-center items-center">{{
              sub.name
            }}</span>
            <span class="col-span-2 flex justify-center items-center">{{
              sub.email
            }}</span>
            <span class="col-span-1 flex justify-center items-center">{{
              formatDate(sub.time)
            }}</span>
            <span class="col-span-1 flex justify-center items-center"></span>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Subscriptores',
  layout: 'backoffice',
  middleware: 'mustBeLogged',
  data() {
    return {
      subs: null,
    }
  },
  head() {
    return {
      title: 'Subscriptores || Rich Cova',
    }
  },
  computed: {
    ...mapState({
      galerias: (state) => state.images,
      user: (state) => state.user,
    }),
  },
  async beforeMount() {
    const userToken = this.user.token
    const response = await this.$axios.get(`/info/subs/${userToken}`)
    this.subs = response.data.data
    console.log(this.subs)
  },
  methods: {
    formatDate(date) {
      return Intl.DateTimeFormat('ES', { dateStyle: 'medium' }).format(
        new Date(date)
      )
    },
  },
}
</script>
