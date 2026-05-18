const QuestionCard = ({ question, number }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-5 hover:border-violet-500/50 transition-all group">
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center font-semibold text-sm flex-shrink-0">
          {number}
        </div>
        <p className="text-slate-200 leading-relaxed group-hover:text-white transition">
          {question}
        </p>
      </div>
    </div>
  );
};

export default QuestionCard;