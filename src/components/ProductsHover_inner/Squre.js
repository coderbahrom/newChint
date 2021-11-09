import './Squre.css'
// import cancel from '../assets/icons/cancel.svg'
// import salom from '../'
function Squre({filterTitle1,filterTitle2,checking,index,CommongetActive}) {
 
    
    return (
       <>
            <div onClick={()=>checking(index)} className={index === CommongetActive ? 'squreRang squreRangActive' : 'squreRang'} >
                <p className={index === CommongetActive ? 'rang1 rang12Active' : 'rang1'} >{filterTitle1}</p>
                <p className={index === CommongetActive ? 'rang2 rang12Active' : 'rang2'} >({filterTitle2})</p>
               
            </div>
       </>
    )
}

export default Squre
