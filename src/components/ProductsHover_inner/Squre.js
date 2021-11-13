import './Squre.css'
import cancel from '../assets/icons/cancel.svg'
// import salom from '../'
function Squre({filterTitle1,filterTitle2,checking,index,CommonItem}) {
    return (
       <>
            <div id ={CommonItem.disabled ? 'disabledDiv' : {}} onClick={()=>checking(index)} className={CommonItem.checked ? 'squreRang squreRangActive' : 'squreRang'} >
                <p id ={CommonItem.disabled ? 'disabledDiv' : {}}  className={ CommonItem.checked ? 'rang1 rang12Active' : 'rang1'} >{filterTitle1}</p>
                <p id ={CommonItem.disabled ? 'disabledDiv' : {}}  style={ CommonItem.checked ? { display:'none'} : {display:'block'}} className={'rang2'} >({filterTitle2})</p>
                <img className= {CommonItem.checked ? 'cancelBlock' : 'cancelNone'} src={cancel} alt='rasmbor'/>    
            </div>
       </>
    )
}

export default Squre
