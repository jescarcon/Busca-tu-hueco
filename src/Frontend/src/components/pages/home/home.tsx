//#region imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../../utils/navbar/navbar';
import friends from '/images/home/friends.jpg';
import logo from '/images/home/logo.png';
import tabla from '/images/home/tabla.jpg';
import searchIcon from '/images/home/search-icon.png';
import { CustomFooter } from '../../utils/footer/footer';
import './home.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//#endregion

export default function Home() {
    //#region Variables
    const navigate = useNavigate();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    //#endregion

    //#region Logic


    //#endregion


    return (
        <div className='home-container'>
            <div className='navbar-component'><CustomNavbar /></div>
            <div className='home-body'>

                <div className='body-intro'>
                    <img src={friends} alt='friends.jpg' className='body-intro-image' />
                    <div className='body-intro-text'>Porque una imagen vale más que mil previsiones</div>
                </div>

                <div className='body-search'>
                    <div className='body-search-header'>
                        <div className='body-search-header-icon'>
                            <img src={searchIcon} alt='search-icon.png' />
                        </div>
                        <div className='body-search-header-title'>Encuentra las playas de tu provincia</div>
                    </div>
                    <div className='body-search-input'>
                        <input type='text' placeholder='Ej: Andalucía'></input>
                    </div>
                    <div className='body-search-button-container'>
                        <button className='body-search-button' onClick={() => console.log('Buscar')}>Buscar</button>
                    </div>
                </div>

                <div className='body-news'>
                    <div className='body-news-header'>
                        <h1 className='body-news-header-title'>Novedades</h1>
                        <p className='body-news-header-subtitle'>Seguimos creciendo por ti</p>
                    </div>

                    <Carousel
                        swipeable={true}
                        draggable={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={6000}
                        keyBoardControl={true}
                        transitionDuration={6000}
                        containerClass="carousel-container"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <img src="https://picsum.photos/400/250?random=1" />
                        <img src="https://picsum.photos/400/250?random=2" />
                        <img src="https://picsum.photos/400/250?random=3" />
                        <img src="https://picsum.photos/400/250?random=4" />
                        <img src="https://picsum.photos/400/250?random=5" />
                    </Carousel>
                </div>


                <div className='body-contact'>
                    <img src={tabla} alt='tabla.jpg' className='body-contact-img' />
                    <h1 className='body-contact-title'>Anúnciate con nosotros</h1>
                    <button className='body-contact-button'>Te esperamos aquí</button>
                    <img src={logo} alt='logo.jpg' className='body-contact-logo' />
                </div>
            </div>
            <div className='footer-component'><CustomFooter /></div>
        </div>
    );
}
