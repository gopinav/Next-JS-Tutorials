import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/product'>
        <a>Products</a>
      </Link>
    </>
  )
}

export default Home
