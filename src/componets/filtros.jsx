import s from "../style.module.css";
// import useModal from "./useModal";


const Filtro = ({ children }) => {
  // const [isOpenModal1,openModal1] = useModal(false);
  return (
    <>
    <div>
      <div  className={s.filtros_button}> FILTROS ≡</div>
      <div >{children}</div>
    </div>
    </>
  );
};

export default Filtro;
