import { Wrapper } from '@app-components'

export default function NewsFeed() {

  const renderContent = () => {
    const Data = [
      {
        title: 'Hydrogen VS Electric Cars',
        feed: 'Will hydrogen-fueled cars ever catch up to EVs?'
      },
      {
        title: 'The Downsides of AI Artistry',
        feed: 'What are the possible adverse effects of on-demand AI image generation?'
      },
      {
        title: 'Is VC Funding Drying Up?',
        feed: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
      },
    ]

    return (
      <Wrapper className='flex flex-col gap-[29px]'>
        {Data.map((item, index) => (
          <div key={index} className='flex flex-col gap-2 pb-[29px] last-of-type:pb-0 border-b border-b-[#5E607A] last-of-type:border-b-0'>
            <h3 className='heading-s text-white-almost'>{item.title}</h3>
            <p className='body text-silver'>{item.feed}</p>
          </div>
        ))}
      </Wrapper>
    )
  }

  return (
    <Wrapper className='bg-blue-dark-space px-5 py-6 xl:px-6 xl:py-8 flex flex-col gap-[35px] xl:min-w-[350px]'>
      <h2 className='heading-m text-yellow'>New</h2>
    
      {renderContent()}
    </Wrapper>
  )
}
