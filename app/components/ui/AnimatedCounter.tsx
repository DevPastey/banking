'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full text-[24px] lg:text-[30px] flex-1 font-semibold text-gray-900 flex items-center flex-center gap-2'>
        
        <CountUp
            start={0}
            end={amount}
            duration={2.75}
            separator=","
            decimals={2}
            decimal="."
            prefix="$"
        />
      
    </div>
  )
}

export default AnimatedCounter
