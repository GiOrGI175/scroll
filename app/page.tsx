import Services from '@/components/Services';

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1360px] w-full  flex flex-col justify-between items-center '>
        <Services />
      </div>
    </div>
  );
}
