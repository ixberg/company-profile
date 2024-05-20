"use client";
import { useState, useEffect } from "react";

interface User {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
}

interface FetchUsersResult {
  users: User[];
  loading: boolean;
  error: Error | null;
}

const useFetchUsers = (url?: string): FetchUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          url || `https://randomuser.me/api/?results=22`
        );
        const data = await response.json();
        setUsers(data.results);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [url]);

  return { users, loading, error };
};

export default useFetchUsers;
