"use client";
import { FaSearch, FaPaste } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [accountNumber, setAccountNumber] = useState<string>('');

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setAccountNumber(text);
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg p-8 bg-white rounded-lg">
        <button 
          onClick={closeModal} 
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
        >
          X {/* Close button */}
        </button>

        {/* Heading */}
        <h2 className="mb-4 text-2xl font-bold text-left">Get Started</h2>

        <p className="mb-8 text-md">
            Simply enter the recipient’s Basename, specify the amount, and choose whether to send to their linked bank account
        </p>

        {/* Base Name Input (disabled style) */}
        <label className="ml-2 text-gray-700">Base Name</label>
        <div className="flex items-center justify-between p-4 mb-6 border border-gray-300 rounded-lg">
          <div className="flex items-center">
            <Image
              src="/avatar.jpg" // Replace with your image
              alt="Avatar"
              width={10}
              height={10}
              className="rounded-full"
            />
           
          </div>
          <span className="text-gray-500">base.eth</span>
        </div>

        {/* Separator with 'Or' */}
        <div className="relative mb-6">
          <div className="border-t border-gray-300"></div>
          <span className="absolute inset-x-0 top-0 px-4 mx-auto -mt-3 bg-white w-max">Or</span>
        </div>

        {/* Wallet Address Input */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">Wallet Address</label>
          <input
            type="text"
            placeholder="Paste your wallet address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bank Name Input */}
        <div className="relative mb-6">
          <label className="block mb-2 font-semibold text-gray-700">Bank Name</label>
          <input
            type="text"
            placeholder="Search for a bank"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute text-gray-500 right-4 top-12" />
        </div>

        {/* Account Number Input with Paste Badge */}
        <div className="relative mb-6">
          <label className="block mb-2 font-semibold text-gray-700">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handlePaste}
            className="absolute flex items-center px-3 py-1 text-blue-500 bg-blue-100 rounded right-4 top-12">
             Paste

            <FaPaste className="ml-1" />
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
