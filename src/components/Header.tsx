import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-6 pb-2 sticky top-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md z-40">
      <div className="flex items-center gap-3">
        <div className="relative group cursor-pointer">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-white dark:ring-gray-800 shadow-sm"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbclnfnb2q2cglEZyV6_dCybXFhtchXtRF2wyuUSphTxMeuA6mTNBuSkMKo8hYrSGK3ZlCLUMPJUBlyAYRoZH1qrBgokqIFLNxSgIyQItxKhepZ5_85WkNaQoVdE3-5eR7KF95kOhOxXNRdP-JDtXp2tsne9NHxTHTu-ZE3PqTul39Uvw3toYh7m1liRxV6u4GO577HGsetqA7EvdxmYPJxnK_nWzGy-gyQgvWjpB7N6QEir0aKQAAezes6xOIcn0GiDwyXoUOJfM")' }}
          />
          <div className="absolute bottom-0 right-0 size-2.5 bg-green-500 rounded-full border-2 border-white dark:border-background-dark"></div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider">System Admin</span>
          <span className="text-sm font-bold text-text-main-light dark:text-white leading-tight">Sarah Jenkins</span>
        </div>
      </div>
      <button className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 text-text-sec-light dark:text-text-sec-dark hover:text-primary transition-colors">
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </header>
  );
};

export default Header;
