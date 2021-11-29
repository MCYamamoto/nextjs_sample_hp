import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children, title = 'HP by Next js' }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-gray-600 text-sm font-mono'>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className='bg-gray-800 w-screen'>
          <div className='flex items-cneter pl-8 h-14'>
            <div className='flex space-x-4 mt-3 mb-3'>
              <Link href='/'>
                <a className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                  Home
                </a>
              </Link>
              <Link href='/blog-page'>
                <a className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                  Blog
                </a>
              </Link>
              <Link href='/contact-page'>
                <a className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className='flex flex-1 flex-col justify-center items-center w-screen'>
        {children}
      </main>
      <footer className='w-full h-12 flex justify-center items-center border-t'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center'
        >
          Powered by
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Layout;
