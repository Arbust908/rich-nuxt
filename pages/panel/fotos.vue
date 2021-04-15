<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex">
          <h1 class="flex-1 text-2xl font-bold text-gray-900">Photos</h1>
          <div
            class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden"
          >
            <button
              type="button"
              class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <IconSolidViewList class="h-5 w-5" />
              <span class="sr-only">Use list view</span>
            </button>
            <button
              type="button"
              class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <IconSolidViewGrid class="h-5 w-5" />
              <span class="sr-only">Use grid view</span>
            </button>
          </div>
        </div>

        <!-- Tabs -->
        <div class="mt-3 sm:mt-2">
          <div class="hidden sm:block">
            <div class="flex items-center border-b border-gray-200">
              <div
                class="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex"
              >
                <button
                  type="button"
                  class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <IconSolidViewList class="h-5 w-5" />
                  <span class="sr-only">Use list view</span>
                </button>
                <button
                  type="button"
                  class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <IconSolidViewGrid class="h-5 w-5" />
                  <span class="sr-only">Use grid view</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Gallery -->
        <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
          <ul
            role="list"
            class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            <!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" -->

            <li class="relative">
              <div
                class="ring-2 ring-offset-2 ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_4985.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_4985.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.9 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixqx=eRp53t7UXB&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_5214.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_5214.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_3851.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_3851.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.8 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_4278.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_4278.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4.1 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_6842.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_6842.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixqx=eRp53t7UXB&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_3284.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_3284.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.9 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_4841.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_4841.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.8 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_5644.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_5644.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1513682322455-ea8b2d81d418?ixlib=rb-1.2.1&ixqx=eRp53t7UXB&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_4945.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_4945.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_2156.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_2156.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4.1 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1552461871-ce4f9fb3b438?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_6945.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_6945.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4.2 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1446292532430-3e76f6ab6444?ixlib=rb-1.2.1&ixqx=eRp53t7UXB&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_1846.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_1846.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.6 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_4769.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_4769.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.3 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1431512284068-4c4002298068?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_9513.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_9513.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1581320546160-0078de357255?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_8451.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_8451.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.4 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1541956628-68d338ae09d5?ixlib=rb-1.2.1&ixqx=eRp53t7UXB&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_1298.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_1298.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4.1 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1505429155379-441cc7a574f7?ixlib=rb-1.2.1&ixqx=eRp53t7UXB&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_6222.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_6222.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1582029133746-96031e5c8d00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_7451.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_7451.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.8 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1575868053350-9fd87f68f984?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_9815.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_9815.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.9 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1588391051471-1a5283d5a625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_1025.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_1025.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.9 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1575314146619-ec67b6213351?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_6010.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_6010.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.1 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1579874107960-e602329ef20a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_1004.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_1004.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                4.4 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/flagged/photo-1551385229-2925ed4eb53d?ixlib=rb-1.2.1&ixqx=eRp53t7UXB&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_8499.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_8499.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.4 MB
              </p>
            </li>

            <li class="relative">
              <div
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1498575637358-821023f27355?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                  alt=""
                  class="group-hover:opacity-75 object-cover pointer-events-none"
                />
                <button type="button" class="absolute inset-0">
                  <span class="sr-only">View details for IMG_2154.HEIC</span>
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
              >
                IMG_2154.HEIC
              </p>
              <p
                class="block text-sm font-medium text-gray-500 pointer-events-none"
              >
                3.8 MB
              </p>
            </li>
          </ul>
        </section>
      </div>
    </main>

    <!-- Details sidebar -->
    <aside
      class="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block"
    >
      <div class="pb-16 space-y-6">
        <div>
          <div
            class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
              alt=""
              class="object-cover"
            />
          </div>
          <div class="mt-4 flex items-start justify-between">
            <div>
              <h2 class="text-lg font-medium text-gray-900">
                <span class="sr-only">Details for </span>IMG_4985.HEIC
              </h2>
              <p class="text-sm font-medium text-gray-500">3.9 MB</p>
            </div>
            <button
              type="button"
              class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <!-- Heroicon name: outline/heart -->
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span class="sr-only">Favorite</span>
            </button>
          </div>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">Information</h3>
          <dl
            class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Uploaded by</dt>
              <dd class="text-gray-900">Marie Culver</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Created</dt>
              <dd class="text-gray-900">June 8, 2020</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Last modified</dt>
              <dd class="text-gray-900">June 8, 2020</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Dimensions</dt>
              <dd class="text-gray-900">4032 x 3024</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Resolution</dt>
              <dd class="text-gray-900">72 x 72</dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">Description</h3>
          <div class="mt-2 flex items-center justify-between">
            <p class="text-sm text-gray-500 italic">
              Add a description to this image.
            </p>
            <button
              type="button"
              class="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <!-- Heroicon name: solid/pencil -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                />
              </svg>
              <span class="sr-only">Add description</span>
            </button>
          </div>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">Shared with</h3>
          <ul
            class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            <li class="py-3 flex justify-between items-center">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                  alt=""
                  class="w-8 h-8 rounded-full"
                />
                <p class="ml-4 text-sm font-medium text-gray-900">
                  Aimee Douglas
                </p>
              </div>
              <button
                type="button"
                class="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Remove<span class="sr-only"> Aimee Douglas</span>
              </button>
            </li>
            <li class="py-3 flex justify-between items-center">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixqx=eRp53t7UXB&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="w-8 h-8 rounded-full"
                />
                <p class="ml-4 text-sm font-medium text-gray-900">
                  Andrea McMillan
                </p>
              </div>
              <button
                type="button"
                class="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Remove<span class="sr-only"> Andrea McMillan</span>
              </button>
            </li>
            <li class="py-2 flex justify-between items-center">
              <button
                type="button"
                class="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span
                  class="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400"
                >
                  <!-- Heroicon name: solid/plus -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span
                  class="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500"
                  >Share</span
                >
              </button>
            </li>
          </ul>
        </div>
        <div class="flex">
          <button
            type="button"
            class="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download
          </button>
          <button
            type="button"
            class="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Delete
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: 'backoffice',
}
</script>
