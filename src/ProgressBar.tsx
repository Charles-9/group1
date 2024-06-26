import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="relative w-full h-8 bg-white bg-opacity-50 rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-accent rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-semibold">
          {current} / {total}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
