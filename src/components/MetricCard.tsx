import React from 'react';

interface MetricCardProps {
  title: string;
  icon: string;
  value?: string;
  trend?: string;
  trendType?: 'up' | 'down' | 'neutral';
  updateInfo?: string;
  progress?: number;
  progressColor?: string;
  secondaryInfo?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  icon,
  value,
  trend,
  trendType = 'neutral',
  updateInfo,
  progress,
  progressColor = 'bg-primary',
  secondaryInfo
}) => {
  return (
    <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-soft border border-transparent dark:border-gray-800 flex flex-col justify-between h-44 active:scale-[0.98] transition-transform duration-200">
      <div className="flex justify-between items-start">
        <div className={`size-10 rounded-xl flex items-center justify-center ${title.includes('Academic') ? 'bg-blue-50 dark:bg-blue-900/20 text-primary' : 'bg-purple-50 dark:bg-purple-900/20 text-purple-500'}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-text-main-light dark:text-white leading-tight text-sm">{title}</h3>

        {value && <p className="text-xl font-bold">{value}</p>}

        {progress !== undefined && (
          <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 mb-1 overflow-hidden">
            <div className={`${progressColor} h-full rounded-full transition-all duration-1000`} style={{ width: `${progress}%` }}></div>
          </div>
        )}

        <div className="flex items-center gap-1 mt-1">
          {trend && (
            <>
              <span className={`material-symbols-outlined text-[16px] ${trendType === 'up' ? 'text-green-600 dark:text-green-400' : trendType === 'down' ? 'text-orange-600' : 'text-gray-400'}`}>
                {trendType === 'up' ? 'trending_up' : trendType === 'down' ? 'trending_down' : 'remove'}
              </span>
              <p className={`text-[10px] font-bold ${trendType === 'up' ? 'text-green-700 dark:text-green-400' : trendType === 'down' ? 'text-orange-700' : 'text-text-sec-light'}`}>
                {trend}
              </p>
            </>
          )}
        </div>

        {updateInfo && <p className="text-[10px] text-text-sec-light dark:text-text-sec-dark mt-0.5">{updateInfo}</p>}
        {secondaryInfo && <p className="text-[10px] text-text-sec-light dark:text-text-sec-dark">{secondaryInfo}</p>}
      </div>
    </div>
  );
};

export default MetricCard;
