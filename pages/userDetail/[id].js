import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  const ids = data.map((user) => user.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
};

const userDetails = ({ user }) => {
  return (
    <div>
      <h1 className="text-center">{user.name}</h1>
      <p className="text-center">{user.email}</p>
      <p className="text-center">{user.address.city}</p>
    </div>
  );
};

export default userDetails;
