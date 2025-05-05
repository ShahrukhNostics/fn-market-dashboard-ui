import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUsers, createUser, updateUser, deleteUser } from '../services/userApi';
import { User } from '../../../types/user';

// Hook to fetch all users
export const useGetUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: getUsers,
    refetchOnWindowFocus: false,
  });
};

// Hook to create a new user
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation<User, Error, { name: string; email: string }>({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate the users query to refresh the list
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

// Hook to update an existing user with optimistic update
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  // Define context type
  type UpdateContext = { previousUsers: User[] | undefined };
  return useMutation<
    User,
    Error,
    { id: number; updatedUser: { name: string; email: string } },
    UpdateContext
  >({
    mutationFn: ({ id, updatedUser }) => updateUser(id, updatedUser),
    // Optimistic update
    onMutate: async ({ id, updatedUser }) => {
      // Cancel any outgoing refetches to avoid overwriting optimistic update
      await queryClient.cancelQueries({ queryKey: ['users'] });

      // Snapshot the previous users data
      const previousUsers = queryClient.getQueryData<User[]>(['users']) || [];

      // Optimistically update the user in the cache
      queryClient.setQueryData<User[]>(['users'], (oldUsers = []) =>
        oldUsers.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        )
      );

      // Return context with previous users for rollback on error
      return { previousUsers };
    },
    // Revert to previous state on error
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(['users'], context?.previousUsers);
    },
    // Invalidate or refetch after mutation settles
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

// Hook to delete a user with optimistic update
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  // Define context type
  type DeleteContext = { previousUsers: User[] | undefined };
  return useMutation<void, Error, number, DeleteContext>({
    mutationFn: deleteUser,
    // Optimistic update
    onMutate: async (id) => {
      // Cancel any outgoing refetches to avoid overwriting optimistic update
      await queryClient.cancelQueries({ queryKey: ['users'] });

      // Snapshot the previous users data
      const previousUsers = queryClient.getQueryData<User[]>(['users']) || [];

      // Optimistically remove the user from the cache
      queryClient.setQueryData<User[]>(['users'], (oldUsers = []) =>
        oldUsers.filter((user) => user.id !== id)
      );

      // Return context with previous users for rollback on error
      return { previousUsers };
    },
    // Revert to previous state on error
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(['users'], context?.previousUsers);
    },
    // Invalidate or refetch after mutation settles
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};