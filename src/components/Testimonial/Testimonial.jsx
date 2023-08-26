import React from 'react'

import './testimonial.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination} from "swiper/modules"
import Section from "../../helpers/section";
import {testimonials} from "../../lib/data.jsx";

export default function Testimonial () {
  return (
    <section className="testimonial container section" id="testimonials">

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
            slidesPerView: 3,
            spaceBetween: 12
          }
        }}
        modules={[Pagination]}
      >
        {testimonials.map(({id, image, title, description}) => {
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
