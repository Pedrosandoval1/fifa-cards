import s from "../style.module.css";

const Buttons = ({ nations, filterNations }) => {
  return (
    <>
      {/* {children} */}
      <div id="button" className={s.div_button}>
        {nations.map((data) => (
          <button
            className={s.buttons}
            type="button"
            onClick={() => filterNations(data)}
            key={data}
          >
            {data}
          </button>
         
        ))}
      </div>
    </>
  );
};

export default Buttons;
