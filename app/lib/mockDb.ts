// lib/mockDb.ts

export const users: { email: string; password: string; role: 'admin' | 'user' }[] = [
    {
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
    },
    {
      email: 'user@example.com',
      password: 'user123',
      role: 'user',
    },
  ];
  