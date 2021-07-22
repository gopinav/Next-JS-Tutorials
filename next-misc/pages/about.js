import Head from 'next/head'
import Footer from '../components/layout/Footer'

function About() {
  return (
    <>
      <Head>
        {/* <title>About Codevolution</title> */}
        <meta name='description' content='Free tutorials on web development' />
      </Head>
      <h1 className='content'>About</h1>
    </>
  )
}

export default About

About.getLayout = page => (
  <>
    {page}
    <Footer />
  </>
)
