import React from 'react';
import { Bars3Icon, ComputerDesktopIcon, PuzzlePieceIcon, ArrowPathIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="flex items-center bg-white px-4 py-2 w-full min-h-0">
      {/* Profile Icon (left) */}
      <div className="flex items-center justify-center w-12 h-12 rounded-md mr-4 bg-gray-100">
        <UserIcon className="w-8 h-8 text-black" />
      </div>
      {/* Каталог Button */}
      <button className="flex items-center bg-green-500 text-black font-bold px-5 py-2 rounded-full text-base mr-6">
        <Bars3Icon className="w-5 h-5 mr-2 text-black" />
        Каталог
      </button>
      {/* Navigation */}
      <nav className="flex-1">
        <ul className="flex items-center gap-8 justify-center text-base font-medium text-black">
          <li className="flex items-center gap-1">
            <ComputerDesktopIcon className="w-5 h-5 text-black" />
            PlayStation
          </li>
          <li className="flex items-center gap-1">
            <PuzzlePieceIcon className="w-5 h-5 text-black" />
            Game Pass
          </li>
          <li className="flex items-center gap-1">
            <PuzzlePieceIcon className="w-5 h-5 text-black" />
            Игры
          </li>
          <li className="flex items-center gap-1">
            <ArrowPathIcon className="w-5 h-5 text-black" />
            Подписки
          </li>
        </ul>
      </nav>
      {/* Search Bar */}
      <div className="flex items-center border rounded-md px-2 py-1 bg-white mr-4 w-40">
        <input
          type="text"
          placeholder=""
          className="outline-none flex-1 bg-transparent text-black text-sm"
        />
        <MagnifyingGlassIcon className="w-4 h-4 text-black" />
      </div>
      {/* User Icon and Login */}
      <div className="flex items-center gap-1">
        <UserIcon className="w-5 h-5 text-black" />
        <span className="text-sm text-black">Войти</span>
      </div>
    </header>
  );
} 