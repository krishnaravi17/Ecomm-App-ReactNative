// services/AuthService.ts
const baseUrl = 'https://fakestoreapi.com';

export const AuthService = {

  login: async (username: string, password: string) => {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error(`Status: ${response.status}`);
    return await response.json();
  },

};
