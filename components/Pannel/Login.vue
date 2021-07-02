<template>
  <form
    class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 max-w-sm mx-auto"
    @submit.prevent=""
  >
    <PannelLoginHeader />
    <div class="px-4 py-5 sm:p-6 text-left space-y-2">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">
          Usuario
        </label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <IconSolidMail class="h-5 w-5 text-gray-400" />
          </div>
          <input
            v-model="username"
            type="text"
            name="username"
            :class="
              loginValid.username === false ? 'border-red-300 text-red-900' : ''
            "
            class="block w-full px-10 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            placeholder="Usuario123"
            @blur="validate('username')"
          />
          <div
            class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
          >
            <IconSolidExclamationCircle
              v-if="loginValid.username === false"
              class="h-5 w-5 text-red-500"
            />
          </div>
        </div>
        <p
          :class="
            loginValid.username === false ? 'text-red-600' : 'text-transparent'
          "
          class="mt-2 text-sm"
        >
          El nombre necesita por lo menos 3 caracteres.
        </p>
      </div>
      <div>
        <label for="pass" class="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <div class="mt-1 relative rounded-md shadow">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <IconSolidLock class="h-5 w-5 text-gray-400" />
          </div>
          <input
            v-model="pass"
            :type="showPass ? 'text' : 'password'"
            name="pass"
            :class="
              loginValid.pass === false ? 'border-red-300 text-red-900' : ''
            "
            class="block w-full px-10 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            placeholder="password"
            @blur="validate('pass')"
          />
          <div
            class="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2"
            @click="toggleShow"
          >
            <IconSolidExclamationCircle
              v-if="loginValid.pass === false"
              class="h-5 w-5 text-red-500"
            />
            <IconSolidEye
              v-if="!showPass"
              class="h-5 w-5 text-warmGray-500 cursor-pointer"
            />
            <IconSolidNoEye
              v-else
              class="h-5 w-5 text-warmGray-400 cursor-pointer"
            />
          </div>
        </div>
        <p
          :class="
            loginValid.pass === false ? 'text-red-600' : 'text-transparent'
          "
          class="mt-2 text-sm"
        >
          Necesitas un numero, una minuscula, una mayuscula y en total 8
          caracteres.
        </p>
      </div>
      <button
        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow-lg hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
        @click="goin"
      >
        Entrar
      </button>
      <p v-if="cantLogin" class="mt-2 text-sm text-red-600">
        Hubo un problema al entrar.
      </p>
    </div>
    <div class="px-4 py-4 sm:px-6 flex justify-end">
      <nuxt-link to="/" class="text-orange-500 text-sm hover:text-orange-300">
        volver al sitio
      </nuxt-link>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      loginValid: {
        username: null,
        pass: null,
      },
      username: '',
      pass: '',
      showPass: false,
      cantLogin: false,
    }
  },
  computed: {
    isValid() {
      return this.loginValid.username && this.loginValid.pass
    },
  },
  methods: {
    ...mapActions({
      enter: 'logingIn',
    }),
    validate(key) {
      const value = key === 'pass' ? this.pass : this.username
      if (value.length >= 3) {
        this.loginValid[key] =
          key === 'pass'
            ? this.validatePass(this.pass)
            : this.validateText(this.username)
      } else {
        this.loginValid[key] = true
      }
    },
    toggleShow() {
      this.showPass = !this.showPass
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    validateText(text) {
      const re = /([A-Z]*[a-z]+)/
      return re.test(String(text).toLowerCase())
    },
    validatePass(pass) {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
      return re.test(String(pass))
    },
    async goin() {
      if (this.isValid) {
        const data = {
          username: this.username,
          password: this.pass,
          secret: 'CODIGOVIKINGO',
        }
        const response = await this.$axios.post('/pass/validate', data)
        if (response.data.status === 'success') {
          this.enter({
            token: response.data.token,
            ...response.data.user,
          })
          this.$router.push('/panel/')
        } else {
          this.cantLogin = true
        }
      } else {
        if (this.loginValid.username === null) {
          this.loginValid.username = false
        }
        if (this.loginValid.pass === null) {
          this.loginValid.pass = false
        }
      }
    },
  },
}
</script>
