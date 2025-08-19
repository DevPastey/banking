import { logOutAccount } from "@/lib/actions/user.actions"
import Image from "next/image"
import { useRouter } from "next/navigation";

const Footer = ({ user, type = "desktop" }: FooterProps ) => {
   const router = useRouter()
  const handleLogout = async () => {
   const loggedOut = await logOutAccount();

   if (loggedOut) {
    router.push('/sign-in')
   }
  }
  return (
    <footer className="footer py-40">
      <div className={type === 'mobile' ? 'footer-name-mobile min-w-[40px] h-[40px] bg-amber-500' : 'footer-name'}>
        <p className="text-xl font-bold">
          {user.name[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer-email-mobile' : 'footer-email'}>
        <h1 className="text-[14px] truncate font-semibold text-gray-700">
          {user.name}
        </h1>
        <p className="text-[14px] truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>

      <div className="footer-image" onClick={handleLogout}>
        <Image src="icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  )
}

export default Footer
