"use client";

import React, { useState, useEffect } from "react";
import { ButtonUI } from "@/components/ui/ButtonUI";
import { CardUI } from "@/components/ui/CardUI";
import { InputUI } from "@/components/ui/InputUI";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useLanguage } from "@/context/LanguageContext";

export default function SettingPage() {
  const { language } = useLanguage();
  const { isAuthenticated, login, logout, isLoading } = useAdminAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Redirect if not authenticated and not loading
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Stay on login page
    }
  }, [isAuthenticated, isLoading]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    if (login(username, password)) {
      setUsername("");
      setPassword("");
    } else {
      setLoginError(
        language === "en"
          ? "Invalid username or password"
          : "Tên người dùng hoặc mật khẩu không chính xác",
      );
    }
  };

  const handleLogout = () => {
    logout();
    setUsername("");
    setPassword("");
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="border-primary mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent" />
          <p className="text-gray-600">
            {language === "en" ? "Loading..." : "Đang tải..."}
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-md px-6 py-20">
          <CardUI className="p-8">
            <h1 className="text-primary mb-8 text-center text-3xl font-bold">
              {language === "en" ? "Admin Login" : "Đăng nhập Admin"}
            </h1>

            <form onSubmit={handleLogin} className="space-y-4">
              <InputUI
                label={language === "en" ? "Username" : "Tên người dùng"}
                type="text"
                placeholder={
                  language === "en" ? "Enter username" : "Nhập tên người dùng"
                }
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputUI
                label={language === "en" ? "Password" : "Mật khẩu"}
                type="password"
                placeholder={
                  language === "en" ? "Enter password" : "Nhập mật khẩu"
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {loginError && (
                <div className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
                  {loginError}
                </div>
              )}

              <ButtonUI
                variant="primary"
                size="lg"
                className="w-full"
                type="submit"
              >
                {language === "en" ? "Login" : "Đăng nhập"}
              </ButtonUI>
            </form>
          </CardUI>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-900">
            {language === "en" ? "Admin Panel" : "Bảng điều khiển Admin"}
          </h1>
          <ButtonUI variant="secondary" onClick={handleLogout}>
            {language === "en" ? "Logout" : "Đăng xuất"}
          </ButtonUI>
        </div>

        <CardUI className="border-primary border-l-4 bg-blue-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {language === "en"
              ? "Welcome to Admin Panel"
              : "Chào mừng đến Bảng Điều Khiển"}
          </h2>
          <p className="text-gray-600">
            {language === "en"
              ? "Admin panel is currently in development. Data management features will be added soon."
              : "Bảng điều khiển admin đang được phát triển. Các tính năng quản lý dữ liệu sẽ được thêm sớm."}
          </p>
        </CardUI>
      </div>
    </div>
  );
}
