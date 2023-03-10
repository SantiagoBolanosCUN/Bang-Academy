import React from "react";
import "../components/libreriaOrion.css";
import { history } from "../components/History";
import { useState } from "react";
import Modal from "../components/modal";
import volveMini from "../assets/volverMini.png";
import estrella from "./Estrella.png";
import "../../src/components/fondoEstrellas.css";



export default function LibreriaOrion() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const [numeroSlide, setNumeroSlide] = useState(0);
  const [descripcionSlide, setDescripcionSlide] = useState(0);

  const clicked = (a, b) => {
    setNumeroSlide(a);
    setModalOn(true);
    setDescripcionSlide(b);
  };
  function onClickHandler() {
    history.push("/Home");
  }

  return (
    <>
      <section className="fondoConstelacion">
         
        <div className="grid place-items-center min-h-screen" >
          {/* conditionally display the result of the action if user confirms  */}
          {choice && <div className="flex justify-center"></div>}

          {modalOn && (
            <Modal
              setModalOn={setModalOn}
              setChoice={setChoice}
              numeroSlide={numeroSlide}
              descripcionSlide={descripcionSlide}
            />
          )}
          <div className="absolute top-10 left-10 sm:top-4 sm:left-20 hover:scale-125 mt-10 z-10">
            <button>
              <img
                src={volveMini}
                onClick={onClickHandler}
                alt="image1"
                className="h-[40px] sm:h-[50px]"
              />
              <h1 className="pt-1 text-white">
                Inicio
              </h1>
            </button>
          </div>

          <div id="estrella1" className="hover:scale-150">
            <button id={2} onClick={() => clicked(2, "Slide 3")}>
              <img
              className=""
                src={estrella}
                alt="image1"
              />
            </button>
          </div>

          <div id="estrella2" className="hover:scale-150">
            <button id={1} onClick={() => clicked(1, "Slide 2")}>
              <img
                src={estrella}
                alt="image1"
                
              />
            </button>
          </div>

          <div id="estrella3" className="hover:scale-150">
            <button id={5} onClick={() => clicked(5, "Slide 6")}>
              <img
                src={estrella}
                alt="image1"
                
              />
            </button>
          </div>

          <div id="estrella4" className="hover:scale-150">
            <button id={3} onClick={() => clicked(3, "Slide 4")}>
              <img
                src={estrella}
                alt="image1"
                
              />
            </button>
          </div>

          <div id="estrella5" className="hover:scale-150">
            <button id={4} onClick={() => clicked(4, "Slide 5")}>
              <img
                src={estrella}
                alt="image1"
               
              />
            </button>
          </div>

          <div id="estrella6" className="hover:scale-150">
            <button id={0} onClick={() => clicked(0, "Slide 1")}>
              <img
                src={estrella}
                alt="image1"
                
              />
            </button>
          </div>

          <div id="estrella7" className="hover:scale-150">
            <button id={7} onClick={() => clicked(7, "Slide 8")}>
              <img
                src={estrella}
                alt="image1"
                
              />
            </button>
          </div>

          <div id="estrella8" className="hover:scale-150">
            <button id={8} onClick={() => clicked(8, "Slide 9")}>
              <img
                src={estrella}
                alt="image1"
               
              />
            </button>
          </div>

          <div id="estrella9" className="hover:scale-150">
            <button id={9} onClick={() => clicked(9, "Slide 10")}>
              <img
                src={estrella}
                alt="image1"
                
              />
            </button>
          </div>

          <div id="estrella10" className="hover:scale-150">
            <button id={10} onClick={() => clicked(10, "Slide 11")}>
              <img
                src={estrella}
                alt="image1"
                
              />
            </button>
          </div>
        </div>
        
      </section>
    </>
  );
}
