import testImg from '@/app/assets/Images&Icons/ttten2.svg'
import Image from 'next/image'
const Svgdesign = () => {
  return (
    <div className='absolute overflow-hidden w-full h-full sm:hidden'>
      <Image src={testImg} alt='' className='h-full w-full object-cover' />
    </div>
  )
}

export default Svgdesign
