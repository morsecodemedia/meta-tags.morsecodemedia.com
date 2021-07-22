export const state = () => ({
  metaTitle: '',
  metaDescription: '',
  metaURL: ''
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
  }
}
