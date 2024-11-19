import React from 'react'

export default function nav() {
  return (
    <div>
        <div className='div2'>
        <img className='img' src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="" />
        <input type="search" placeholder=' Search for Movies and Entertenment' />
        <select className='select' >
            <option value="mumbai">Mumbai</option>
            <option value="">Bengluru</option>
            <option value="">Pune</option>
            <option value="">Dehli</option>
        </select>
        <button>Sign In</button>
        <a href="#"><i class="fa fa-bars"></i></a>
        </div>
      <ul className='navbar'>
        <li>Movies</li>
        <li>Strem</li>
        <li>Events</li>
        <li>Plays</li>
        <li>Sports</li>
        <li>
            <ul className='navbar1'>
                <li>ListYourShow</li>
                <li>Corportes</li>
                <li>Offers</li>
                <li>Gift Card</li>

            </ul>
        </li>
      </ul>
      <img className='navimg' src="https://t3.ftcdn.net/jpg/05/30/99/02/360_F_530990229_eCt79sQVtIqipulnIuwiBSKKgkrEz1On.jpg" alt="" />
      <h2 style={{marginLeft:"80px"}}>Recommended Movies</h2>
    </div>
  )
}  