import HeaderBox from "../components/ui/HeaderBox"
import TotalBalanceBox from "../components/ui/TotalBalanceBox"

const Home = () => {
  const loggedIn = {firstName: "DevPastey"}
  return (
    <div className='flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll no-scrollbar'>
      <div className=" no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your accounts, cards, and transactions all in one place efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </div>
  )
}

export default Home
