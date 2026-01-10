//App'in gönderdiği prop'u yakalıyoruz.
import css from "./Options.module.css";
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      {/* good, neutral, bad feedback type. arrow fonksiyon kullandık */}
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={`${css.button} ${css.resetBtn}`}
          onClick={() => resetFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
