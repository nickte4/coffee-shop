import Question from "../components/Question";
import questions from "../data/questions.js";

export default function FAQ() {
  document.title = "Untitled Coffee | FAQ";
  const questionElems = questions.map((question) => {
    return (
      <>
        <Question {...question} />
      </>
    );
  });

  return (
    <>
      <div className="pt-24 h-max flex flex-col justify-center items-center">
        <h1 className="my-10 text-6xl ml-10">Frequently Asked Questions</h1>
        {questionElems}
      </div>
    </>
  );
}
