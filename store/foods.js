import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const foodsRef = db.collection('foods')

export const state = () => ({
  foods: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('foods', foodsRef)
  }),
  add: firestoreAction((context, [name, price]) => {
    if(name.trim() && price.trim()) {
      foodsRef.add({
        name: name,
        price: price,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    foodsRef.doc(id).delete()
  })
}

export const getters = {
  orderdFoods: state => {
    return _.sortBy(state.foods, 'created')
  }
}