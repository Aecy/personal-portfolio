import React from 'react'

import './testimonial.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination} from "swiper/modules"
import { TestimonialData } from "../../data/TestimonialData.jsx";
import Section from "../../helpers/section";

export default function Testimonial () {
  return (
    <section className="testimonial container section">

      <Section title="Mes clients" />

      <Swiper
        className="testimonial__container"
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48
          }
        }}
        modules={[Pagination]}
      >
        {TestimonialData.map(({id, image, title, description}) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img"/>
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
