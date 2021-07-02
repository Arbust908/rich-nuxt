export const state = () => ({
  changing_image: {
    heroSrc: null,
    fileName: 'archivo.jpg',
    title: 'Imagen no seleccionada',
  },
})

export const getters = {}

export const actions = {
  changeImage({ commit }, imageContext) {
    commit('IMAGE_CONTEXT', imageContext)
  },
}

export const mutations = {
  IMAGE_CONTEXT(state, imgCtx) {
    state.changing_image = imgCtx
  },
}
