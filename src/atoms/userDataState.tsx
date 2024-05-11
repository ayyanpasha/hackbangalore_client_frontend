import { atom } from 'recoil';

// Recoil atom for user data
export const userDataState = atom({
  key: 'userData',
  default: {
    email: 'john@domain.tldr',
    title: '',
    bio: '',
    rate: '',
    authToken: '',
    loggedIn: true
  }
});