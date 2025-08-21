import { shoe8 } from '../assets/images';
import Button from '../components/Button'

const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
            <div className="flex flex-1 flex-col">
                <h2 className='font-palanquin text-4xl lg:text-6xl capitalize max-sm:text-[55px]   max-md:text-[62px] max-sm:leading-[60px] font-bold lg:max-w-lg mb' >
                    We Provide You 
                    <span className='text-coral-red'> Super </span>
                    <span className='text-coral-red'> Quality</span> Shoes
                </h2>
                <p className='lg:max-w-lg info-text mb-4'>
                    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your style. 
                </p>
                <p className='lg:max-w-lg info-text mb-8'>
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <div className='mt-6'>
                    <Button label="View Details" />
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <img 
                    src={shoe8} 
                    alt="shoe8" 
                    width={570} 
                    height={522} 
                    className="object-contain max-w-full h-auto"
                />
            </div>
        </section>
    )
}

export default SuperQuality;

