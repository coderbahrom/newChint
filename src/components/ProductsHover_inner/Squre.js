import './Squre.css'
// import cancel from '../assets/icons/cancel.svg'
// import salom from '../'
function Squre({filterTitle1,filterTitle2,checking,index,show,id,getIndex,still}) {
   const styleSqureChecked1 = {
        backgroundColor:'blue',
        color:'white',
    }
    
    return (
       <>
            <div style={still ? styleSqureChecked1 : {}} onClick={()=>checking(index)} className='squreRang'>
                <p style={still ? styleSqureChecked1 : {}}  className='rang1'>{filterTitle1}</p>
                <p style={still ? styleSqureChecked1 : {}}  className='rang2'>({filterTitle2})</p>
                {/* <img className='cancel' src={cancel}/> */}
            </div>
       </>
    )
}

export default Squre
