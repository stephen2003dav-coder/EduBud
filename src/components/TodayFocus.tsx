import React from 'react';

const TodayFocus: React.FC = () => {
  return (
    <section className="px-4">
      <div className="bg-white dark:bg-card-dark rounded-2xl p-5 shadow-soft border border-transparent dark:border-gray-800 flex items-start gap-4 active:scale-[0.99] transition-transform duration-200">
        <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-2.5 shrink-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-orange-500">lightbulb</span>
        </div>
        <div className="flex-1 py-0.5">
          <h3 className="text-[10px] font-bold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider mb-1">Today's Focus</h3>
          <p className="text-text-main-light dark:text-white font-semibold text-sm leading-snug">Teacher Development Workshop</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="material-symbols-outlined text-[16px] text-text-sec-light dark:text-text-sec-dark">schedule</span>
            <span className="text-xs text-text-sec-light dark:text-text-sec-dark">2:00 PM - Main Hall</span>
          </div>
        </div>
        <div className="self-center">
          <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">chevron_right</span>
        </div>
      </div>
    </section>
  );
};

export default TodayFocus;
