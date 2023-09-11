import React from 'react'
import Category from '../components/Category'
import useItem from '../hooks/useItem'

const Homepage = () => {
    const {state}=useItem()
    const handleFilter=(id)=>{
        return state.items.filter((e)=>e.category==id).slice(0,5)
    }

    return (
        <div className="flex flex-col px-8 gap-4">
            {
      state.selectCat.length>0?(
        <Category title={state.selectCat[0].category} data={state.selectCat}/>

      ):(
        <>
        <Category title="Fruits & Vegetables" data={handleFilter("Fruits & Vegetables")}/>
        <Category title="Beverages" data={handleFilter("Beverages")}/>
        <Category title="Snack Store" data={handleFilter("Snack Store")}/>
        </>

      )
  
            }
           
        </div>
    )
}

export default Homepage
