<template>
  <div class="home">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 max-w-sm mx-auto"
    >
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-3xl">Ingreso</h2>
      </div>
      <div class="px-4 py-5 sm:p-6 text-left space-y-2">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <div class="mt-1 relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <Icon-Solid-Mail class="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="text"
              name="email"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              id="email"
              type="text"
              name="email"
              class="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
              placeholder="you@example.com"
              value="adamwathan"
              aria-invalid="true"
              aria-describedby="email-error"
            />
            <div
              class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            >
              <!-- Heroicon name: solid/exclamation-circle -->
              <svg
                class="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <p id="email-error" class="mt-2 text-sm text-red-600">
            Your password must be less than 4 characters.
          </p>
        </div>
      </div>
      <div class="px-4 py-4 sm:px-6 text-rigth">
        <a class="text-blue-500 text-sm hover:text-blue-300" href="/">
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
