import Head from 'next/head'
import lake from '../starter-code/assets/home/desktop/create-and-share.jpg' 
import laptop from '../starter-code/assets/home/desktop/beautiful-stories.jpg'
import camera from '../starter-code/assets/home/desktop/designed-for-everyone.jpg'
import mountain from '../starter-code/assets/stories/desktop/mountains.jpg'

import arrow from '../starter-code/assets/shared/desktop/arrow.svg' 
import Image from 'next/image'
import Link from 'next/link'
import StoriesList from '../components/stories/StoriesList.js'


function Home(props) {



  return (
    <div>
      <Head>
        <title>PHOTOSNAP</title>
        <meta name="description" content="Photo and story sharing platform" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      

      <main>
        <div className='section-container'>
          <div className='right-image-container'>

          <Image 
              className='lake-photographer-picture section-picture'
              src={ lake }  
              layout='responsive' 
              alt="man standing by lake"/>

          </div>
          <div className='text-box text-box-left black-text-container'>
            <h1>
              Create and share your photo Stories
            </h1>
            <p>
              Photosnap is a platform for photographers and visual storytellers. We make it 
              easy to share photos, tell stories and connect with others.
            </p>
            <div className='invite-flex-container'>
              <Link href="/pricing" className='invite-link'><h4>Get an invite</h4></Link>
              <Image 
                layout="fixed" 
                width="50px" 
                height="15px" 
                className='arrow'
                alt="arrow" 
                src={ arrow }/>
            </div>
          </div>
        </div> {/* section container */}

        <div className='section-container'>
        <div className='left-image-container'>

        <Image 
            className='laptop-on-desk-picture section-picture'
            src={ laptop }  
            layout='responsive' 
            alt="man standing by lake"/>

        </div>
        <div className='text-box text-box-right white-text-container'>
          <h1>
          Beautiful stories every time
          </h1>
          <p>
            We provide design templates to ensure your stories look terrific. Easily add 
            photos, text, embed maps and media from other networks. Then share your story 
            with everyone.
          </p>
          <div className='view-stories-flex-container'>
              <Link href="/stories" className='stories-link'><h4>View the stories</h4></Link>
              <Image 
                layout="fixed" 
                width="50px" 
                height="15px" 
                alt="arrow"
                className='arrow' 
                src={ arrow }/>
            </div>
        </div>
      </div> {/* section container */}

      <div className='section-container'>
        <div className='right-image-container'>

        <Image 
            className='laptop-on-desk-picture section-picture'
            src={ camera }  
            layout='responsive' 
            alt="man standing by lake"/>

        </div>
        <div className='text-box text-box-left white-text-container'>
          <h1>
          Designed for everyone
          </h1>
          <p>
          Photosnap can help you create stories that resonate with your audience.  Our 
          tool is designed for photographers of all levels, brands, businesses you name it.
          </p>
          <div className='view-stories-flex-container'>
              <Link href="/stories" className='stories-link'><h4>View the stories</h4></Link>
              <Image 
                layout="fixed" 
                width="50px" 
                height="15px" 
                alt="arrow"
                className='arrow' 
                src={ arrow }/>
            </div>
        </div>
      </div> {/* section container */}

      <StoriesList story={ props.stories } />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps() {
  // fetch data from an API

  const storyArrayOfObject = [
    {
      title: "The Moauntains",
      author: "John Appleseed",
      id: "1",
      image: '/assets/stories/desktop/mountains.jpg',
      content: "ipsum lorum"
    },{
      title: "Sunset Cityscapes",
      author: "John Appleseed",
      id: "2",
      image: '/assets/stories/desktop/cityscapes.jpg',
      content: "ipsum lorum"
    },{
      title: "18 Days Voyage",
      author: "John Appleseed",
      id: "3",
      image: '/assets/stories/desktop/18-days-voyage.jpg',
      content: "ipsum lorum"
    },{
      title: "Architecturals",
      author: "John Appleseed",
      id: "4",
      image: '/assets/stories/desktop/architecturals.jpg',
      content: "ipsum lorum"
    },{
      title: "World Tour 2019",
      author: "John Appleseed",
      id: "5",
      image: '/assets/stories/desktop/world-tour.jpg',
      content: "ipsum lorum"
    },{
      title: "Unforeseen Corners",
      author: "John Appleseed",
      id: "6",
      image: '/assets/stories/desktop/unforeseen-corners.jpg',
      content: "ipsum lorum"
    },{
      title: "Kind on Africa Part 2",
      author: "John Appleseed",
      id: "7",
      image: '/assets/stories/desktop/king-on-africa.jpg',
      content: "ipsum lorum"
    },{
      title: "The Trip to Nowhere",
      author: "John Appleseed",
      id: "8",
      image: '/assets/stories/desktop/trip-to-nowhere.jpg',
      content: "ipsum lorum"
    }
  ]

  return {
    props: {
      stories: storyArrayOfObject
    }
  }
}


export default Home;