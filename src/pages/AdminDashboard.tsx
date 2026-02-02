import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Greeting from '../components/Greeting';
import SchoolPulse from '../components/SchoolPulse';
import MetricCard from '../components/MetricCard';
import TodayFocus from '../components/TodayFocus';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard: React.FC = () => {
  const [academicTrend, setAcademicTrend] = useState("Math up 2%");
  const [staffCapacity, setStaffCapacity] = useState(98);
  const [isUpdating, setIsUpdating] = useState(false);
  const [pulseData, setPulseData] = useState([
    { name: 'Mon', value: 65 },
    { name: 'Tue', value: 45 },
    { name: 'Wed', value: 85 },
    { name: 'Thu', value: 35 },
    { name: 'Fri', value: 90 },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        // Randomly update metrics
        const mathChange = (Math.random() * 5).toFixed(1);
        setAcademicTrend(`Math up ${mathChange}%`);

        const capacityChange = 95 + Math.floor(Math.random() * 5);
        setStaffCapacity(capacityChange);

        // Update pulse data
        setPulseData(prev => {
          const newData = [...prev];
          newData[newData.length - 1] = {
            ...newData[newData.length - 1],
            value: 70 + Math.floor(Math.random() * 30)
          };
          return newData;
        });

        setIsUpdating(false);
      }, 500);
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 pb-8 relative"
    >
      <Header />

      <AnimatePresence>
        {isUpdating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-2 right-14"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-2">
        <Greeting />
        <SchoolPulse data={pulseData} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 mb-4">
          <MetricCard
            title="Academic & Wellbeing"
            icon="menu_book"
            trend={academicTrend}
            trendType="up"
            updateInfo="Updated just now"
          />
          <MetricCard
            title="Resources & Capacity"
            icon="groups_3"
            progress={staffCapacity}
            progressColor={staffCapacity < 96 ? "bg-orange-500" : "bg-purple-500"}
            trend={staffCapacity > 97 ? "Stable" : "Near Capacity"}
            trendType={staffCapacity > 97 ? "neutral" : "down"}
            secondaryInfo={staffCapacity > 97 ? "2 Subs on site" : "1 Sub remaining"}
          />
        </div>

        <TodayFocus />
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
