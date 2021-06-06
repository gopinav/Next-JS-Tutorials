import { getSession, useSession } from 'next-auth/client'

function Blog({ data }) {
  const [session] = useSession()
  console.log({ session })
  return <h1>Blog page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      data: session ? 'List of 100 personalized blogs' : 'List of free blogs',
      session
    }
  }
}
