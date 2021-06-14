<template>
  <div class="space-y-4">
    <ModalsIconSuccess v-if="type === 'success'" class="mx-auto" />
    <ModalsIconError v-if="type === 'error'" class="mx-auto" />
    <header>
      <h2>{{ title }}</h2>
      <button class="close" @click="close">
        <IconSolidXCircle />
      </button>
    </header>
    <article>{{ message }}</article>
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
    message() {
      return this.UMS.message || null
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
</style>
