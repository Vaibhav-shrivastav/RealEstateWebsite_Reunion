import React, { useContext } from 'react'
import { MdRealEstateAgent } from "react-icons/md";
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function Navbar() {
    let iconStyles = { color: "#A533FF", fontSize: "1.5em" };
    const a = useContext(Context)
    
  return (
    <>
        <div className="p-3 shadow-sm bg-white rounded" id='nav'>
          <div className="container mx-3 my-2">
          <MdRealEstateAgent style = {iconStyles} size='30px'/>&nbsp;
          <span id='navtitle'>Estatery</span>
            &nbsp;
            <span className='mx-5' id='navlinks'>
            <Link to='/' className={a.active==='rent'? 'navlinkActive':'navlink'} onClick={a.handleClickRent}>Rent</Link>&nbsp;
            <Link to='/buy' className={a.active==='buy'? 'navlinkActive':'navlink'} onClick={a.handleClickBuy}>Buy</Link>&nbsp;
            <Link to='/sell' className={a.active==='sell'? 'navlinkActive':'navlink'} onClick={a.handleClickSell}>Sell</Link>&nbsp;
            <select className='navlinkdrop' name="Manage Property" id="">
              <option value="Property">Manage Property</option>
            </select>&nbsp;
            <select className='navlinkdrop' name="Resources" id="">
              <option value="Property">Resources</option>
            </select>
            </span>
            <span id='login'><button className="LoginButton btn shadow-sm signup rounded mx-3">Sign up</button></span>
            <span id='login'><button className="LoginButton btn shadow-sm bg-white rounded">Login</button></span> 
             
            
          
          </div>
        </div>
    </>
  )
}

export default Navbar