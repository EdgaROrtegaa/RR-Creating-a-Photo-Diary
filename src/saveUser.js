import getUserByEmail from './getUserByEmail.js';

export default async function saveUser(userData) {
  const existingUser = await getUserByEmail(userData.email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Here you would typically hash the password before saving
  const user = {
    id: Date.now().toString(),
    email: userData.email,
    password: userData.password // In reality, this should be hashed
  };

  // Here you would typically save the user to a database
  console.log("User saved:", user);

  return user;
}