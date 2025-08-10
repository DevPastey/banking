import Image from "next/image";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import Test from "../components/Test";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: "DevPastey", lastName: "Timi" }; // Example user data
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        <div className="flex size-full flex-col">
          <div className="flex h-16 items-center justify-between p-5 shadow-lg shadow-gray-100 sm:p-8 md:hidden">
            <Image src='/icons/logo.svg' 
              width={30} height={30} 
              alt='logo'/>

             <div>
              <MobileNav user={loggedIn} />
             </div>

             
          </div>
          {children}

          <div>
            <Test/>
          </div>
        </div>
        
        
    </main>
  );
}
