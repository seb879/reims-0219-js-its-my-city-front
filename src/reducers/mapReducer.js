const initialState = {
  zoom: 14,
  geolocCoordonnees: [],
  defaultCoordonnees: [49.260096, 4.030293],
  customCoordonnes: [0, 0],
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRENT_POSITION':
      return {
        ...state,
        geolocCoordonnees: action.geolocCoordonnees,
      };
    case 'ADD_CUSTOM_MARKER':
      return {
        ...state,
        customCoordonnes: action.customCoordonnes,
      };
    case 'CLOSE_PAGE':
      return {
        ...state,
        customCoordonnes: [0, 0],
      };
    default:
      return state;
  }
};

export default mapReducer;
