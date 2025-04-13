import { users } from '@/app/lib/mockDb';
import { NextResponse } from 'next/server';
// import { users } from '@/lib/mockDb';

export async function POST(req: Request) {
  const { email, password, role } = await req.json();

  if (!email || !password || !role) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  const exists = users.find(u => u.email === email);
  if (exists) {
    return NextResponse.json({ message: 'User already exists' }, { status: 409 });
  }

  // Add user to mock DB
  users.push({ email, password, role });

  return NextResponse.json({ message: 'Signup successful' }, { status: 201 });
}
