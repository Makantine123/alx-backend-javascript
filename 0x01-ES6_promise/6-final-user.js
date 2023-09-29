import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((result) => result.map((item) => ({
      status: item.status,
      value: item.status === 'fulfiled' ? item.value : String(item.reason),
    })));
}
