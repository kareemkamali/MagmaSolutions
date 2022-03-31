import React,{useRef,useEffect,useState} from 'react'

const ScrollBar = (props) => {
let ref=useRef();
console.log(props._class)

const[state,setState]=useState({
isScrolling:false,
clientX:0,
scrollX:0
})
console.log(state.clientX)


const onMouseDown=e=>{
  if(ref&&ref.current&&!ref.current.contains(e.target)){
      return
  }
  e.preventDefault()
  setState({
      ...state,
      isScrolling:true,
      clientX:e.clientX
  })

}
const onMouseUp=e=>{
    if(ref&&ref.current&&!ref.current.contains(e.target)){
        return
    }
    e.preventDefault()
    setState({
        ...state,
        isScrolling:false,
     
    })
  
  }




const onMouseMove=e=>{
    if(ref&&ref.current&&!ref.current.contains(e.target)){
        return
    }
    e.preventDefault()
    const {clientX,scrollX,isScrolling}=state;
    if(isScrolling){
        ref.current.scrollLeft=scrollX+e.clientX-clientX
let sX=scrollX+e.clientX-clientX
let cX=e.clientX

        setState({
            ...state,
            scrollX:sX,
            clientX:cX
         
        })
    }
  
  
  }


useEffect=(()=>{
    document.addEventListener('mouseup',onMouseUp)
    document.addEventListener('mousedown',onMouseDown)
    document.addEventListener('mousemove',onMouseMove)
    return ()=>{
        document.removeEventListener('mouseup',onMouseUp)
        document.removeEventListener('mousedown',onMouseDown)
        document.removeEventListener('mousemove',onMouseMove)
    }
})

  return (
   <div 
   ref={ref}
   onMouseDown={onMouseDown}
   onMouseUp={onMouseUp}
   onMouseMove={onMouseMove}
   
   className={props._class}>
    {props.children}
     </div>
  )
}

export default ScrollBar