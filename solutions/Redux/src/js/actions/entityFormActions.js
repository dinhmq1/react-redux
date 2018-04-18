import axios from "axios";

export function fetchEntityForm() {

  return function(dispatch) {
    dispatch({type: "FETCH_ENTITY_FORM"});
    //axios.get("http://d7287c02.ngrok.io/api/entityforms")
    // be sure to POST some data to the below url to test
    axios.get("http://rest.learncode.academy/api/admin/entityform")
      .then((response) => {
        dispatch({type: "FETCH_ENTITY_FORM_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ENTITY_FORM_REJECTED", payload: err})
      })
  }
}

export function addEntityForm(id, text) {
  return {
    type: 'ADD_ENTITY_FORM',
    payload: {
      id,
      text,
    },
  }
}

export function updateEntityForm(id, text) {
  return {
    type: 'UPDATE_ENTITY_FORM',
    payload: {
      id,
      text,
    },
  }
}

export function deleteEntityForm(id) {
  return { type: 'DELETE_ENTITY_FORM', payload: id}
}
