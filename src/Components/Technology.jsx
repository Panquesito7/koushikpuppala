/** @format */

import React from 'react'
import { Chip } from '@material-ui/core'
import { VerifiedUserTwoTone } from '@material-ui/icons'
import { TechData } from '../Data/Technology'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'

import '../Stylesheets/Technology.css'

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay, EffectCoverflow, Pagination])

class Technology extends React.Component {
	shouldComponentUpdate() {
		return false
	}
	render() {
		return (
			<div>
				<section id='tech' className='services'>
					<div className='container'>
						<div className='section-title'>
							<h2>Technologies</h2>
						</div>
						<Swiper
							effect={'coverflow'}
							centeredSlides
							slidesPerView={'auto'}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							pagination={{
								clickable: true,
							}}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							className='mySwiper'>
							{TechData.map((e) => {
								return (
									<SwiperSlide key={e.Id}>
										<div className='swiper'>
											<img
												src={e.ImageUrl}
												alt={e.Name}
												width={300}
												height={300}
											/>
											<h3>
												{e.Name}
												<br />
												{e.Using ? (
													<Chip
														variant='outlined'
														color='secondary'
														size='small'
														label='Active in Projects'
														icon={<VerifiedUserTwoTone />}
													/>
												) : (
													''
												)}
											</h3>
										</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</section>
			</div>
		)
	}
}

export default Technology
