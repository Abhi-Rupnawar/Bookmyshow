import React from 'react'

export default function Cart(props) {
  return (
   
    <div>
      <div className='maindiv'>
        <div >
            <img src={props.imgurl} height={400} width={250} alt="" className='cart_img'/>
        </div>
        <div style={{marginTop:"-15px", marginLeft:"5px"}}>
            <h3>{props.name}</h3>
            <p style={{marginTop:"-15px"}}>{props.para}</p>
        </div>
      </div>
    </div>
    
  )
}

