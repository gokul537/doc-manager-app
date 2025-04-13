// ✅ CORRECT
import { users } from '../../../lib/mockDb';
import { NextRequest, NextResponse } from 'next/server';


export async function GET() {
  // Optionally, check for token and role here
  return NextResponse.json({ users });
}


export async function PATCH(req: NextRequest) {
  const { email, role } = await req.json();

  const user = users.find(u => u.email === email);
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  user.role = role;
  return NextResponse.json({ message: 'Role updated' });
}

export async function DELETE(req: NextRequest) {
  const { email } = await req.json();
  const index = users.findIndex(u => u.email === email);

  if (index === -1) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  users.splice(index, 1);
  return NextResponse.json({ message: 'User deleted' });
}