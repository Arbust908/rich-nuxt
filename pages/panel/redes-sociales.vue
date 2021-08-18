<template>
  <form
    class="space-y-8 divide-y divide-gray-200 pt-8 max-w-xl px-4 sm:px-8 lg:px-12"
  >
    <div class="">
      <div class="space-y-3">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Redes Sociales
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-y-6 gap-x-4">
          <div class="">
            <label
              for="facebook"
              class="block text-sm font-medium text-gray-700"
            >
              Facebook
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                https://facebook.com/
              </span>
              <input
                id="facebook"
                v-model="socials.facebook"
                type="text"
                name="facebook"
                class="flex-1 focus:ring-orange-500 focus:border-orange-500 block w-full min-w-0 sm:text-sm border-gray-300 border-l-0 border-r-0"
              />
              <span
                class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                <IconFacebook class="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-1 gap-y-6 gap-x-4">
          <div class="">
            <label
              for="instagram"
              class="block text-sm font-medium text-gray-700"
            >
              Instagram
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                https://instagram.com/
              </span>
              <input
                id="instagram"
                v-model="socials.instagram"
                type="text"
                name="instagram"
                class="flex-1 focus:ring-orange-500 focus:border-orange-500 block w-full min-w-0 sm:text-sm border-gray-300 border-l-0 border-r-0"
              />
              <span
                class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                <IconInstagram class="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-1 gap-y-6 gap-x-4">
          <div class="">
            <label
              for="youtube"
              class="block text-sm font-medium text-gray-700"
            >
              Youtube
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                https://youtube.com/channel/
              </span>
              <input
                id="youtube"
                v-model="socials.youtube"
                type="text"
                name="youtube"
                class="flex-1 focus:ring-orange-500 focus:border-orange-500 block w-full min-w-0 sm:text-sm border-gray-300 border-l-0 border-r-0"
              />
              <span
                class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                <IconYouTube class="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-1 gap-y-6 gap-x-4">
          <div class="">
            <label for="tienda" class="block text-sm font-medium text-gray-700">
              Tienda
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                https://
              </span>
              <input
                id="tienda"
                v-model="socials.tienda"
                type="text"
                name="tienda"
                class="flex-1 focus:ring-orange-500 focus:border-orange-500 block w-full min-w-0 sm:text-sm border-gray-300 border-l-0 border-r-0"
              />
              <span
                class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                <IconShoppingCart class="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-1 gap-y-6 gap-x-4">
          <div class="">
            <label
              for="turnera"
              class="block text-sm font-medium text-gray-700"
            >
              Turnera
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                https://
              </span>
              <input
                id="turnera"
                v-model="socials.turnera"
                type="text"
                name="turnera"
                class="flex-1 focus:ring-orange-500 focus:border-orange-500 block w-full min-w-0 sm:text-sm border-gray-300 border-l-0 border-r-0"
              />
              <span
                class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                <IconCalendarDay class="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-1 gap-y-6 gap-x-4">
          <div class="">
            <label
              for="whatsapp"
              class="block text-sm font-medium text-gray-700"
            >
              Whatsapp
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <input
                id="whatsapp"
                v-model="socials.whatsapp"
                :this="socials.whatsapp"
                type="text"
                name="whatsapp"
                class="flex-1 focus:ring-orange-500 focus:border-orange-500 block w-full min-w-0 sm:text-sm border-gray-300 rounded-l-md border-r-0"
              />
              <span
                class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                <IconWhatsapp class="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
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
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RedesSociales',
  layout: 'backoffice',
  middleware: 'mustBeLogged',
  data() {
    return {
      socials: {
        facebook: 'richcovaok/',
        instagram: 'richcova/',
        youtube: 'UCGn0RPDob9Ohaux-xUIAbog',
        tienda: 'richtiendashop.mitiendanube.com/',
        turnera: 'mobile.wonoma.com/#/centro/564',
        whatsapp: '5491138766488',
      },
    }
  },
  head() {
    return {
      title: 'Redes Sociales || Rich Cova',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Panel de administraciond e contenido',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  async beforeMount() {
    const response = await this.$axios.get(`/info/social/`)
    const newSocials = this.detunggleSocials(
      response.data.data || response.data
    )
    this.socials = newSocials
  },
  methods: {
    async save() {
      this.finishingSlash(this.socials)
      const formatedData = {
        facebook: `https://facebook.com/${this.socials.facebook}`,
        instagram: `https://instagram.com/${this.socials.instagram}`,
        youtube: `https://youtube.com/channel/${this.socials.youtube}`,
        tienda: `https://${this.socials.tienda}`,
        turnera: `https://${this.socials.turnera}`,
        whatsapp: `https://wa.me/${this.socials.whatsapp}?text=Hola%20Rich%20tengo%20una%20Constula!`,
      }
      const userToken = this.user.token
      const response = await this.$axios.patch(
        `/info/social/${userToken}`,
        formatedData
      )
      if (response.data.status === 'success') {
        this.openSuccess(`Las ${this.socials.length} Redes se guardaron bien!.`)
        // this.$router.push('/panel/fotos')
      } else {
        this.openSuccess(
          `Hubo un error guardando las Redes. Proba recargando el sitio.`
        )
      }
    },
    finishingSlash(socialObj) {
      for (const social in socialObj) {
        if (Object.hasOwnProperty.call(socialObj, social)) {
          let url = socialObj[social]
          if (!url.endsWith('/')) {
            url += '/'
          }
          socialObj[social] = url
        }
      }
    },
    detunggleSocials(socialObj) {
      for (const social in socialObj) {
        if (Object.hasOwnProperty.call(socialObj, social)) {
          let url = socialObj[social]
          let spliter = ''
          switch (social) {
            case 'facebook':
              spliter = 'https://facebook.com/'
              break
            case 'instagram':
              spliter = 'https://instagram.com/'
              break
            case 'youtube':
              spliter = 'https://youtube.com/channel/'
              break
            case 'whatsapp':
              spliter = 'https://wa.me/'
              break
            case 'tienda':
            case 'turnera':
              spliter = 'https://'
              break
          }
          url = url.split(spliter)[1]
          if (social === 'whatsapp') {
            url = url.split('?text=')[0]
          }
          socialObj[social] = url
        }
      }
      return socialObj
    },
  },
}
</script>
