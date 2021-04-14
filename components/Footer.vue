<template>
  <footer class="bg-orange-50">
    <div class="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
      <!-- <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-orange-600">
            About
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-orange-600">
            Blog
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-orange-600">
            Jobs
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-orange-600">
            Press
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-orange-600">
            Accessibility
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-orange-600">
            Partners
          </a>
        </div>
      </nav> -->
      <div id="redes" class="flex justify-center space-x-6">
        <SocialLink
          link="https://youtube.com/channel/UCGn0RPDob9Ohaux-xUIAbog"
          name="YouTube"
        >
          <template #icon>
            <IconYouTube class="w-5 h-5" />
          </template>
        </SocialLink>
        <SocialLink link="https://www.instagram.com/richcova/" name="Insagram">
          <template #icon>
            <IconInstagram class="w-5 h-5" />
          </template>
        </SocialLink>
        <SocialLink link="https://m.facebook.com/richcovaok/" name="FaceBook">
          <template #icon>
            <IconFacebook class="w-5 h-5" />
          </template>
        </SocialLink>
        <SocialLink
          link="https://richtiendashop.mitiendanube.com/"
          name="Tienda"
        >
          <template #icon>
            <IconShoppingCart class="w-5 h-5" />
          </template>
        </SocialLink>
        <SocialLink
          link="https://mobile.wonoma.com/#/centro/564"
          name="Turnera"
        >
          <template #icon>
            <IconCalendarDay class="w-5 h-5" />
          </template>
        </SocialLink>
      </div>
    </div>
  </footer>
</template>
