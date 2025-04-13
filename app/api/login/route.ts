import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { users } from '@/app/lib/mockDb';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    'secret123',
    { expiresIn: '1h' }
  );

  return NextResponse.json({
    message: 'Login successful',
    token,
    role: user.role,
  });
}
