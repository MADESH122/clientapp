const SkillTag = ({ skill }) => {
  return (
    <div className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-violet-500 transition-all px-6 py-4 rounded-2xl flex items-center gap-3 cursor-pointer">
      <span className="text-green-400 text-xl">✓</span>
      <span className="font-medium">{skill}</span>
    </div>
  );
};

export default SkillTag;