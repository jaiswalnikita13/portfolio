import HeroImg from '../assets/dev.png';
import { cards } from '../utils/Data';
import { v4 as uuid } from 'uuid';
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import './home.css';
import Card from '../components/card/Card';
import Portfolio1 from '../assets/project-slider-img-1.png';
import Portfolio2 from '../assets/project-slider-img-2.png';
import Portfolio3 from '../assets/project-slider-img-3.png';
import Portfolio4 from '../assets/project-slider-img-4.png';
import Portfolio6 from '../assets/project-slider-img-5.png';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
	const skillRef = useRef(null);
	const swiperRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateProgressbar();
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.5 }
		);

		observer.observe(skillRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		register();

		const params = {
			breakpoints: {
				280: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 3,
				},
			},
		};

		Object.assign(swiperRef.current, params);

		swiperRef.current.initialize();
	}, []);

	const animateProgressbar = () => {
		const progressBars = document.querySelectorAll('.skill__progress-line');

		progressBars.forEach((progressBar) => {
			const percent = progressBar.getAttribute('data-width');
			progressBar.style.width = `${percent}%`;
		});
	};
	return (
		<div className='container home'>
			<section className='hero-section' id='home'>
				<div className='hero-section__left'>
					<div className='hero-section__special-text'>
						Hello! I'm <br /> Nikita
					</div>
					<div className='hero-section__paragraph'>
						<h3>
							FullStack Developer specialised in MERN, Node, React, Next, Redux & Recoil.
						</h3>
					</div>
					<a href='/resume.pdf' download='resume.pdf' className='button'>
						Get Resume <FaDownload className='download-icon' />						
					</a>
				</div>
				<div className='hero-section__right'>
					<div className='hero-section__image'>
						<img src={HeroImg} alt='hero image' />
					</div>
				</div>
			</section>

			<section className='services' id='services'>
				<h3 className='section__label'>My Expertise</h3>
				<h2 className='section__title'>What I Do</h2>
				<div className='cards'>
					{cards?.map((card) => (
						<Card
							key={uuid()}
							icon={card?.icon}
							title={card?.title}
							features={card?.features}
						/>
					))}
				</div>
			</section>

			<section className='skill' id='skills' ref={skillRef}>
				<div className='skill__left'>
					<h3 className='section__label'>My Skills</h3>
					<h2 className='section__title'>Development Skill</h2>
					{/* <a href='/resume.pdf' download={'resume.pdf'} className='button'>
						Get Resume
					</a> */}
				</div>
				<div className='skill__right'>
					<div className='skill__wrapper'>
						<div className='skill__tag'>React, Next.js </div>
						<div className='skill__box'>
							<div className='skill__progress-line' data-width='95'></div>
							{/* <div className='skill__percentage'>95%</div> */}
						</div>
					</div>
					<div className='skill__wrapper'>
						<div className='skill__tag'>JavaScript, TypeScript, HTML, CSS</div>
						<div className='skill__box'>
							<div className='skill__progress-line' data-width='95'></div>
							{/* <div className='skill__percentage'>95%</div> */}
						</div>
					</div>
					<div className='skill__wrapper'>
						<div className='skill__tag'>Node.js, Express.js, MongoDB, MySQL</div>
						<div className='skill__box'>
							<div className='skill__progress-line' data-width='75'></div>
							{/* <div className='skill__percentage'>75%</div> */}
						</div>
					</div>
				</div>
			</section>
			<section className='testimonials' id='testimonials'>
				<h3 className='section__label'>Professional Experience</h3>
				<h2 className=' section__title'>3 + Years Of Experience</h2>
				<div className='testimonials__wrapper'>
					<swiper-container speed='500' ref={swiperRef} css-mode='true'>
						<swiper-slide>
							<div className='testimonials__card'>
								<div className='testimonials__text'>
									Associate React Developer
								</div>
								<div className='testimonials__author'>Exalogic Consulting</div>
								<div className='testimonials__author-title'>
									06/2022 – Present | Bengaluru
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div className='testimonials__card'>
								<div className='testimonials__text'>
									Associate Software Engineer
								</div>
								<div className='testimonials__author'>OpenXcell Technolab
								</div>
								<div className='testimonials__author-title'>
									06/2021 – 06/2022 | Ahmedabad
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div className='testimonials__card'>
								<div className='testimonials__text'>
									Intern
								</div>
								<div className='testimonials__author'>WebOsmotic Software Solution</div>
								<div className='testimonials__author-title'>01/2021 – 04/2021 | Surat</div>
							</div>
						</swiper-slide>
					</swiper-container>
				</div>
			</section>
			<section className='portfolio' id='portfolio'>
				<h3 className='section__label'>My Work</h3>
				<h2 className='section__title'>My Complete Projects</h2>
				<div className='portfolio__grid'>
					<div className='portfolio__card'>
						<img src={Portfolio1} alt='portfolio 1' />
						<div className='portfolio__card-title'>
							<a href='https://aqaarlanding.realcube.estate/' target="_blank">Aqaar </a>
						</div>
					</div>
					<div className='portfolio__card'>
						<img src={Portfolio2} alt='portfolio 2' />
						<div className='portfolio__card-title'>
							<a href='https://property.realcube.estate/' target="_blank">RealCube Property Portal </a>
						</div>
					</div>
					<div className='portfolio__card'>
						<img src={Portfolio3} alt='portfolio 3' />
						<div className='portfolio__card-title'>
							<a href='https://www.ict.ae/' target="_blank">International Capital Trading</a>
						</div>
					</div>
					<div className='portfolio__card'>
						<img src={Portfolio4} alt='portfolio 4' />
						<div className='portfolio__card-title'>
							<a href='https://www.anqa.io/mn/' target="_blank">Anqa</a>
						</div>
					</div>
					{/* <div className='portfolio__card'>
						<img src="" alt='portfolio 5' />
						<div className='portfolio__card-title'>
							<a href='https://property.realcube.estate/' target="_blank">
							NjangiPot
							</a>
						</div>
					</div> */}
					<div className='portfolio__card'>
						<img src={Portfolio6} alt='portfolio 6' />
						<div className='portfolio__card-title'>
							<a href='https://www.altavod.com/' target="_blank">Altavod</a>
						</div>
					</div>
				</div>
			</section>
			<section className='skill' id='contact'>
			<div className='skill__left'>
					<h3 className='section__label'>Get In Touch With Me</h3>
					<h2 className='section__title'>Lets make your Brand brilliant</h2>
				</div>
				<div className='skill__right'>
					<div className='skill__wrapper'>
						<div className='skill__tag'>Jaiswal Nikita </div>
						<div>
							<div className=''>FullStack Developer</div><br/>
							<div className=''>You have found my digital space. I am passionate about building excellent software that improves the lives of those around me.</div>
							<br/><div className=''>Phone : +91 7984628268</div><br/>
							<div className=''>Email : jaiswalniki7878@gmail.com</div>						
						</div>
					</div>
				</div>
				</section>
		</div>
	);
};

export default Home;
