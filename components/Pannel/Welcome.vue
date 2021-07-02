<template>
  <div class="bg-white h-full overflow-y-auto">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          :src="getApiImage(welcomeImg())"
          alt=""
        />
        <div
          class="absolute inset-0 bg-orange-800 opacity-80"
          aria-hidden="true"
        />
      </div>
      <div
        class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <h1
          class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Administrador
        </h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">
          Este es tu panel de administracion, te va a permitir cambiar cosas
          como los links a tus redes, las fotos del sitio y hasta el banner
          inicial.
        </p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section
      class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" class="sr-only">Acciones</h2>
      <div
        class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8"
      >
        <div
          v-for="link in supportLinks"
          :key="link.name"
          class="flex flex-col bg-white rounded-2xl shadow-xl"
        >
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div
              class="absolute top-0 p-5 inline-block bg-orange-600 rounded-xl shadow-lg transform -translate-y-1/2"
            >
              <component
                :is="link.icon"
                class="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-xl font-medium text-warmGray-700">
              {{ link.name }}
            </h3>
            <p class="mt-4 text-base text-warmGray-500">
              {{ link.description }}
            </p>
          </div>
          <div class="p-6 bg-orange-100 rounded-bl-2xl rounded-br-2xl md:px-8">
            <nuxt-link
              :to="link.href"
              class="text-base font-medium text-warmGray-700 hover:text-orange-600 transition duration-150 ease-in-out"
            >
              Ver Mas
              <span aria-hidden="true"> &rarr;</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import IconOutlinePhotos from '@/components/Icon/Outline/Photos.vue'
import IconOutlineUserGroup from '@/components/Icon/Outline/UserGroup.vue'
import IconOutlineClipboardList from '@/components/Icon/Outline/ClipboardList.vue'
import picaso from '@/mixins/picaso'
const supportLinks = [
  {
    name: 'Fotos',
    href: '/panel/fotos',
    description:
      'Estas son las 3 fotos que se ven en la pagina. Pueden ser cambiadas en cualquier momento como asi su texto acompañador.',
    icon: IconOutlinePhotos,
  },
  {
    name: 'Redes',
    href: '/panel/redes-sociales',
    description:
      'Vamos a ver los links de las redes y sitios externos. Cambiandolos, todos los links en el sitio se actualizan.',
    icon: IconOutlineUserGroup,
  },
  {
    name: 'Politicas',
    href: '/panel/politicas',
    description:
      'Aca se van a ver las Politicas que se ven antes de la turnera. Se pueden editar y no tienen limites de largo.',
    icon: IconOutlineClipboardList,
  },
]

export default {
  mixins: [picaso],
  data() {
    return {
      supportLinks,
    }
  },
  methods: {
    welcomeImg() {
      const num = Math.floor(Math.random() * 4) + 1
      return `welcome(${num}).jpg`
    },
  },
}
</script>
