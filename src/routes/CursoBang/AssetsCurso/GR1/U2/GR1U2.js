import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "../../../estiloSwiper.css";
import "../../GR0/U3/estiloModalU3.css";
import boton from "./botonAbrir.png";
import Slide1 from "./Slide1.jpg";
import Slide2 from "./Slide2.jpg";
import Slide3 from "./Slide3.jpg";
import Slide4 from "./Slide4.jpg";
import Slide5 from "./Slide5.jpg";
import Slide6 from "./Slide6.jpg";
import Slide7 from "./Slide7.jpg";
import Slide8 from "./Slide8.jpg";
import Slide9 from "./Slide9.jpg";
import Slide10 from "./Slide10.jpg";
import Slide11 from "./Slide11.jpg";
import audioCarmel from "./Audios/Carmel.mp3";
import audioCesia from "./Audios/Cesia.mp3";
import audioCori from "./Audios/Cori.mp3";
import audioCrispi from "./Audios/Crispi.mp3";
import audioCristal from "./Audios/Cristal.mp3";
import MODALSLIDE5 from "./modalSlide5";

const GR1U2 = ({}) => {
  return (
    <>
      <Swiper
        autoHeight={true}
        navigation={true}
        modules={[Navigation]}
        className="Swipersito animate__animated animate__fadeIn"
      >
        <SwiperSlide>
          <img src={Slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="z-[1] audioCarmel">
            <audio controlsList="nodownload" controls id="audio">
              <source src={audioCarmel} type="audio/mp3" />
            </audio>
          </div>
          <img src={Slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide11} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR1U2;
