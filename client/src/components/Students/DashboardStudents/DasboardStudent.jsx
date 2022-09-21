import React, { useEffect } from "react";
import rocket from "../../../assets/media/cohete.png";
import { useDispatch, useSelector } from "react-redux";
import {
  clearStateModules,
  getAllLessons,
  getAllModules,
} from "../../../redux/actions/index";
import SearchBar from "../../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import img from "./slack_logo_icon.png";
import imgSlides from "./slide.png";
import swal from "sweetalert";
import slides from "../DashboardStudents/Slides_Henry.pdf";

const DasboardStudent = () => {
  const modules = useSelector((state) => state.modules.modules);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllModules());
    dispatch(getAllLessons());
    return () => dispatch(clearStateModules());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getAllLessons());
    dispatch(getAllModules());
  };

  // function sweetAttendance() {
  //   swal({
  //     title: "ASISTENCIAS",
  //     text: "Tu asistencia se calcula en función de todas las veces que hubo SUP y que tendrías que haber participado en el mismo. Esto incluye cohortes de las que hubieras migrado.(Estamos en plena transición a esta herramienta, por lo que los valores pueden ser inferiores a los reales, no te preocupes)",
  //   });
  // }
  function sweetCheckpoints() {
    swal({
      text: "Ha ocurrido un error, contacta a tu instructor.",
    });
  }
  // function sweetSlides() {
  //   swal("SLIDES", {
  //     buttons: { descarga: "DESCARGAR", navegador: "VISTA PREVIA" },
  //   }).then((value) => {
  //     switch (value) {
  //       case "descarga":
  //         {
  //           var a = document.createElement("a");
  //           a.href = slides;
  //           a.download = "slides-Henry.pdf";
  //           a.click();
  //           window.URL.revokeObjectURL(slides);
  //         }
  //         break;
  //       case "navegador":
  //         swal("Serás redireccionado a las slides", { buttons: false });
  //         setTimeout(() => {
  //           var a = document.createElement("a");
  //           a.href = slides;
  //           a.click();
  //           window.URL.revokeObjectURL(slides);
  //         }, 1500);
  //       default:
  //         console.log("hola");
  //     }
  //   });
  // }

  return (
    <div>
      {" "}
      <nav className="nav__links">
        <ul>
          {modules
            .sort((a, b) => {
              const aDate = new Date(a.createdAt);
              const bDate = new Date(b.createdAt);
              return aDate - bDate;
            })
            .map((obj, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={() => handleClick()}
                    key={index}
                    to={`/module/${obj.id}`}
                  >
                    <section className="sectiom__title-modulo">
                      <h1>{obj.name}</h1>
                    </section>
                  </Link>
                </li>
              );
            })}
          <img className="nav__rocket" src={rocket} alt="" />
        </ul>

        {/* </ul> */}
        <div>
          <SearchBar />
        </div>
        {/* las asistencias seran mostradas x/total */}

        {/* <div className="search">
<input className="search-Input" type="text"  placeholder="Buscar..."/>
<Link to="/" className="link-Search"><img className="icon-Search" src={lupa} alt=""/></Link>
</div> */}
      </nav>
      {/* <div>
        <button onClick={sweetSlides}>
          SLIDES
          <img src={imgSlides} />
        </button>
      </div> */}
      {/* <button onClick={sweetAttendance}>ASISTENCIAS AL SUP</button> */}
    </div>
  );
};

export default DasboardStudent;
