export default function ({ store, redirect }) {
  if (!store.getters.isAuthenticated || !store.getters.isAdmin) {
    return redirect('/login')
  }
}
