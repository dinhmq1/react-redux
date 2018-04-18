export default function reducer(state={
    entityForms: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ENTITY_FORM": {
        return {...state, fetching: true}
      }
      case "FETCH_ENTITY_FORM_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ENTITY_FORM_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          entityForms: action.payload,
        }
      }
      case "ADD_ENTITY_FORM": {
        return {
          ...state,
          entityForms: [...state.entityForms, action.payload],
        }
      }
      case "UPDATE_ENTITY_FORM": {
        const { id, text } = action.payload
        const newEntityForms = [...state.entityForms]
        const entityFormToUpdate = newEntityForms.findIndex(entityForms => entityForms.id === id)
        newEntityForms[entityFormToUpdate] = action.payload;

        return {
          ...state,
          entityForms: newEntityForms,
        }
      }
      case "DELETE_ENTITY_FORM": {
        return {
          ...state,
          entityForms: state.entityForms.filter(entityForms => entityForms.id !== action.payload),
        }
      }
    }

    return state
}
