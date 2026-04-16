import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Hourglass, Activity } from 'lucide-react';

const AgeCalculator = () => {
  const [timeLeft, setTimeLeft] = useState(calculateAge());

  function calculateAge() {
    const birthDate = new Date(2005, 0, 7, 12, 0, 0);
    const now = new Date();
    const diffMs = now - birthDate;

    // Total units
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    // Y/M/D Logic
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    return {
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
      years,
      months,
      days,
      currentSecond: now.getSeconds()
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateAge());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className={`p-4 rounded-xl bg-white shadow-sm border-l-4 ${color} flex items-center space-x-4`}>
      <div className="p-2 rounded-full bg-gray-50">
        <Icon size={24} className="text-gray-600" />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value.toLocaleString()}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-2xl shadow-inner">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Age Tracker</h2>
        <p className="text-gray-500 italic">Born: Jan 7, 2005 | 12:00 PM</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Precise Age */}
        <div className="md:col-span-2 p-6 bg-blue-600 rounded-xl text-white shadow-lg flex justify-between items-center">
          <div>
            <p className="text-blue-100 text-sm font-semibold uppercase">Current Age</p>
            <h3 className="text-3xl font-bold">
              {timeLeft.years}y {timeLeft.months}m {timeLeft.days}d
            </h3>
          </div>
          <Activity className="animate-pulse" size={40} />
        </div>

        {/* Breakdown */}
        <StatCard 
          icon={Calendar} 
          label="Total Days" 
          value={timeLeft.totalDays} 
          color="border-green-500" 
        />
        <StatCard 
          icon={Clock} 
          label="Total Hours" 
          value={timeLeft.totalHours} 
          color="border-purple-500" 
        />
        <StatCard 
          icon={Hourglass} 
          label="Total Minutes" 
          value={timeLeft.totalMinutes} 
          color="border-orange-500" 
        />
        <StatCard 
          icon={Activity} 
          label="Total Seconds" 
          value={timeLeft.totalSeconds} 
          color="border-red-500" 
        />
      </div>

      <p className="mt-6 text-center text-xs text-gray-400">
        Live counters update every second based on system time.
      </p>
    </div>
  );
};

export default AgeCalculator;