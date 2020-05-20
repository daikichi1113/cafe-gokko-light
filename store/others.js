import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const othersRef = db.collection('others')

export const state = () => ({
  others: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('others', othersRef)
  }),
  add: firestoreAction((context, [name, price]) => {
    if(name.trim() && price.trim()) {
      othersRef.add({
        name: name,
        price: price,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    othersRef.doc(id).delete()
  })
}

export const getters = {
  orderdOthers: state => {
    return _.sortBy(state.others, 'created')
  }
}