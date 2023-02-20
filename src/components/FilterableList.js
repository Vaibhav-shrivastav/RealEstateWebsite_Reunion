import React, { useContext } from 'react'
import Context from '../context/Context'

function FilterableList() {

    const a = useContext(Context)
    
  return (
    <div className="container text-center shadow-sm p-3 mb-5 bg-white rounded">
        <div className="row text-center">
            <div className="col border-end">
                <span className='text-red-900 my-2'>Location</span><br />
                <input className='border-0 border-bottom w-75 text-dark text p-2' type="text" placeholder={a.location} onChange={a.handleChangeLocation} />
            </div>
            <div className="col border-end">
                <span className='text-red-900 '>When</span><br />
                <input className='border-0 border-bottom w-75 p-2' type="date" name="" id="" placeholder='' value={a.date} onChange={a.handleChangeDate}/>
            </div>
            <div className="col border-end">
            <span className='text-red-900 '>Price</span><br />
            <select className='border-0 border-bottom p-2' name="" id="" onChange={a.handleChangePrice}>
                <option value="All prices">All prices</option>
                <option value="500-2500">$500-$2500</option>
                <option value="2500-4500">$2500-$4500</option>
                <option value="4500-7500">$4500-$7500</option>
                <option value="7500-9500">$7500-$9500</option>
            </select>
            </div>
            <div className="col border-end">
            <span className='text-red-900'>Property Type</span><br />
            <select className='border-0 border-bottom p-2 ' name="" id="" value={a.property} onChange={a.handleChangeProperty}>
                <option value="Any">Any</option>
                <option value="Houses">Houses</option>
                <option value="Bunglows">Bunglows</option>
                <option value="Flats">Flats</option>
                <option value="Apartments">Apartments</option>
            </select>
            </div>
            <div className="col">
                <button className="btn native my-3">Search</button>
            </div>
        </div>
    </div>
  )
}

export default FilterableList