import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const drinksRef = db.collection('drinks')

export const state = () => ({
  drinks: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('drinks', drinksRef)
  }),
  add: firestoreAction((context, [name, price]) => {
    if(name.trim() && price.trim()) {
      drinksRef.add({
        name: name,
        price: price,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    drinksRef.doc(id).delete()
  })
}

export const getters = {
  orderdDrinks: state => {
    return _.sortBy(state.drinks, 'created')
  }
}