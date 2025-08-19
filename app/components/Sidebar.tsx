'use client';

import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
//import HomeIcon from '@/src/icons/home.svg';


const Sidebar = ({user}: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className='sidebar'>
      <nav className="flex flex-col gap-4">
        <Link   href='/icons/logo.svg' 
        className='mb-9 cursor-pointer flex justify-center items-center gap-2'>
          <Image src='/icons/logo.svg' 
          width={34} height={34} 
          alt='logo'
          className='size-[24px] max-xl:size-[24px]' />
          <h1 className='side-logo font-ibm-plex-serif'>Horizon</h1>
        </Link>
        <p className='text-black'>Welcome {user?.name ?? "Guest"}</p>

      {sidebarLinks.map((link) => {
      const isActive = pathname === link.route || pathname.startsWith(`${link.route}`) && link.route !== '/';
      
        return (
          <Link 
            key={link.label} 
            href={link.route} 
            className={`sidebar-link ${isActive ? 'bg-bankGradient transition-colors duration-700 ease-in-out hover:bg-bankGradient' : 'hover:bg-gray-100'}`}>
           {/* <Image className={`${isActive ? 'text-white' : ''}` } src={link.imgURL} width={24} height={24} alt={`${link.label} icon `} /> */} 
           
            <div> <link.imgURL 
             stroke={isActive ? 'white' : ''}
             
             alt={`${link.label} icon`} className={`w-6 h-6 md:flex hidden ${isActive ? 'filter brightness-250' : ''}`} 
             
             />
            </div>
            <p className={`sidebar-label ${isActive ? 'text-white' : 'text-black'}`}>{link.label}</p>
          </Link>
        );
      })}

      USER
        
      </nav>

      <Footer user={user} />
    </section>
  )
}

export default Sidebar
