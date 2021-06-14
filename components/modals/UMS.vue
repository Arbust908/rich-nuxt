<template>
  <div v-if="UMS" class="UMS">
    <aside class="backdrop" @click="close"></aside>
    <ModalsGeneral v-if="UMS.template === 'General'" class="modalUniversal" />
    <ModalsPolitics
      v-else-if="UMS.template === 'Politics'"
      class="modalUniversal"
    />
    <ModalsPolitics
      v-else-if="UMS.template === 'Consults'"
      class="modalUniversal"
    />
    <ModalsGeneral v-else class="modalUniversal" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'UniversalModal',
  computed: {
    ...mapState({
      UMS: (state) => state.UMS,
    }),
  },
  methods: {
    ...mapActions({
      close: 'closeModal',
    }),
  },
}
</script>

<style scoped>
.UMS {
  @apply h-screen w-screen fixed inset-0 flex justify-center items-center z-50;
}
.backdrop {
  z-index: 900;
  animation-name: fadeIn;
  animation-duration: 1000ms;
  @apply bg-orange-600 bg-opacity-25 absolute w-full h-full;
}
.modalUniversal {
  z-index: 908;
  animation-name: popUp;
  animation-duration: 1000ms;
  @apply relative transform transition;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
}
@keyframes popUp {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  25% {
    opacity: 0;
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
