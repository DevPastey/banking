import HeaderBox from "../components/HeaderBox"
import RightSidebar from "../components/RightSidebar"
import TotalBalanceBox from "../components/TotalBalanceBox"

const Home = () => {
  const loggedIn = {firstName: "DevPastey", lastName: 'Timi',
    email: 'devpastey@hotmail.com'
  }

  return (
    <section className='home no-scrollbar'>
      <div className=" home-content no-scrollbar">
        <header className="home-header">
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

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 1250.35}]}
       />
    </section>
  )
}

export default Home
