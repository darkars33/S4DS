import React, { useEffect } from 'react'
import GoalsComp from '../../../components/GoalsComp'

const Goals = () => {

  useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

  return (
    <div className='w-full flex flex-col items-center overflow-hidden'>
      <div className='w-[90%] pt-10 max-w-[1440px]'>
        <div className='mt-24 p-16 pb-16 float-right bg-brand md:float-none'>
          <h1 className='text-[4.5rem] mt-[18rem] text-white font-normal'>Goals of Society <br /> for Data Science</h1>
        </div>
      </div>
      <div className='pb-10 w-[90%] lg:w-[100%] mt-10 max-w-[1440px] px-5 flex flex-col md:items-center items-start md:gap-5'>
        <GoalsComp background="bg-background" textColor="text-text-color" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
        <div className='flex flex-wrap md:flex-col md:items-center'>
          <GoalsComp background="bg-background" textColor="text-text-color" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
          <GoalsComp background="bg-accent-color2" textColor="text-white" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
        </div>
        <div className='w-[100%] flex justify-end md:flex-col md:items-center'>
          <GoalsComp background="bg-brand" textColor="text-white" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
          <GoalsComp background="bg-background" textColor="text-text-color" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
        </div>
        <div className='w-[100%] flex justify-center lg:justify-start flex-wrap md:flex-col md:items-center'>
          <GoalsComp background="bg-accent-color2" textColor="text-white" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
          <GoalsComp background="bg-background" textColor="text-text-color" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
          <GoalsComp background="bg-accent-color2" textColor="text-white" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
        </div>
        <div className='w-[100%] flex justify-center flex-wrap md:flex-col md:items-center'>
          <GoalsComp background="bg-background" textColor="text-text-color" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
          <GoalsComp background="bg-brand" textColor="text-white" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
          <GoalsComp background="bg-background" textColor="text-text-color" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
        </div>
        <div className='w-[100%] flex justify-end flex-wrap md:flex-col md:items-center'>
          <GoalsComp background="bg-brand" textColor="text-white" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
          <GoalsComp background="bg-accent-color2" textColor="text-white" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
        </div>
        <div className='w-[100%] flex justify-center flex-wrap md:flex-col md:items-center'>
          <GoalsComp background="bg-brand" textColor="text-white" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
          <GoalsComp background="bg-accent-color2" textColor="text-white" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
          <GoalsComp background="bg-background" textColor="text-text-color" title="Knowledge Empowerment" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dignissimos labore molestias obcaecati officiis fuga, alias voluptatibus nesciunt magni enim in excepturi quam ducimus minus dolor?" />
        </div>
      </div>
    </div>
  )
}

export default Goals
