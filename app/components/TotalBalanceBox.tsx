
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DonoughtChart from './DonoughtChart'


const TotalBalanceBox = ({accounts = [], totalCurrentBalance, totalBanks }: TotalBalanceBoxProps) => {
  return (
    <section className='shadow-lg h-40 flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 sm:gap-6 sm:p-6'
    >
      <div className='flex size-full max-w-[100px] items-center sm:max-w-[120px] overflow-hidden'>
        <DonoughtChart accounts={accounts} />
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='text-[16px] lg:text-[20px] font-semibold'>
         {`Bank Accounts: ${totalBanks}` }
        </h2>
        <div className="flex flex-col gap-2">
            <p className='text-[14px] font-medium text-gray-600'>
                Total Current Balance
            </p>

            <div >
                <AnimatedCounter amount={totalCurrentBalance}/>
            </div>

        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox
