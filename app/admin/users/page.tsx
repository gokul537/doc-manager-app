'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

type User = {
  email: string;
  role: 'admin' | 'user';
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/user');
        const data = await res.json();

        if (res.ok) {
          setUsers(data.users);
        } else {
          setError(data.message || 'Failed to fetch users');
        }
      } catch {
        setError('Something went wrong');
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (index: number, newRole: string) => {
    const updated = [...users];
    updated[index].role = newRole as 'admin' | 'user';
    setUsers(updated);

    try {
      const res = await fetch('/api/admin/user', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: updated[index].email, role: newRole }),
      });

      if (res.ok) {
        toast.success('Role updated');
      } else {
        toast.error('Failed to update role');
      }
    } catch {
      toast.error('Error updating role');
    }
  };

  const handleDelete = async (email: string) => {
    try {
      const res = await fetch('/api/admin/user', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setUsers(users.filter((u) => u.email !== email));
        toast.success('User deleted');
      } else {
        toast.error('Delete failed');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="p-4 md:p-6">
      <Toaster position="top-right" />
      <motion.h1
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Admin: Manage Users
      </motion.h1>

      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      <div className="overflow-x-auto">
        <motion.table
          className="min-w-full border border-gray-200 rounded-md shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">Email</th>
              <th className="text-left p-3 border-b">Role</th>
              <th className="text-left p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <motion.tr
                key={i}
                whileHover={{ scale: 1.01 }}
                className="transition"
              >
                <td className="p-3 border-b">{u.email}</td>
                <td className="p-3 border-b">
                  <select
                    value={u.role}
                    onChange={(e) => handleRoleChange(i, e.target.value)}
                    className="border rounded px-2 py-1 w-full outline-none"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-3 border-b">
                  <button
                    onClick={() => handleDelete(u.email)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
}
