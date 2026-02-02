import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface SchoolPulseProps {
  data: Array<{ name: string; value: number }>;
}

const SchoolPulse: React.FC<SchoolPulseProps> = ({ data }) => {
  return (
    <section className="px-4 mb-4">
      <div className="w-full bg-white dark:bg-card-dark rounded-2xl p-5 shadow-soft border border-transparent dark:border-gray-800 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-text-main-light dark:text-white">School Pulse</h2>
            <span className="text-xs font-medium text-text-sec-light dark:text-text-sec-dark">Overall Sentiment & Engagement</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20">
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold text-green-700 dark:text-green-400">Stable</span>
          </div>
        </div>

        <div className="h-40 w-full relative mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPulse" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2b8cee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2b8cee" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }}
                dy={10}
              />
              <YAxis hide domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  borderRadius: '12px',
                  border: 'none',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2b8cee"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorPulse)"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default SchoolPulse;
