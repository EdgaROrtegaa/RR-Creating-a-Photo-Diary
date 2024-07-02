import createToken from './createToken.js';

export default async function createSession(user) {
  const token = createToken(user);
  const session = {
    id: Date.now().toString(),
    userId: user.id,
    token
  };

  // Here you would typically save the session to a database
  console.log("Session created:", session);

  return session;
}