import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
function Rcc() {





    
    let kkk=useNavigate()

function handleButton(){
    console.log('navigte');
    
    kkk('\Operator')
    
}
    
  return (



    <div>
        <Link to='/Login'></Link>
      
      <button onClick={handleButton}> here</button>
    </div>
  )
}

export default Rcc
