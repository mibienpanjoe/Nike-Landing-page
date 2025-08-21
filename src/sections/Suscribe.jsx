import  Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10 mt mb'
    >
      <h3 className='text-4xl leading-[40px] lg:max-w-md font-palanquin font-bold lg:leading[30px] w-full'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full mb'>
        <input type='text' placeholder=' subscribe@nike.com' className='input input-p' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <a href=""></a>
          <button className="flex justify-center items-center gap-2 p-btn border lg:p-btn-xl font-montserrat text-lg leading-none rounded-full transition-all duration-200 bg-coral-red text-white cursor-pointer "> Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
