import './Squre.css'
// import cancel from '../assets/icons/cancel.svg'
// import salom from '../'
function Squre({filterTitle1,filterTitle2,checking,index}) {
    
    return (
       <>
            <div onClick={()=>checking(index)} className='squreRang'>
                <p className='rang1'>{filterTitle1}</p>
                <p className='rang2'>({filterTitle2})</p>
                {/* <img className='cancel' src={cancel}/> */}
            </div>
       </>
    )
}

export default Squre
