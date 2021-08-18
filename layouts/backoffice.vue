<template>
  <div class="h-screen bg-orange-50 flex overflow-hidden">
    <ModalsUMS />
    <!-- Narrow sidebar -->
    <div class="hidden w-28 bg-orange-700 overflow-y-auto md:block">
      <div class="w-full py-6 flex flex-col items-center">
        <div class="flex-shrink-0 flex items-center">
          <Logo class="w-12 h-12 text-orange-50" />
        </div>
        <div v-if="isLogged" class="flex-1 mt-6 w-full px-2 space-y-1">
          <PannelSideBtn links="/" name="Sitio">
            <template #icon>
              <IconOutlineWeb
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </PannelSideBtn>
          <PannelSideBtn links="/panel" name="Inicio">
            <template #icon>
              <IconOutlineHome
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </PannelSideBtn>
          <PannelSideBtn links="/panel/hero" name="Cabezera">
            <template #icon>
              <IconOutlineCollection
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </PannelSideBtn>
          <PannelSideBtn links="/panel/fotos" name="Fotos">
            <template #icon>
              <IconOutlinePhotos
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </PannelSideBtn>
          <PannelSideBtn links="/panel/redes-sociales" name="Redes">
            <template #icon>
              <IconOutlineUserGroup
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </PannelSideBtn>
          <PannelSideBtn links="/panel/politicas" name="Politicas">
            <template #icon>
              <IconOutlineClipboardList
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </PannelSideBtn>
          <PannelSideBtn links="/panel/subs" name="Subscriptores">
            <template #icon>
              <IconOutlineAtSymbol
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </PannelSideBtn>
          <!-- <PannelSideBtn links="/panel/edit" name="Editar Fotos">
            <template #icon>
              <IconOutlineClipboardList
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </PannelSideBtn> -->
          <!-- <PannelSideBtn links="/panel/ajustes" name="Ajustes">
            <template #icon>
              <IconOutlineCog
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </PannelSideBtn> -->
        </div>
      </div>
    </div>

    <div class="md:hidden">
      <transition
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition-opacity ease-linear duration-300"
        leave-active-class="transition-opacity ease-linear duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="openMenu" class="fixed inset-0 z-40 flex">
          <div class="fixed inset-0" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          <div
            class="relative max-w-xs w-full bg-orange-700 pt-5 pb-4 flex-1 flex flex-col"
          >
            <div class="absolute top-1 right-0 -mr-14 p-1">
              <button
                class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                @click="openMenu = !openMenu"
              >
                <!-- Heroicon name: outline/x -->
                <IconOutlineTimes class="h-6 w-6 text-white" />
                <span class="sr-only">Close sidebar</span>
              </button>
            </div>
            <div class="flex-shrink-0 px-4 flex items-center">
              <Logo class="w-12 h-12 text-orange-50" />
            </div>
            <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
              <nav class="h-full flex flex-col">
                <div v-if="isLogged" class="space-y-1">
                  <PannelSideBtnMobile links="/" name="Sitio">
                    <template #icon>
                      <IconOutlineHome
                        class="text-orange-300 group-hover:text-white h-6 w-6"
                      />
                    </template>
                  </PannelSideBtnMobile>
                  <PannelSideBtnMobile links="/panel/" name="Inicio">
                    <template #icon>
                      <IconOutlineHome
                        class="text-orange-300 group-hover:text-white h-6 w-6"
                      />
                    </template>
                  </PannelSideBtnMobile>
                  <PannelSideBtnMobile links="/panel/hero" name="Cabezera">
                    <template #icon>
                      <IconOutlineCollection
                        class="text-orange-300 group-hover:text-white h-6 w-6"
                      />
                    </template>
                  </PannelSideBtnMobile>
                  <PannelSideBtnMobile links="/panel/fotos" name="Fotos">
                    <template #icon>
                      <IconOutlinePhotos
                        class="text-orange-300 group-hover:text-white h-6 w-6"
                      />
                    </template>
                  </PannelSideBtnMobile>
                  <PannelSideBtnMobile
                    links="/panel/redes-sociales"
                    name="Redes"
                  >
                    <template #icon>
                      <IconOutlineUserGroup
                        class="text-orange-300 group-hover:text-white h-6 w-6"
                      />
                    </template>
                  </PannelSideBtnMobile>
                  <PannelSideBtnMobile
                    links="/panel/politicas"
                    name="Politicas"
                  >
                    <template #icon>
                      <IconOutlineCollection
                        class="text-orange-300 group-hover:text-white h-6 w-6"
                      />
                    </template>
                  </PannelSideBtnMobile>
                  <PannelSideBtnMobile links="/panel/subs" name="Subscriptores">
                    <template #icon>
                      <IconOutlineAtSymbol
                        class="text-orange-300 group-hover:text-white h-6 w-6"
                      />
                    </template>
                  </PannelSideBtnMobile>
                  <!-- <PannelSideBtnMobile links="/panel/edit" name="Editar Fotos">
                    <template #icon>
                      <IconOutlineClipboardList
                        class="text-orange-300 group-hover:text-white h-6 w-6"
                      />
                    </template>
                  </PannelSideBtnMobile> -->
                  <!-- <PannelSideBtnMobile links="/panel/ajustes" name="Ajustes">
                    <template #icon>
                      <IconOutlineCog
                        class="text-orange-300 group-hover:text-white h-6 w-6"
                      />
                    </template>
                  </PannelSideBtnMobile> -->
                </div>
              </nav>
            </div>
          </div>
          <div class="flex-shrink-0 w-14" aria-hidden="true" dummy></div>
        </div>
      </transition>
    </div>

    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="w-full">
        <div
          class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex"
        >
          <button
            class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 md:hidden"
            @click="openMenu = !openMenu"
          >
            <span class="sr-only">Open sidebar</span>
            <!-- Heroicon name: outline/menu-alt-2 -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div class="flex-1 flex justify-between px-4 sm:px-6">
            <div class="flex-1 flex"></div>
            <div
              v-if="isLogged"
              class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6"
            >
              <!-- Profile dropdown -->
              <div class="relative flex-shrink-0">
                <div>
                  <button
                    id="user-menu"
                    type="button"
                    class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-auto"
                    aria-expanded="false"
                    aria-haspopup="true"
                    @click="openProfile = !openProfile"
                  >
                    <span class="sr-only">Open user menu</span>
                    <div
                      class="py-1 px-5 rounded-lg bg-orange-100 font-bold text-sm"
                    >
                      <span>{{ user.username }}</span>
                    </div>
                    <!-- <picture class="p-1 rounded-full bg-orange-100">
                      <img
                        class="h-5 w-auto sm:h-10"
                        src="/favicon-152.svg"
                        alt="Rich Cova"
                      />
                    </picture> -->
                  </button>
                </div>

                <transition
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  enter-active-class="transition ease-out duration-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <nav
                    v-if="openProfile"
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      >Salir</a
                    >
                  </nav>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      openMenu: false,
      openProfile: false,
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
    isLogged() {
      return this.user && this.user.id
    },
  },
}
</script>
