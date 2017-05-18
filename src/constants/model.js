import Immutable from 'immutable';

export const UiState = Immutable.Map();

export const SearchState = Immutable.fromJS({
  options: {
    hospital: {
      actived: false
    },
    restaurant: {
      actived: false
    },
    salon: {
      actived: false
    },
    necessities: {
      actived: false
    }
  }
});
