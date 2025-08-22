import React from 'react';

type Props = {
  start: string;
  end: string;
  title: string;
  content: string;
  index: number;
};

function Career({ start, end, title, content, index }: Props) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative flex w-full mb-14">
      {/* 左側 */}
      {isLeft && (
        <div className="w-1/2 pr-8 flex justify-end">
          <div className="career-card bg-white dark:bg-dark-neumo rounded-xl shadow-lg p-6 min-w-[260px] max-w-[420px]">
            <p className="text-sm text-text-light dark:text-dark-text mb-1">
              {start} ~ {end}
            </p>
            <h3 className="font-semibold text-lg text-text dark:text-white mb-2">
              {title}
            </h3>
            {content.split('\n').map((l) => (
              <p
                key={`${title}-${l.substring(0, 12)}-${l.length}`}
                className="text-sm text-text dark:text-dark-text mb-1 leading-relaxed"
              >
                {l}
              </p>
            ))}
          </div>
        </div>
      )}
      {/* 中央ドット */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
        <div className="w-5 h-5 bg-blue-500 border-4 border-white dark:border-dark-bg rounded-full shadow-md" />
      </div>
      {/* 右側 */}
      {!isLeft && (
        <div className="w-1/2 pl-8 flex justify-start">
          <div className="career-card bg-white dark:bg-dark-neumo rounded-xl shadow-lg p-6 min-w-[260px] max-w-[420px]">
            <p className="text-sm text-text-light dark:text-dark-text mb-1">
              {start} ~ {end}
            </p>
            <h3 className="font-semibold text-lg text-text dark:text-white mb-2">
              {title}
            </h3>
            {content.split('\n').map((l) => (
              <p
                key={`${title}-${l.substring(0, 12)}-${l.length}`}
                className="text-sm text-text dark:text-dark-text mb-1 leading-relaxed"
              >
                {l}
              </p>
            ))}
          </div>
        </div>
      )}
      {/* モバイル（縦並び） */}
      <div className="flex lg:hidden w-full pl-6 pr-2">
        <div className="career-card bg-white dark:bg-dark-neumo rounded-xl shadow-lg p-5 w-full relative">
          <div className="w-4 h-4 bg-blue-500 border-4 border-white dark:border-dark-bg rounded-full shadow-md absolute left-0 -translate-x-1/2 top-6" />
          <p className="text-sm text-text-light dark:text-dark-text mb-1">
            {start} ~ {end}
          </p>
          <h3 className="font-semibold text-lg text-text dark:text-white mb-2">
            {title}
          </h3>
          {content.split('\n').map((l) => (
            <p
              key={`m-${title}-${l.substring(0, 12)}-${l.length}`}
              className="text-sm text-text dark:text-dark-text mb-1 leading-relaxed"
            >
              {l}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Career;
