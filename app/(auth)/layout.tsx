import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
        {children}

        <div className="auth-asset bg-sky-1">
          <Image src="/icons/auth-image.svg" 
            alt="Auth Image" 
            width={500}
            height={500}
          />
        </div>
    </main>
  );
}
