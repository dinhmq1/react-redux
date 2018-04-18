import axios from "axios";

export function fetchEntityForm() {
  return function(dispatch) {
    dispatch({type: "FETCH_ENTITY_FORM"});
    
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
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
