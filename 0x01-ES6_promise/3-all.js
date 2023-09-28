import uploadPhoto from "./utils";
import createUser from "./utils";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(() => {})
    .catch(() => {})
}
