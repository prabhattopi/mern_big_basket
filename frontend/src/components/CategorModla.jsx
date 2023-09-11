import React from 'react'
import useItem from '../hooks/useItem'

const CategorModla = () => {
    const {state}=useItem()
    const categoryList=state.items.reduce((array,e)=>{
        array.push(e.category)
        return array
    },[])
    
  return (
    <div className='absolute top-20 right-30 bg-white text-black px-4 py-4 z-10'>
        {
            [...new Set(categoryList)].map(e=>(
                <div key={e} className='flex flex-col gap-4 font-bold h-[3rem] text-xl hover:bg-gray-300 px-4 py-4'>
                    {e}
                </div>
            ))
        }



    </div>
  )
}

export default CategorModla