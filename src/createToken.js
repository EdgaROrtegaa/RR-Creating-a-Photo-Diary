export default function createToken(user) {
    // In a real application, you would use a proper JWT library
    return `token_${user.id}_${Date.now()}`;
  }