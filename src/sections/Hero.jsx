import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import { shoes,statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const Hero = () =>{
    const[bigShoeImg ,setBigShoeImg] = useState(bigShoe1)

    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  padding padding-x ">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28  ">

                <p className='text-xl font-montserrat mb max-md:mt text-coral-red'>Our Summer Collection</p>
                <h1 className='mt-10 font-palanquin text-6xl max-sm:text-[60px] max-sm:leading-[82px] font-bold mb-10' >
                    <span className=' xl:whitespace-nowrap relative w-10 pr-10 '>The New Arrival</span><br />
                    <span className='text-coral-red inline-block mt-3  xl:mt'>Nike</span>
                    Shoes
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 sm:max-w-sm mt '>Discover stylish Nike arrivals , premium shoes to make your life more fun. </p>
                <div className='mt-11'>
                    <Button label="Shop now" iconURL={arrowRight} />
                </div>

                <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                    {statistics.map((stat, idex) => (
                        <div key={stat.label}>
                            <p className='text-4xl font-palanquin font-bold'>{stat.value} </p>
                            <p className='leading-7 font-montserrat text-slate-gray '>{stat.label} </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-promary bg-hero bg-cover bg-center '>
                <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className='object-contain relative z-10' />
                <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
                    {shoes.map((shoe,index) => (
                        <div key={index }>
                            <ShoeCard  imgURL ={shoe} changeBigShoeImage={(shoe)=> setBigShoeImg(shoe)} bigShoeImg={bigShoeImg} />         
                        </div>
                    ))}
                </div>
            </div>                  
        </section>
    )
}

export default Hero;