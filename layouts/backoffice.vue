<template>
  <div class="h-screen bg-orange-50 flex overflow-hidden">
    <!-- Narrow sidebar -->
    <div class="hidden w-28 bg-orange-700 overflow-y-auto md:block">
      <div class="w-full py-6 flex flex-col items-center">
        <div class="flex-shrink-0 flex items-center">
          <Logo class="w-12 h-12 text-orange-50" />
        </div>
        <div class="flex-1 mt-6 w-full px-2 space-y-1">
          <!-- Current: "bg-orange-800 text-white", Default: "group text-orange-100 hover:bg-orange-800 hover:text-white" -->
          <SideMenuLink title="Home">
            <template #icon>
              <IconOutlineHome
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </SideMenuLink>
          <SideMenuLink title="All Files">
            <template #icon>
              <IconOutlineViewGrid
                class="text-orange-300 group-hover:text-white h-6 w-6"
              />
            </template>
          </SideMenuLink>
          <!-- class="bg-orange-800 text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" -->
          <a
            href="#"
            class="bg-orange-800 text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
            aria-current="page"
          >
            <!-- Current: "text-white", Default: "text-orange-300 group-hover:text-white" -->
            <!-- Heroicon name: outline/photograph -->
            <svg
              class="text-white h-6 w-6"
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="mt-2">Photos</span>
          </a>

          <a
            href="#"
            class="group text-orange-100 hover:bg-orange-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
            aria-current="page"
          >
            <!-- Heroicon name: outline/user-group -->
            <svg
              class="text-orange-300 group-hover:text-white h-6 w-6"
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="mt-2">Shared</span>
          </a>

          <a
            href="#"
            class="group text-orange-100 hover:bg-orange-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
            aria-current="page"
          >
            <!-- Heroicon name: outline/collection -->
            <svg
              class="text-orange-300 group-hover:text-white h-6 w-6"
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span class="mt-2">Albums</span>
          </a>

          <a
            href="#"
            class="group text-orange-100 hover:bg-orange-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
            aria-current="page"
          >
            <!-- Heroicon name: outline/cog -->
            <svg
              class="text-orange-300 group-hover:text-white h-6 w-6"
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="mt-2">Settings</span>
          </a>
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
                <svg
                  class="h-6 w-6 text-white"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span class="sr-only">Close sidebar</span>
              </button>
            </div>
            <div class="flex-shrink-0 px-4 flex items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt="Workflow"
              />
            </div>
            <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
              <nav class="h-full flex flex-col">
                <div class="space-y-1">
                  <!-- Current: "bg-orange-800 text-white", Default: "group text-orange-100 hover:bg-orange-800 hover:text-white" -->

                  <a
                    href="#"
                    class="group text-orange-100 hover:bg-orange-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                  >
                    <!-- Heroicon name: outline/home -->
                    <svg
                      class="text-orange-300 group-hover:text-white mr-3 h-6 w-6"
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span>Home</span>
                  </a>

                  <a
                    href="#"
                    class="group text-orange-100 hover:bg-orange-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                  >
                    <!-- Heroicon name: outline/view-grid -->
                    <svg
                      class="text-orange-300 group-hover:text-white mr-3 h-6 w-6"
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span>All Files</span>
                  </a>

                  <a
                    href="#"
                    class="bg-orange-800 text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                    aria-current="page"
                  >
                    <!-- Current: "text-white", Default: "text-orange-300 group-hover:text-white" -->
                    <!-- Heroicon name: outline/photograph -->
                    <svg
                      class="text-white mr-3 h-6 w-6"
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Photos</span>
                  </a>

                  <a
                    href="#"
                    class="group text-orange-100 hover:bg-orange-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                  >
                    <!-- Heroicon name: outline/user-group -->
                    <svg
                      class="text-orange-300 group-hover:text-white mr-3 h-6 w-6"
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Shared</span>
                  </a>

                  <a
                    href="#"
                    class="group text-orange-100 hover:bg-orange-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                  >
                    <!-- Heroicon name: outline/collection -->
                    <svg
                      class="text-orange-300 group-hover:text-white mr-3 h-6 w-6"
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
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <span>Albums</span>
                  </a>

                  <a
                    href="#"
                    class="group text-orange-100 hover:bg-orange-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
                  >
                    <!-- Heroicon name: outline/cog -->
                    <svg
                      class="text-orange-300 group-hover:text-white mr-3 h-6 w-6"
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Settings</span>
                  </a>
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
                    <picture class="p-1 rounded-full bg-orange-100">
                      <img
                        class="h-5 w-auto sm:h-10"
                        src="/favicon-152.svg"
                        alt="Rich Cova"
                      />
                    </picture>
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
export default {
  data() {
    return {
      openMenu: false,
      openProfile: false,
      isLogged: false,
    }
  },
}
</script>
