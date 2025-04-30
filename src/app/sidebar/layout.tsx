'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);
      const pathname = usePathname();
      const router = useRouter();

      const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

      const handleLogout = () => {
            router.push('/login');
      };

      const navItems = [
            { href: '/dashboard', label: 'Dashboard' },
            { href: '/order/place-order', label: 'Place Order' },
            { href: '/order/show-order', label: 'Show Order' },
      ];

      return (
            <div style={{ display: 'flex' }}>
                  {/* Sidebar */}
                  <div
                        style={{
                              width: isSidebarOpen ? '250px' : '60px',
                              height: '100vh',
                              backgroundColor: 'white',
                              color: 'green',
                              transition: 'width 0.3s ease',
                              boxSizing: 'border-box',
                              position: 'relative',
                              display: 'flex',
                              flexDirection: 'column',
                              borderRight: '1px solid #e2e8f0',
                        }}
                  >
                        {/* Top Section */}
                        <div
                              style={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isSidebarOpen ? 'flex-start' : 'center',
                                    paddingTop: '10px',
                              }}
                        >
                              {/* Toggle Button */}
                              <button
                                    onClick={toggleSidebar}
                                    style={{
                                          backgroundColor: 'green',
                                          color: 'white',
                                          border: 'none',
                                          padding: '8px 12px',
                                          cursor: 'pointer',
                                          marginBottom: '20px',
                                          alignSelf: isSidebarOpen ? 'flex-end' : 'center',
                                          marginRight: isSidebarOpen ? '10px' : '0',
                                          borderRadius: '4px',
                                          fontSize: '14px',
                                    }}
                              >
                                    {isSidebarOpen ? '←' : '→'}
                              </button>

                              {/* Navigation Links */}
                              <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
                                    {navItems.map((item) => {
                                          const isActive = pathname === item.href;
                                          return (
                                                <li key={item.href} style={{ width: '100%' }}>
                                                      <Link
                                                            href={item.href}
                                                            style={{
                                                                  display: 'block',
                                                                  padding: isSidebarOpen ? '10px 20px' : '10px 0',
                                                                  color: isActive ? 'white' : 'green',
                                                                  backgroundColor: isActive ? 'green' : 'transparent',
                                                                  textDecoration: 'none',
                                                                  transition: 'all 0.2s ease',
                                                                  textAlign: isSidebarOpen ? 'left' : 'center',
                                                                  borderRadius: '4px',
                                                                  margin: '0 10px',
                                                            }}
                                                      >
                                                            {isSidebarOpen ? item.label : item.label.charAt(0)}
                                                      </Link>
                                                </li>
                                          );
                                    })}
                              </ul>
                        </div>

                        {/* Bottom Section - Logout */}
                        <div
                              style={{
                                    padding: '10px',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: isSidebarOpen ? 'flex-end' : 'center',
                              }}
                        >
                              <button
                                    onClick={handleLogout}
                                    style={{
                                          backgroundColor: 'red',
                                          color: 'white',
                                          border: 'none',
                                          padding: '8px 12px',
                                          cursor: 'pointer',
                                          borderRadius: '4px',
                                          fontSize: '14px',
                                          width: isSidebarOpen ? 'auto' : '40px',
                                    }}
                                    title="Logout"
                              >
                                    {isSidebarOpen ? 'Logout' : '⎋'}
                              </button>
                        </div>
                  </div>

                  {/* Main Content */}
                  <main style={{ flexGrow: 1, padding: '20px' }}>{children}</main>
            </div>
      );
};

export default DashboardLayout;
