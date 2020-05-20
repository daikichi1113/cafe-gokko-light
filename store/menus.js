import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const menusRef = db.collection('menus')

export const state = () => ({
  menus: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('menus', menusRef)
  }),
  add: firestoreAction((context, [name, price]) => {
    if(name.trim() && price.trim()) {
      menusRef.add({
        name: name,
        price: price,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    menusRef.doc(id).delete()
  })
}

export const getters = {
  orderdMenus: state => {
    return _.sortBy(state.menus, 'created')
  }
}