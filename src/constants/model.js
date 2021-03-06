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
  },
  locations: {
    hospital: [],
    restaurant: [],
    salon: [],
    necessities: []
  },
  region: {
    latitude: 22.6426664,
    longitude: 120.3284185,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  }
});

export const AdoptState = Immutable.fromJS({
  animals: [],
  shelters: []
});

export const SessionState = Immutable.fromJS({
  username: '',
  password: '',
  isAuthenticated: false,
  signUp: {
    failed: false,
    error: null,
    isSigningUp: false
  },
  login: {
    failed: false,
    error: null,
    isLoggingIn: false
  },
  user: {
    username: '',
    sex: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    image: '',
    id: null,
    email: '',
    birthday: null
  }
});

export const PostState = Immutable.fromJS({
  posts: [],
  post: {
    user: {
      first_name: '',
      last_name: '',
      username: '',
      image: ''
    },
    title: '',
    content: '',
    type: '',
    updated_at: ''
  },
  isFetchingPost: false
});
