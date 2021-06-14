<template>
  <div>
    <HeaderNav />
    <Hero />
    <Galerie />
    <Testimonies />
    <MailCTA />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  async fetch() {
    await this.fetchInfo('/info/policies/', 'policies')
    await this.fetchInfo('/info/social/', 'social')
    await this.fetchInfo('/info/images/', 'images')
    await this.fetchInfo('/info/hero/', 'hero')
  },
  methods: {
    ...mapActions({
      setKey: 'setKey',
    }),
    async fetchInfo(url, key) {
      const fetched = await this.$axios.get(url)
      this.setKey({ key, data: fetched.data.data })
    },
  },
}
</script>
