<template>
  <div class="home">
    <div
      class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 max-w-sm mx-auto"
    >
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-3xl text-center font-bold text-orange-700">Ingreso</h2>
      </div>
      <div class="px-4 py-5 sm:p-6 text-left space-y-2">
        <PanelInput />
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Usuario</label
          >
          <div class="mt-1 relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <IconSolidMail class="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="text"
              name="email"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
            <div
              class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            >
              <IconSolidExclamationCircle class="h-5 w-5 text-red-500" />
            </div>
          </div>
          <p id="email-error" class="mt-2 text-sm text-red-600">
            Your password must be less than 4 characters.
          </p>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Contraseña</label
          >
          <div class="mt-1 relative rounded-md shadow">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <IconSolidMail class="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="text"
              name="email"
              class="block w-full px-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
              placeholder="you@example.com"
              value="adamwathan"
              aria-invalid="true"
              aria-describedby="email-error"
            />
            <div
              class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            >
              <IconSolidExclamationCircle class="h-5 w-5 text-red-500" />
            </div>
          </div>
          <p id="email-error" class="mt-2 text-sm text-red-600">
            Your password must be less than 4 characters.
          </p>
        </div>
      </div>
      <div class="px-4 py-4 sm:px-6 flex justify-end">
        <a class="text-orange-500 text-sm hover:text-orange-300" href="/">
          volver al sitio
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  layout: 'backoffice',
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
  },
}
</script>

<style lang="sass" scoped>
.home
    @apply h-full p-8
</style>
