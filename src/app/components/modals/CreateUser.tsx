import React, { useState } from "react";
import Image from 'next/image';
import user from '../../../assets/createIcon.svg'; // Adjust path if necessary
import cancel from '../../../assets/X.svg'; // Adjust path if necessary
import eye from '../../../assets/eye.svg'; // Adjust path if necessary
import eyeOff from '../../../assets/eye.svg'; // Adjust path if necessary

type User = {
  id: number;
  email: string;
  name: string;
  role: string;
};

type Props = {
  handleCreate: () => void;
  addUser: (user: User) => void;
};

const CreateUser: React.FC<Props> = ({ handleCreate, addUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Assuming your API creates and returns the new user
    const newUser: User = {
      id: Date.now(), // Example, should be replaced with actual ID from the API response
      ...formData
    };

    addUser(newUser);
    handleCreate(); // Close the modal after successful creation
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl z-20">
        <div className="flex flex-col items-center relative p-6">
          <Image src={user} alt="icon" width={60} height={60} />
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Create User</h2>
          <Image
            src={cancel}
            alt="icon"
            width={30}
            height={30}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={handleCreate}
          />
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select a role</option>
              <option value="Administrator">Administrator</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="User">Sales Representative</option>
            </select>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Create Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm  flex items-center"
              required
            />
            <Image
              src={showPassword ? eyeOff : eye}
              alt="toggle password visibility"
              width={20}
              height={20}
              className="absolute top-2/3 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
      
            <button
              type="submit"
              className="mt-4 w-full inline-flex justify-center px-4 py-4 bg-blue-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            >
              Add User
            </button>
           
        
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
