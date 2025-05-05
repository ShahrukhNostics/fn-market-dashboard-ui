import React, { useState } from "react";
import {
  useGetUsers,
  useCreateUser,
  useUpdateUser,
  useDeleteUser,
} from "../features/users/hooks/useUsers";
import { User } from "../types/user";
import Button from "../components/Button/Button";

const UsersPage: React.FC = () => {
  const { data: users, isLoading, error, isError } = useGetUsers();
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();

  // State for new user form
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  // State for editing user
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Handle form submission for creating a user
  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    createUserMutation.mutate(newUser, {
      onSuccess: () => {
        setNewUser({ name: "", email: "" }); // Reset form
      },
      onError: (error: Error) => {
        console.error("Error creating user:", error);
      },
    });
  };

  // Handle form submission for updating a user
  const handleUpdateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      updateUserMutation.mutate(
        {
          id: editingUser.id,
          updatedUser: { name: editingUser.name, email: editingUser.email },
        },
        {
          onSuccess: () => {
            setEditingUser(null); // Exit edit mode
          },
          onError: (error: Error) => {
            console.error("Error updating user:", error);
          },
        }
      );
    }
  };

  // Handle delete user
  const handleDeleteUser = (id: number) => {
    deleteUserMutation.mutate(id, {
      onError: (error: Error) => {
        console.error("Error deleting user:", error);
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>

      {/* Create User Form */}
      <form onSubmit={handleCreateUser} className="mb-6">
        <h2 className="text-xl mb-2">Add New User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2"
          disabled={createUserMutation.isPending}
        >
          {createUserMutation.isPending ? "Creating..." : "Create User"}
        </button>
      </form>

      {/* Edit User Form */}
      {editingUser && (
        <form onSubmit={handleUpdateUser} className="mb-6">
          <h2 className="text-xl mb-2">Edit User</h2>
          <input
            type="text"
            value={editingUser.name}
            onChange={(e) =>
              setEditingUser({ ...editingUser, name: e.target.value })
            }
            className="border p-2 mr-2"
            required
          />
          <input
            type="email"
            value={editingUser.email}
            onChange={(e) =>
              setEditingUser({ ...editingUser, email: e.target.value })
            }
            className="border p-2 mr-2"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 mr-2"
            disabled={updateUserMutation.isPending}
          >
            {updateUserMutation.isPending ? "Updating..." : "Update User"}
          </button>
          <button
            type="button"
            onClick={() => setEditingUser(null)}
            className="bg-gray-500 text-white p-2"
          >
            Cancel
          </button>
        </form>
      )}

      {/* Users List */}
      <ul>
        {users?.map((user: User) => (
          <li key={user.id} className="border p-2 mb-2 flex justify-between">
            <div>
              <p>
                <strong>{user.name}</strong> ({user.email})
              </p>
              <p>Username: {user.username}</p>
            </div>
            <div>
              <button
                onClick={() => setEditingUser(user)}
                className="bg-yellow-500 text-white p-1 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="bg-red-500 text-white p-1"
                disabled={deleteUserMutation.isPending}
              >
                {deleteUserMutation.isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      {/* <Button variant="custom">Custom</Button> */}
    </div>
  );
};

export default UsersPage;
