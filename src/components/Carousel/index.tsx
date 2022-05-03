import { Navigation, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Slide } from './styles'

const breakpoints: SwiperOptions['breakpoints'] = {
  320: {
    slidesPerView: 2,
    spaceBetween: 16
  },
  480: {
    slidesPerView: 2.5,
    spaceBetween: 18
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 24
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 32
  }
}

export const Carousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} breakpoints={breakpoints}>
      <SwiperSlide>
        <Slide backgroundURL="https://images.unsplash.com/photo-1643101810683-9b4ba3b7adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60">
          <span>NSN#001</span>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide backgroundURL="https://images.unsplash.com/photo-1643101810683-9b4ba3b7adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60">
          <span>NSN#001</span>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide backgroundURL="https://images.unsplash.com/photo-1643101810683-9b4ba3b7adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60">
          <span>NSN#001</span>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide backgroundURL="https://images.unsplash.com/photo-1643101810683-9b4ba3b7adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60">
          <span>NSN#001</span>
        </Slide>
      </SwiperSlide>
    </Swiper>
  )
}
