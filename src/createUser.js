import validateUser from './validateUser.js';
import saveUser from './saveUser.js';
import createSession from './createSession.js';

export default async function createUser(userData) {
  const validationErrors = validateUser(userData);
  if (validationErrors) {
    return { errors: validationErrors };
  }

  const user = await saveUser(userData);
  const session = await createSession(user);

  return { user, session };
}