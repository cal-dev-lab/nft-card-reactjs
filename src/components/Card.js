import React from 'react';
import NFT from '../images/image-equilibrium.jpg';
import ETH from '../images/icon-ethereum.svg';
import CLOCK from '../images/icon-clock.svg';
import PROFILEPIC from '../images/image-avatar.png';
import EYE from '../images/icon-view.svg';

const Card = () => {

  return (

    <>
    
      <div className='flex h-screen mx-auto justify-center items-center'>
      
        <div className='max-w-sm p-6 rounded-lg card-bg w-80'>
    
          <div className='flex flex-col'>
   
            <div className='container'>

              <img 
                src={NFT} 
                alt='NFT image' 
                className='block rounded-lg' 
              />
              
              <div className='overlay'>
                
                <img 
                  src={EYE} 
                  alt='Eye icon' 
                  className='flex justify-center items-center mx-auto mt-28' 
                />
              
              </div>
            
            </div>

            <h3 className='text-xl text-white font-outfit my-4'>
              
              <a href='/#' className='hover:text-cyan-300'>
                
                Equilibrium #3429
              
              </a>
            
            </h3>

            <p className='soft-blue font-thin text-md mb-4'>Our Equilibrium collection promotes balance and calm.</p>

            <div className='flex justify-between mb-4'>
      
              <div className='w-full flex space-x-2'>

                <img 
                  src={ETH} 
                  className='w-3 h-5' 
                  alt='Ethereum logo' 
                />

                <p className='text-cyan-300 font-outfit font-semibold text-sm'>0.041 ETH</p>
      
              </div>
            
              <div className='w-full flex justify-end space-x-2'>

                <img 
                  src={CLOCK} 
                  alt='Clock logo' 
                  className='w-4 h-4' 
                />

                <p className='soft-blue text-sm font-regular font-outfit'>3 days left</p>

              </div>

            </div>
  
            <div className='w-full hr-blue'></div>

            <div className='flex space-x-3 items-center mt-4'>
            
              <img 
                src={PROFILEPIC} 
                alt='Profile picture of Callum Lees' 
                className='w-8 h-8' 
              />

              <p className='font-outfit text-sm'>
                
                <span className='soft-blue font-thin'>Creation of </span> 
                
                <span className='font-regular text-blue-100 hover:text-cyan-300'><a href='/#'>Callum Lees</a></span>
              
              </p>
            
            </div>

          </div>

        </div>
      
      </div>

    </>
  
  );
 
}

export default Card;
