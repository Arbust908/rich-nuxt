<template>
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
        class="valid"
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
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Nombre',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style lang="css" scoped>
input {
  @apply block w-full px-10 sm:text-sm rounded-md;
}
input.starting {
  @apply border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none;
}
input.valid {
  @apply border-emerald-300 text-green-900 placeholder-green-300 focus:outline-none focus:ring-green-500 focus:border-green-500;
}
input.invalid {
  @apply border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500;
}
</style>
