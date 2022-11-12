export const state = () => ({
  metaTitle: '',
  metaDescription: '',
  metaURL: '',
  metaImage: ''
})

export const mutations = {
  setMetaTitle: (state, val) => {
    state.metaTitle = val
  },
  setMetaDescription: (state, val) => {
    state.metaDescription = val
  },
  setMetaURL: (state, val) => {
    state.metaURL = val
  },
  setMetaImage: (state, val) => {
    state.metaImage = val
  }
}

export const getters = {
  metaTitle: (state) => {
    return state.metaTitle
  },
  metaDescription: (state) => {
    return state.metaDescription
  },
  metaURL: (state) => {
    return state.metaURL
  },
  metaImage: (state) => {
    return state.metaImage
  }
}
