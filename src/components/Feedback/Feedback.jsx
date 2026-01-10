// NEDEN ({ values })?: App bileşeninden gelen güncel sayıları (prop) yakalıyoruz.
import css from "./Feedback.module.css";
const Feedback = ({ values, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      {/* NEDEN values.good ?: 
        Gelen veri bir objedir. Objenin içindeki spesifik alana nokta (.) ile ulaşıyoruz.
      */}
      <p className={css.feedbackValues}>Good: {values.good}</p>
      <p className={css.feedbackValues}>Neutral: {values.neutral}</p>
      <p className={css.feedbackValues}>Bad: {values.bad}</p>
      <p className={css.feedbackValues}>Total: {totalFeedback}</p>
      <p className={css.feedbackValues}>Positive: {positiveFeedback}</p>
    </div>
  );
};

export default Feedback;
