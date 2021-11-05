import {Link} from 'react-router-dom'
import './news.css'
import NewsImage from './NewsImage'
import {useState} from 'react'
function ThreeImageComponent() {
  const [newsData,setNewsData] = useState([
    {img:"./assets/images/news1.jpg", newsDate:'15.09.2021 | 20:21',newsDesc:'С 7-10 июня состоялась выставка «Электро-2021» в ЦВК «Экспоцентр»,Москва'},
    {img:"./assets/images/news1.jpg", newsDate:'15.09.2021 | 20:21',newsDesc:'С 7-10 июня состоялась выставка «Электро-2021» в ЦВК «Экспоцентр»,Москва'},
    {img:"./assets/images/news1.jpg", newsDate:'15.09.2021 | 20:21',newsDesc:'С 7-10 июня состоялась выставка «Электро-2021» в ЦВК «Экспоцентр»,Москва'},
    
  ])
  
  function addNewsData(){
    const getnewsData = [
     {img:"./assets/images/news1.jpg", newsDate:'15.09.2021 | 20:21',newsDesc:'С 7-10 июня состоялась выставка «Электро-2021» в ЦВК «Экспоцентр»,Москва'},
     {img:"./assets/images/news1.jpg", newsDate:'15.09.2021 | 20:21',newsDesc:'С 7-10 июня состоялась выставка «Электро-2021» в ЦВК «Экспоцентр»,Москва'},
     {img:"./assets/images/news1.jpg", newsDate:'15.09.2021 | 20:21',newsDesc:'С 7-10 июня состоялась выставка «Электро-2021» в ЦВК «Экспоцентр»,Москва'},]
    
    setNewsData([...newsData,...getnewsData])
  }
  return (
    //  NEWS 
      <div id="news">
        <div class="section_title_wrap">
          <Link to='/news' class="section_title">Новости</Link>
          <div class="section_title_underline"></div>
        </div>

        <div class="news_list">
            {newsData.map((item, index)=>{
              return <NewsImage img={item.img} newsDate={item.newsDate} newsDesc={item.newsDesc} key={index}/>
            })}
        </div>
        <div className={'news_btn_wrapper'}>
              <div onClick={addNewsData} className={'news_btn'}>
                  <p>Показать ещё</p>
              </div>
        </div>
      </div> 
  )
}

export default ThreeImageComponent;
