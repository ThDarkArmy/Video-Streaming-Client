import React, {useState, useRef, useEffect } from 'react'




const Login = () => {

  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()

  const [state, setState] = useState()

  const change = ()=> {
    ref1.current.style.color = "red";
    ref2.current.style.color = "yellow";
    ref1.current.innerText = "Button Clicked"
  }

  return (
    <div>
      <h3 ref={ref1}>Ref 1 </h3>
      <h3 ref={ref2}>Ref 2</h3>
      <h3 >{state}</h3>
     
      <input type='text' values={ref3.current?.value} ref={ref3} onChange={e=> setState(e.target.value)}/>
      <button onClick={(e)=>change()}>Click</button>
    </div>
  )
}

export default Login


// dxchr@service-now.com