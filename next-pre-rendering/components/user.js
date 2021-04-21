function User({ user }) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <hr />
    </>
  )
}

export default User
