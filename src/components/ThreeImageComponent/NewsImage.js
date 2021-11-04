import React from 'react'

function NewsImage({img,newsDate,newsDesc}) {
    return (
        <>
        <div class="news_card">
            <div class="news_img">
              <img src={img} alt="" />
            </div>
            <div class="news_date">{newsDate}</div>
            <p class="news_desc">
              {newsDesc}
            </p>
        </div>
            
        </>
    )
}

export default NewsImage
