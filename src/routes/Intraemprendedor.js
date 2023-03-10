import { useState } from "react";
import volverMini from "../assets/volverMini.png";
import { history } from "../components/History";
import tituloIntraemprendedor from "../assets/tituloIntraemprendedor.png";
import aturitmo from "../assets/aturitmo.png";
import práctica from "../assets/práctica.png";
import preguntas from "../assets/preguntas.png";
import MODALPREGUNTAS from "./Modals/ModalPreguntas";
import MODALTALLER from "./Modals/ModalTaller";
import "../../src/components/fondoEstrellas.css";
import { Fragment } from "react";
import "../routes/CursoBang/CursoBang";

export default function Intraemprendedor() {
  const [openModal, setOpenModal] = useState(false);

  function onClickHandler() {
    history.push("/NebulosaInnova");
  }
  return (
    <Fragment>
      <section className="fondo">
        <div className="grid place-items-center min-h-screen z-0">
          <div className="absolute top-10 left-10 sm:top-10 sm:left-20 hover:scale-125">
            <button>
              <img
                src={volverMini}
                onClick={onClickHandler}
                alt="image1"
                className="h-[40px] sm:h-[50px]"
              />
              <h1 className="font-bold pt-1 text-white">Volver</h1>
            </button>
          </div>
          <div className="text-center sm:text-left p-4 max-w-5xl grid ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
              <div className="grid pt-24 sm:p-0  place-items-center   sm:col-span-3">
                <img
                  className="h-[90px] sm:h-[180px]"
                  src={tituloIntraemprendedor}
                  alt="Logo"
                />
              </div>
              <div className="grid justify-center sm:m-4">
                <a href="/CursoBang">
                  <img
                    className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                    src={aturitmo}
                    alt="Logo"
                  />
                </a>
              </div>

              <div className="relative grid justify-center sm:m-4">
                <div className="relative">
                  <button onClick={() => setOpenModal(true)}>
                    <img
                      className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                      alt="Logo"
                      src={preguntas}
                    />
                  </button>

                  <MODALPREGUNTAS
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                  />
                </div>
              </div>

              <div className="grid justify-center sm:m-4">
                <div className="relative">
                  <button onClick={() => setOpenModal(true)}>
                    <img
                      className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                      src={práctica}
                      alt="Logo"
                    />
                  </button>
                  <MODALTALLER
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
