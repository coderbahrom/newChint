import {Link} from 'react-router-dom'
import './news.css'

function ThreeImageComponent() {
  return (
    //  NEWS 
      <div id="news">
        <div class="section_title_wrap">
          <Link to='/news' class="section_title">Новости</Link>
          <div class="section_title_underline"></div>
        </div>

        <div class="news_list">
          <div class="news_card">
            <div class="news_img">
              <img src="./assets/images/news1.jpg" alt="" />
            </div>
            <div class="news_date">15.09.2021 | 20:21</div>
            <p class="news_desc">
              С 7-10 июня состоялась выставка «Электро-2021» в ЦВК «Экспоцентр»,
              Москва
            </p>
          </div>

          <div class="news_card">
            <div class="news_img">
              <img src="./assets/images/news2.jpg" alt="" />
            </div>
            <div class="news_date">15.09.2021 | 20:21</div>
            <p class="news_desc">
              С 7-10 июня состоялась выставка «Электро-2021» в ЦВК «Экспоцентр»,
              Москва
            </p>
          </div>

          <div class="news_card">
            <div class="news_img">
              <img src="./assets/images/news.jpg" alt="" />
            </div>
            <div class="news_date">15.09.2021 | 20:21</div>
            <p class="news_desc">
              С 7-10 июня состоялась выставка «Электро-2021» в ЦВК «Экспоцентр»,
              Москва
            </p>
          </div>
        </div>
        <div className={'news_btn_wrapper'}>
              <div className={'news_btn'}>
                  <p>Показать ещё</p>
              </div>
        </div>
      </div> 
  )
}

export default ThreeImageComponent;
