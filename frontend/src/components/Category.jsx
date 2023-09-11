import React from 'react'
import Card from './Card'

const Category = ({title,data}) => {
  return (
    <div className="flex flex-col gap-2 mt-2 px-4 py-4">
        {/* title */}
        <div className="font-bold text-2xl">{title}</div>
        {/* Cards */}
        <Card data={data}/>
    </div>
  )
}

export default Category