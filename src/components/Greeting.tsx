import React from 'react';

const Greeting: React.FC = () => {
  const now = new Date();
  const hour = now.getHours();

  let greeting = "Good Morning";
  if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
  if (hour >= 17) greeting = "Good Evening";

  const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);

  return (
    <section className="px-6 py-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold leading-tight text-text-main-light dark:text-white">
          {greeting}, Sarah.
        </h1>
        <p className="text-base font-medium text-text-sec-light dark:text-text-sec-dark">
          Here’s the pulse for today, {dateString}.
        </p>
      </div>
    </section>
  );
};

export default Greeting;
