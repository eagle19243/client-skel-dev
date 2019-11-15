import { store } from 'react-easy-state'

const AppState = store({
  user: null,             // set by SiteNav.componentDidMount()
  isAuthenticated: false, // set by SiteNav.componentDidMount()
  history: null,          // set by SiteNav.componentDidMount()
  showAlertBanner: null,  // set by AlertBanner.constructor()
  hideAlertBanner: null,  // set by AlertBanner.constructor()
  resetAlertBanner: null,
  showSingUpConfirmation: false,
  set_prop(key, val){
    console.log('AppState - setting', key, '=', val)
    AppState[key] = val;
  }
})

export default AppState