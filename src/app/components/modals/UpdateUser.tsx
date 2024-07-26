import React, { useState } from "react";
import Image from 'next/image';
import user from '../../../assets/createIcon.svg';
import cancel from '../../../assets/X.svg';
import eye from '../../../assets/eye.svg';
import eyeOff from '../../../assets/eye.svg';

type User = {
  id: number;
  email: string;
  name: string;
  role: string;
};

type Props = {
  handleUpdate: () => void;
  selectedUser: User;
  updateUser: (user: User) => void;
};

const UpdateUser: React.FC<Props> = ({ handleUpdate, selectedUser, updateUser }) => {
  const [name, setName] = useState(selectedUser.name);
  const [email, setEmail] = useState(selectedUser.email);
  const [role, setRole] = useState(selectedUser.role);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedUser: User = {
      ...selectedUser,
      name,
      email,
      role,
    };

    updateUser(updatedUser);
    handleUpdate(); // Close the modal after successful update
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className=''>
                <div className='flex flex-col gap-y-2 items-center relative mb-4'>
                  <Image src={user} alt='icon' width={60} height={60} />
                  <h2>Edit User</h2>
                  <Image
                    src={cancel}
                    alt='icon'
                    width={30}
                    height={30}
                    className='absolute right-0 top-0 cursor-pointer'
                    onClick={() => handleUpdate()}
                  />
                </div>
                <form onSubmit={handleSubmit} className=' min-h-[100px] space-y-4 md:space-y-6 mb-4'>
                  <div>
                    <label htmlFor='email' className='block mb-2 text-gray-900 text-xs'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id='email'
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder='New User’s Email Address'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='fullname' className='block mb-2 text-gray-900 text-xs'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id='fullname'
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder='New User’s Full Name'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='role' className='block mb-2 text-sm font-medium text-gray-900'>
                      Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      id='role'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4'>
                      <option selected>Select Role</option>
                      <option value='admin'>Administrator</option>
                      <option value='sales manager'>Sales Manager</option>
                      <option value='sales rep'>Sales Representative</option>
                    </select>
                  </div>
                  <div className="mb-4 relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Update Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter New Password"
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
                  <button className='w-full rounded-md bg-[#0D6EFD] py-4 px-4  text-white text-sm'>
                    Update User
                  </button>
                </form>
              </div>
            </div>
            <div className='px-4 py-3 flex justify-center gap-x-6 mb-6'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
