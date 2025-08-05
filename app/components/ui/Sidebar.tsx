import Image from 'next/image';
import Link from 'next/link';

const Sidebar = ({user}: SiderbarProps) => {
  console.log(user.firstName);
  return (
    <aside className='sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 xl:w-[355px] transition-all duration-500 ease-in-out'>
      <nav className="flex flex-col gap-4">
        <Link   href='/' 
        className='mb-12 cursor-pointer items-center gap-2'>
          <Image src='/icons/logo.svg' 
          width={34} height={34} 
          alt='Horizon logo'
          className='size-[24px] max-xl:size-14' />
          <h1 className='2xl:text-[26px] font-ibm-plex-serif text-[26px] font-bold text-black max-xl:hidden'>Horizon</h1>
        </Link>
        <p>Welcome {user.firstName}</p>
      </nav>
    </aside>
  )
}

export default Sidebar
