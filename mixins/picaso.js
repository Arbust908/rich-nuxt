export default {
  methods: {
    getApiImage(imageName) {
      return `${this.$config.baseURL}imgs/${imageName}`
    },
  },
}
