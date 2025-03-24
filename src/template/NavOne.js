import React, { useState } from 'react';


const NavOne = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prevState => !prevState);
  const toggleDropdown = () => setIsDropdownOpen(prevState => !prevState);
  const toggleMobileDropdown = () => setIsMobileDropdownOpen(prevState => !prevState);

  const Logo = [{ name: 'LOGO', herf: 'https://tailwindflex.com/images/logo.svg' }];
  const login = [{ name: 'Login', herf: '#' }]
  const signup = [{ name: 'Sign Up', herf: '#' }]

  // Define nav items data
  const navItems = [
    { name: 'Home', href: '#', isDropdown: false },
    {
      name: 'Products', href: '#', isDropdown: true, subItems: [
        { name: 'Software ', subItems: [{ name: 'Web Development', herf: '#' }] },
        { name: 'Hardware', subItems: [{ name: 'Laptop', herf: '#' }, { name: 'Desktop', herf: '#' }, { name: 'Tablet', herf: '#' }, { name: 'Accessories', herf: '#' },] },

      ]
    },
    { name: 'Services', href: '#', isDropdown: false },
    { name: 'About', href: '#', isDropdown: false },
    { name: 'Contact', href: '#', isDropdown: false },
  ];

  
  const [alignment] = useState('center');
  const getFlexStyles = (alignment) => {
    const mapping = {
      'topleft': { justifyContent: 'flex-start', alignItems: 'flex-start' },
      'topcenter': { justifyContent: 'center', alignItems: 'flex-start' },
      'topright': { justifyContent: 'flex-end', alignItems: 'flex-start' },
      'centerleft': { justifyContent: 'flex-start', alignItems: 'center' },
      'center': { justifyContent: 'center', alignItems: 'center' },
      'centerright': { justifyContent: 'flex-end', alignItems: 'center' },
      'bottomleft': { justifyContent: 'flex-start', alignItems: 'flex-end' },
      'bottomcenter': { justifyContent: 'center', alignItems: 'flex-end' },
      'bottomright': { justifyContent: 'flex-end', alignItems: 'flex-end' },
    };
    return mapping[alignment] || mapping['center'];
  };


  const [getlinkStyle] = useState('center');
  const getlinkStyles = (getlinkStyle) => {
    const mapping = {
      'topleft': { justifyContent: 'flex-start', alignItems: 'flex-start' },
      'topcenter': { justifyContent: 'center', alignItems: 'flex-start' },
      'topright': { justifyContent: 'flex-end', alignItems: 'flex-start' },
      'centerleft': { justifyContent: 'flex-start', alignItems: 'center' },
      'center': { justifyContent: 'center', alignItems: 'center' },
      'centerright': { justifyContent: 'flex-end', alignItems: 'center' },
      'bottomleft': { justifyContent: 'flex-start', alignItems: 'flex-end' },
      'bottomcenter': { justifyContent: 'center', alignItems: 'flex-end' },
      'bottomright': { justifyContent: 'flex-end', alignItems: 'flex-end' },
    };
    return mapping[getlinkStyle] || mapping['center'];
  };

  const [fontSize] = useState('small');
  const getFontSize = (fontSize) => {
    const mapping = {
      'small': { fontSize: '1rem' },
      'medium': { fontSize: '1.5rem' },
      'large': { fontSize: '2rem' },
      'Extra-large': { fontSize: '3rem' },
    };
    return mapping[fontSize] || mapping['medium'];
  }

  const [gethight] = useState('small');
  const Gethight = (gethight) => {
    const mapping = {
      'small': { height: '1rem' },
      'medium': { height: '2rem' },
      'large': { height: '3rem' },
      'Extra-large': { height: '4rem' },
    };
    return mapping[gethight] || mapping['medium'];
  }
  const [getdisplayhight] = useState('small');
  const GetDisplayhight = (getdisplayhight) => {
    const mapping = {
      'small': { height: '4rem' },
      'medium': { height: '6rem' },
      'large': { height: '8rem' },
      'Extra-large': { height: '10rem' },
    };
    return mapping[getdisplayhight] || mapping['medium'];
  }

  const [getFontSizes] = useState('small');
  const GetDisplayfontsize = (getFontSizes) => {
    const mapping = {
      'small': { fontSize: '1rem' },
      'medium': { fontSize: '2rem' },
      'large': { fontSize: '3rem' },
      'Extra-large': { fontSize: '4rem' },
    };
    return mapping[getFontSizes] || mapping['medium'];
  }
  return (
    <div>
      {/* Navbar with Mega Menu */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-18" style={{ ...getlinkStyles('center'), ...GetDisplayhight('small') }}>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start" style={{ ...getFlexStyles('topcenter') }}>
              {Logo.map((items) => (
                <div className="flex-shrink-0 flex items-center">
                  <img className="block h-8 w-auto" src={items.herf} alt="Logo" style={{ ...Gethight('large') }} />
                  <span className="ml-2 text-xl font-bold text-gray-800" style={{ ...getFontSize('medium') }}>{items.name}</span>
                </div>
              ))}
              <div className="hidden sm:block sm:ml-6">

                <div className="flex space-x-4">
                  {navItems.map((item) => (
                    item.isDropdown ? (
                      <div key={item.name} className="relative group">
                        <button
                          className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                          onClick={toggleDropdown}
                        >
                          {item.name}
                          <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {/* Mega Menu */}
                        {isDropdownOpen && (
                          <div className="absolute left-0 mt-2 w-screen max-w-6xl bg-white border border-gray-200 rounded-lg shadow-lg z-50 transform -translate-x-1/4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                              {item.subItems.map((subItem) => (
                                <div key={subItem.name}>
                                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{subItem.name}</h3>
                                  {subItem.subItems.map((subItem) => (
                                    <ul className="space-y-3">
                                      <li>
                                        <a href={subItem.herf} className="text-gray-600 hover:text-indigo-600">{subItem.name}</a>
                                      </li>
                                    </ul>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a key={item.name} href={item.href} className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">{item.name}</a>
                    )
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              <div className="hidden sm:flex sm:items-center">
                {login.map((item) => (
                  <a href={item.herf} className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">{item.name}</a>
                ))}
                {signup.map((item) => (
                  <a href={item.herf}
                    className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">{item.name}</a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded={isMobileMenuOpen}
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.isDropdown ? (
                  <div key={item.name} className="relative">
                    <button
                      className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                      onClick={toggleMobileDropdown}
                    >
                      {item.name}
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {/* Mobile Dropdown Content */}
                    {isMobileDropdownOpen && (
                      <div className="px-4 py-2">
                        {item.subItems.map((subItem) => (
                          <div key={subItem.name}>
                            <ul className="space-y-2">
                              <li>
                                <a href={subItem.href} className="text-gray-600 hover:text-indigo-600 block">{subItem.name}</a>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a key={item.name} href={item.href} className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">{item.name}</a>
                )
              ))}

              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3 space-y-2 flex-col">
                  {login.map((item) => (
                    <a href={item.herf}
                      className="block w-full text-center text-gray-900 bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
                      {item.name}
                    </a>
                  ))}
                  {signup.map((item) => (
                    item.name !== '' && (
                      <a
                        href={item.herf}
                        key={item.name}
                        className={`block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium ${item.condition ? 'new-class' : 'block w-full text-center text-gray-900 bg-gray-100 px-3 py-2 rounded-md text-base font-medium'}`}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavOne;
