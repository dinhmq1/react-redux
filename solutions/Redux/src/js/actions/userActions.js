export function fetchUser() {
    return {
      type: "FETCH_USER_FULFILLED",
      payload: {
        name: "Mike",
        role: "Manager",
      }
    }
  }
  
  export function setUserName(name) {
    return {
      type: 'SET_USER_NAME',
      payload: name,
    }
  }
  
  export function setUserRole(role) {
    return {
      type: 'SET_USER_ROLE',
      payload: role,
    }
  }
  