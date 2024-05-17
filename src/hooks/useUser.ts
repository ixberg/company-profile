"use client";
import { useState, useEffect } from "react";

interface User {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
  gender: string;
}

interface FetchUsersResult {
  users: User[];
  loading: boolean;
  error: Error | null;
}

const useFetchUsers = (): FetchUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const maleResponse = await fetch(
          `https://randomuser.me/api/?results=2&gender=male`
        );
        const femaleResponse = await fetch(
          `https://randomuser.me/api/?results=1&gender=female`
        );

        const maleData = await maleResponse.json();
        const femaleData = await femaleResponse.json();

        const mergedData = [...maleData.results, ...femaleData.results];

        // Ensure the first and third users are male, and the second user is female
        const orderedUsers = [mergedData[0], mergedData[2], mergedData[1]];

        setUsers(orderedUsers);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useFetchUsers;
