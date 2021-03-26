import React from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

const users = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <Link href={`/userDetail/${user.id}`}>
          <Card key={user.id} body>
            {user.name}
          </Card>
        </Link>
      ))}
    </>
  );
};

export default users;
