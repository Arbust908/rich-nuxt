<template>
  <div class="space-y-4">
    <ModalIconSuccess v-if="type === 'success'" class="mx-auto" />
    <ModalIconError v-if="type === 'error'" class="mx-auto" />
    <header>
      <h2 class="text-3xl font-extrabold text-gray-600 sm:text-4xl">
        {{ title }}
      </h2>
      <button class="close" @click="close">
        <IconSolidXCircle />
      </button>
    </header>
    <article>
      <ul class="overflow-y-scroll h-96 text-left">
        <li
          v-for="(policy, index) in politics"
          :key="index"
          class="leading-relaxed font-semibold mb-4"
        >
          <strong> {{ Number(index) + 1 }} </strong>
          <span>
            {{ policy }}
          </span>
        </li>
      </ul>
    </article>
    <footer class="flex justify-end items-center space-x-3">
      <button class="btn" @click="close">Cerrar</button>
      <a v-if="link" :href="link" class="btn main">Aceptar y Seguir</a>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ModalSuccess',
  computed: {
    ...mapState({
      UMS: (state) => state.UMS,
    }),
    type() {
      return this.UMS.type || null
    },
    title() {
      return this.UMS.title || null
    },
    politics() {
      return this.UMS.politics || []
    },
    link() {
      return this.UMS.link || null
    },
  },
  //   mounted() {
  //     this.autoClose()
  //   },
  methods: {
    ...mapActions({
      close: 'closeModal',
    }),
    autoClose() {
      setTimeout(() => {
        this.close()
      }, 1500)
    },
  },
}
</script>

<style scoped>
div {
  width: calc(100% - 5rem);
  max-width: 520px;
  @apply rounded bg-white shadow mx-auto my-10 py-4 relative border;
}
.close {
  @apply absolute m-2 w-6 h-6 p-1 top-0 right-0 cursor-pointer z-50;
}
.close svg {
  @apply w-full h-full;
}
.close:hover {
  @apply rounded bg-gray-300;
}
header,
article,
footer {
  @apply px-4;
}
header {
  @apply text-center text-xl font-bold;
}
article {
  @apply text-center px-6;
}
footer {
  @apply text-sm;
}

.btn {
  @apply px-4 py-2 rounded text-gray-700;
}
.btn:hover {
  @apply shadow-sm text-gray-500 bg-gray-100;
}
.btn.main {
  @apply bg-orange-600 text-white;
}
.btn.main:hover {
  @apply bg-orange-200 text-gray-700;
}
</style>
