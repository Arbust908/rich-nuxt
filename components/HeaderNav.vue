<template>
  <div class="relative bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Rich Cova</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="/favicon-152.svg"
              alt="Rich Cova"
            />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            aria-expanded="false"
            @click="menuOpened = !menuOpened"
          >
            <span class="sr-only">Open menu</span>
            <IconOutlineMenu class="h-6 w-6" />
          </button>
        </div>
        <NavMenu class="hidden md:flex space-x-10" />
      </div>
    </div>

    <transition
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      enter-active-class="duration-200 ease-out"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="menuOpened"
        class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="/favicon-152.svg"
                  alt="Rich Cova"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                  @click="menuOpened = !menuOpened"
                >
                  <span class="sr-only">Close menu</span>
                  <IconOutlineTimes class="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <NavMenu class="grid grid-cols-2 gap-y-4 gap-x-8" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false,
    }
  },
}
</script>
