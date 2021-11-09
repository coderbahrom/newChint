import Header from '../Navbar/Header'
import ThreeImageComponent from '../ThreeImageComponent/ThreeImageComponent';
import Footer from '../Footer/Footer';
import ProductsHover1 from '../Hovers/ProductHover1/ProductsHover'
import ProductsHover2 from '../Hovers/ProductHover1/ProductsHover2';
import ProductsHoverInner from '../ProductsHover_inner/ProductsHover_inner';
import {Switch,Route,} from 'react-router-dom'
import "./search.css"
import './showcase.css'
import './products.css'
import './custom_radio_lang.css'
import './custom_radio_products.css'
import './advantages.css'
import './Homepage.css'
import Map from './Map';
import ChintWorld6 from '../ChintWorld/ChintWorld6/ChintWorld6';
import ChintWorld7 from '../ChintWorld/ChintWorld7/ChintWorld7';
import ChintInWorld3 from '../ChintWorld/ChintInWorld3/ChintInWorld3';
import Chintworld4 from '../ChintWorld/ChintWorld4/ChintWorld4'
import ChintWorld5 from '../ChintWorld/ChintWorld5/ChintWorld5'
import ChintWorld2 from '../ChintWorld/ChintWorld2/ChintWorld2'
import ChintWorld8 from '../ChintWorld/ChintWorld8/ChintWorld8'
import ChintWorld9 from '../ChintWorld/ChintWorld9/ChintWorld9';
import ChintWorld from '../ChintWorld/ChintWorld'
import ProductsHoverInner2 from '../ProductsHover_inner2/ProductsHoverInner2'
import ProductsHoverInner3 from '../ProductsHoverInner3/ProductsHoverInner3'
import slideimage1 from '../assets/images/slideimage1.png'
import slideimage2 from '../assets/images/slideimage2.png'
import slideimage3 from '../assets/images/slideimage3.png'
import slideimage4 from '../assets/images/slideimage4.png'
import Vertorbottom from '../assets/images/Vectorbuttom.png'
import skachat1 from '../assets/icons/skachat1.svg'
import skachat1_2 from '../assets/icons/skachat1_2.svg'
import location1 from '../assets/icons/location1.svg'
import location1_2 from '../assets/icons/location1_2.svg'
import SlideData from './SlideData';
import ProductBox from './ProductBox';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { ProductBoxData } from './ProductBoxData';
import {useState} from 'react'
import SwiperCore, {
  Pagination,Navigation,Mousewheel,Keyboard
} from 'swiper';
SwiperCore.use([Pagination,Navigation,Mousewheel,Keyboard,Autoplay]);


function HomePage(){
  const [proActive, setProActive] = useState({stateActive1:false,stateActive2:false,stateActive3:false});
  const [productMainData, setProductMainData] = useState(ProductBoxData)
  const [productMainData2, setProductMainData2] = useState(ProductBoxData)
console.log(setProductMainData2)
  function filterFun(filterVal){
      const FilteredData = productMainData2.filter((item,index)=>{
          return filterVal===item.filter
      })
      setProductMainData([...FilteredData])
  }

 //product active
 const styleProActive = {
    color:'white',
    border:'1.5px solid #FFFFFF',
  } 
  
  function proActiveFun1(){
      setProActive({stateActive1:true,stateActive2:false,stateActive3:false})
      filterFun("f1")
  }
  function proActiveFun2(){
      setProActive({stateActive1:false,stateActive2:true,stateActive3:false})
      filterFun("f2")
  }
  function proActiveFun3(){
      setProActive({stateActive1:false,stateActive2:false,stateActive3:true})
      filterFun("f3")
  }



  return (
  <>
  
  <Switch>
  <Route exact path="/">
  <div className="homepage_main_container">
    <Header/>
  </div>

  {/* SHOWCASE  */}
  <div className='homepage_showcase'>
      <Swiper 
      cssMode={true} 
      navigation={true}
      mousewheel={true}
      keyboard={true}
      spaceBetween={30}
      pagination={{"clickable": true}}
      className="mySwiper"
      autoplay={{ delay: 5000 }}
      >
          <SwiperSlide>
              <SlideData 
              left_title='Официальный дистрибьютор  в Узбекистане' 
              slideImageNone={{display:'none'}}
              />
          </SwiperSlide>
          <SwiperSlide>
              <SlideData
               left_title='Автоматический выключатель' 
               right_imge={slideimage1}
               right_image_width_height={{width:'21.9vw',height:'19.9vw'}}
              />
          </SwiperSlide>
          <SwiperSlide>
          <SlideData
               left_title='Автоматические выключатели в литом корпусе серий' 
               right_imge={slideimage2}
               right_image_width_height={{width:'22.9w',height:'27.5vw'}}
              />
          </SwiperSlide>
          <SwiperSlide>
          <SlideData 
             left_title='Откидной выключатель-разъединитель серии &nbsp; NHR17' 
             right_imge={slideimage3}
             right_image_width_height={{width:'25.9w',height:'25.1vw'}}
              />
          </SwiperSlide>
          <SwiperSlide>
              <SlideData
               left_title='Откидной выключатель-разъединитель серии &nbsp; NHR17' 
               right_imge={slideimage4}
               right_image_width_height={{width:'25.3vw',height:'23.37vw'}}
              />
          </SwiperSlide>
      </Swiper>
      <img className='vectorbuttom' src={Vertorbottom} alt='rasm'/>
    </div>
    <div className='hompage_content'>
        <div className='hompage_content_inner'>
            <ThreeImageComponent/>
        </div>
    </div>
       {/* PRODUCTS  */}
    <div className='homepage_product'>
        <div className='homepage_product_container'>
            <div className='homepage_pro_contaier_title'>
                  <h1>Продукция</h1>
                  <span></span>
            </div>
            <div className='homepage_pro_contaier_menyu'>
                <div style={proActive.stateActive1 ? styleProActive : {}} onClick={proActiveFun1} className='homepage_pro_contaier_men1'>
                    <h6>
                        Низковольтное оборудование
                    </h6>
                </div>
                <div style={proActive.stateActive2 ? styleProActive : {}} onClick={proActiveFun2} className='homepage_pro_contaier_men2'>
                    <h6>
                        Оборудование <br/>распределения и передачи
                    </h6>
                </div>
                <div style={proActive.stateActive3 ? styleProActive : {}} onClick={proActiveFun3} className='homepage_pro_contaier_men3'>
                    <h6>
                        Электроустановочные <br/>изделия
                    </h6>
                </div>
            </div>
            <div className="homepage_pro_contaier_box">
                {productMainData.map((item, index) => {
                  return (
                    <ProductBox
                      key={index}
                      images={item.images}
                      pro_box_title={item.title1}
                      imghidden={item.imghidden}
                    />
                  );
                })}   
            </div>

            <div className='homepage_pro_down_loc'> 
                <div className='homepage_pro_download'> 
                        <object
                        className='home_skachat1'
                        data={skachat1}
                        type="image/svg+xml"
                        > </object> 
                        <object
                        className='home_skachat1_2'
                        data={skachat1_2}
                        type="image/svg+xml"
                        > </object> 
                       
                        <p>Cкачать каталог</p>
                        
                </div>
                <div className='homepage_pro_location'>
                        <object
                        className='home_location1'
                        data={location1}
                        type="image/svg+xml"
                        > </object>
                        <object
                        className='home_location1_2'
                        data={location1_2}
                        type="image/svg+xml"
                        > </object>  
                        <p>Где купить</p>
                </div>        
            </div>

        </div>
    </div>
     
    <div class="homepage_main_container">
      {/* ADVANTAGES  */}
       <div id="advantages">
          <div class="section_title_wrap">
            <h1 class="section_title">Преимущества</h1>
            <div class="section_title_underline"></div>
          </div>

          <div class="showcase">
            <div class="showcase_content">
              <div class="stat_wrap">
                <div class="stat_rect"></div>
                <h1 class="stat_number">32 000</h1>
                <span class="stat_title">Сотрудников</span>
              </div>
              <div class="stat_wrap">
                <div class="stat_rect"></div>
                <h1 class="stat_number">33</h1>
                <span class="stat_title">Года на рынке </span>
              </div>
              <div class="stat_wrap">
                <div class="stat_rect"></div>
                <h1 class="stat_number">47 000</h1>
                <span class="stat_title"
                  >Изделий различного <br />
                  назначения</span
                >
              </div>
              <div class="stat_wrap">
                <div class="stat_rect"></div>
                <h1 class="stat_number">320</h1>
                <span class="stat_title"
                  >Сертификатов <br />
                  качества</span
                >
              </div>
            </div>
          </div>

          <div class="advantage_cards">
            <div class="advantage_cards__card">
              <div class="advantage_cards_rect">
                <object
                  class="advantage_cards__icon1"
                  data="./assets/icons/setting-tools.svg"
                  type="image/svg+xml"
                > </object>
                <object
                  class="advantage_cards__icon2"
                  data="./assets/icons/setting-tools2.svg"
                  type="image/svg+xml"
                > </object>
              </div>
              <h1 class="advantage_card_title">Поддержка</h1>
              <ul>
                <li><span class="advantage_card_sm_rect"></span> Скачать</li>
                <li><span class="advantage_card_sm_rect"></span> Видеоуроки</li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Техническое
                  консультирование
                </li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Программное
                  обеспечение
                </li>
              </ul>
            </div>
            <div class="advantage_cards__card">
              <div class="advantage_cards_rect">
                <object
                  class="advantage_cards__icon1"
                  data="./assets/icons/setting-tools.svg"
                  type="image/svg+xml"
                > </object>
                <object
                  class="advantage_cards__icon2"
                  data="./assets/icons/setting-tools2.svg"
                  type="image/svg+xml"
                > </object>
              </div>
              <h1 class="advantage_card_title">О компании</h1>
              <ul>
                <li><span class="advantage_card_sm_rect"></span> CHINT в мире</li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Наше производство
                </li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Сотрудничество
                </li>
              </ul>
            </div>
            <div class="advantage_cards__card">
              <div class="advantage_cards_rect">
                <object
                  class="advantage_cards__icon1"
                  data="./assets/icons/hand_shake.svg"
                  type="image/svg+xml"
                > </object>
                <object
                  class="advantage_cards__icon2"
                  data="./assets/icons/hand_shake2.svg"
                  type="image/svg+xml"
                > </object>
              </div>
              <h1 class="advantage_card_title">Сотрудничество</h1>
              <ul>
                <li><span class="advantage_card_sm_rect"></span> Скачать</li>
                <li><span class="advantage_card_sm_rect"></span> Видеоуроки</li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Техническое
                  консультирование
                </li>
                <li>
                  <span class="advantage_card_sm_rect"></span> Программное
                  обеспечение
                </li>
              </ul>
            </div>
          </div>
        </div>
         
         {/* MAP  */}
          <Map/>
      </div>
      <Footer/>
     
       </Route>

         <Route exact path="/product-detail">
            <ProductsHover1/>
         </Route>
         <Route exact path="/catalog">
            <ProductsHover2/>
         </Route>
          <Route exact  path="/productHover1/products" >
             <ProductsHoverInner/>
         </Route>
         <Route exact  path="/productHover1/products/product-info" >
            <ProductsHoverInner2/>
         </Route>
    
         <Route exact  path="/chintworld" >
            <ChintWorld2/>
         </Route>
         <Route exact  path="/history" >
            <ChintWorld6/>
         </Route>
         <Route exact  path="/download" >
             <ChintWorld7/>
         </Route>
         <Route exact  path="/production" >
             <ChintInWorld3/>
         </Route>
         <Route exact  path="/cooperation" >
             <Chintworld4/>
         </Route>
         <Route exact  path="/news" >
             <ChintWorld5/>
         </Route>
         <Route exact  path="/support" >
             <ChintWorld8/>
         </Route>
         <Route exact  path="/tech-consult" >
            <ChintWorld9/>
         </Route>
         <Route exact  path="/about" >
            <ChintWorld/>
         </Route>
         <Route exact  path="/avtomaticheskiy" >
            <ProductsHoverInner3/>
         </Route>
        
     </Switch>       
    </>
  )
}

export default HomePage;