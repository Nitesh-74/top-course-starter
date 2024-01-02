import React from 'react'

const Filter = (props) => {
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;
    
    function filterHandler(title){
      setCategory(title);
    }
  return (
    <div className='w-11/12 flex flex-wrap space-x-4 gap-y-4 mx-auto justify-center'>
        {
       filterData.map( (data) => (
            <button
            className={`text-lg py-2 px-1 rounded-md font-medium text-white bg-black border-2 transition-all duration-300 hover:bg-opacity-50
              ${category===data.title ?
              "bg-opacity-60 border-white":
              " bg-opacity-40 border-transparent" 
            }`}  
              key={data.id}
              onClick={()=>filterHandler(data.title)}>
              {data.title}</button>
       ))
        }
    </div>
  )
}

export default Filter
