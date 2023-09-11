import React from 'react'
import Category from '../components/Category'
import useItem from '../hooks/useItem'

const Homepage = () => {
    const {state}=useItem()
    const handleFilter=(id)=>{
        return state.items.filter((e)=>e.category==id)
    }

    return (
        <div className="flex flex-col px-8 gap-4">
            <Category title="Fruits & Vegetables" data={handleFilter("Fruits & Vegetables")}/>
            <Category title="Beverages" data={handleFilter("Beverages")}/>
            <Category title="Snack Store" data={handleFilter("Snack Store")}/>
        </div>
    )
}

export default Homepage
