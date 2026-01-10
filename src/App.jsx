import css from "./App.module.css";
import { useState, useEffect } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  //hem feedback hem de options bileşenlerine iletmek için durumu burada tutuyoruz.
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-feedback");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  //state nerede tanımlanmışsa, onu güncelleyen fonksiyon da orada tanımlanmalıdır.
  const updateFeedback = (feedbackType) => {
    setValues({
      ...values, //eski değerleri koruyoruz, spread.
      [feedbackType]: values[feedbackType] + 1, //sadece gelen türü bularak +1 yapıyoruz.
    });
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const totalPercentage = values.good + values.bad;

  const positiveFeedback =
    totalPercentage > 0 ? Math.round((values.good / totalPercentage) * 100) : 0;

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(values));
  }, [values]);

  return (
    <div className={css.container}>
      <Description />
      <div>
        {/* updateFeedback fonksiyonunu 'prop' olarak gönderiyoruz çünkü butonlar başka bir dosyada. */}
        <Options
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      </div>
      <div>
        {/* 'values' objesini 'prop' olarak gönderiyoruz çünkü sayılar bu dosyada değil. */}
      </div>
      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;
