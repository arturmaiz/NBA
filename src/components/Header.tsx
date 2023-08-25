const Header = () => {
  return (
    <div className="flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
      <img
        src="/assets/img/nba-logo.svg"
        className="h-16 mr-3"
        alt="Flowbite Logo"
      />
      <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
        NBA Players
      </h1>
    </div>
  );
};

export default Header;
