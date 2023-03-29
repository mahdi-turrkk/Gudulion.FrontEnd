export const state = () => ({
  cart:[],
  adminShowMode : "",
  userType : "b2b",
  profileMode : "show",
  showDonateButton : false
})

export const getters = {
  getProfileMode(state){
    return state.profileMode;
  },
  getCart(state) {
    return state.cart;
  },
  getUserType(state) {
    return state.userType;
  },
  getAdminShowMode(state) {
    return state.adminShowMode;
  },
  getShowDonationButton(state){
    return state.showDonateButton;
  }
}
export const mutations = {
  setCart(state, payload) {
    state.cart = payload;
  },
  setUserType(state,payload){
    state.userType= payload;
  },
  setProfileMode(state , payload){
    state.profileMode = payload;
  },
  setAdminShowMode(state , payload){
    state.adminShowMode = payload;
  },
  setShowDonationButton(state , payload) {
    state.showDonateButton = payload
  }
}

export const actions = {
  setCart(context, payload) {
    context.commit('setCart', payload);
  },
  setUserType(context,payload){
    context.commit('setUserType', payload);
  },
  setProfileMode(context,payload){
    context.commit('setProfileMode', payload);
  },
  setAdminShowMode(context,payload){
    context.commit('setAdminShowMode', payload);
  },
  setShowDonationButton(context,payload) {
    context.commit("setShowDonationButton", payload);
  }
}
