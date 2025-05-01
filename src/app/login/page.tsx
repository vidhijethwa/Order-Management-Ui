'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { loginUser } from '../service/auth.service';

export default function LoginPage() {
      const [username, setUsername] = useState<string>('');
      const [password, setPassword] = useState<string>('');
      const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
      const [error, setError] = useState<string>('');
      const router = useRouter();

      const togglePassword = () => setPasswordVisible((prev) => !prev);

      const handleLogin = async (e: FormEvent) => {
            e.preventDefault();
            setError('');

            const { success, error } = await loginUser(username, password);

            if (success) {
                  router.push('/dashboard');
            } else {
                  setError(error || 'Unexpected error');
            }
      };

      return (
            <main className="flex items-center justify-center h-screen bg-white">
                  <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg p-8 shadow-sm">
                        <div className="flex flex-col items-center mb-6">
                              <h2 className="text-xl font-semibold text-black">Order Management</h2>
                        </div>

                        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                              <div>
                                    <label className="block text-sm text-gray-700 mb-1">Username</label>
                                    <input
                                          type="text"
                                          placeholder="Enter Username"
                                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 text-black"
                                          value={username}
                                          onChange={(e) => setUsername(e.target.value)}
                                          required
                                    />
                              </div>

                              <div className="relative">
                                    <label className="block text-sm text-gray-700 mb-1">Password</label>
                                    <input
                                          type={passwordVisible ? 'text' : 'password'}
                                          placeholder="******"
                                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 text-black"
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                          required
                                    />
                                    <button
                                          type="button"
                                          onClick={togglePassword}
                                          className="absolute top-8 right-3 text-gray-600"
                                          aria-label="Toggle password visibility"
                                    >
                                          {passwordVisible ? (
                                                <img src="eye-off.svg" alt="Hide Password" className="h-5 w-5" />
                                          ) : (
                                                <img src="eye-on.svg" alt="Show Password" className="h-5 w-5" />
                                          )}
                                    </button>
                              </div>

                              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

                              <button
                                    type="submit"
                                    className="bg-black text-white py-2 rounded hover:bg-green-700 transition-colors"
                              >
                                    Login
                              </button>
                        </form>
                  </div>
            </main>
      );
}
