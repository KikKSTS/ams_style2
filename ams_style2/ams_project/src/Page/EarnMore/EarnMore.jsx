import React from 'react'
import Banner from './Banner'
import F_Content from './F_Content'
import S_Content from './S_Content'
import Third_Content from './Third_Content'
import Faq from './Faq'


const EarnMore = () => {
  return (
    <div className='w-full overflow-hidden	'>
      <Banner/>
      <F_Content/>
      <S_Content/>
      <Third_Content/>
      <div className='h-[200px] sm:hidden'></div>
      <Faq/>

    </div>
  )
}

export default EarnMore
