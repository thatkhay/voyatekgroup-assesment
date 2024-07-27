import Image from 'next/image';
import React, { useState } from 'react';
import user from '../../../assets/createIcon.svg';
import cancel from '../../../assets/X.svg';
import { toast } from 'react-toastify';

type User = {
	id: number;
	email: string;
	name: string;
	role: string;
	password: string;
};

type Props = {
	handleCreate: () => void;
	addUser: (newUser: User) => void;
};

const CreateUser: React.FC<Props> = ({ handleCreate, addUser }) => {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		role: '',
		password: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch('https://voyatek-take-home.free.beeceptor.com/api/create-user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const data = await response.json();

			if (response.ok && data.status === 'success') {
				const newUser = data.data[0]; // Extract the new user from the response data
				console.log('User created successfully:', newUser);
				addUser(newUser);  // Add the new user to the list
				toast.success('User created successfully!');
			} else {
				console.log('Failed to create user:', data);
				toast.error(`Failed to create user: ${data.message}`);
			}
		} catch (error) {
			console.error('Error creating user:', error);
			toast.error('Error creating user. Please try again.');
		}
		handleCreate(); // Close the modal after submission
	};

	return (
		<>

		<div
				className='relative z-10'
				aria-labelledby='modal-title'
				role='dialog'
				aria-modal='true'>
				<div
					className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
					aria-hidden='true'></div>

			<div className='fixed inset-0 flex items-center justify-center z-50'>
				<div className='relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
					<div className='flex flex-col gap-y-2 items-center relative mb-4'>
						<Image src={user} alt='icon' width={60} height={60} />
						<h2>New User</h2>
						<Image
							src={cancel}
							alt='icon'
							width={30}
							height={30}
							className='absolute right-0 top-0 cursor-pointer'
							onClick={() => handleCreate()}
						/>
					</div>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div>
							<label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
								Name
							</label>
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
								required
							/>
						</div>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
								Email
							</label>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
								required
							/>
						</div>
						<div>
							<label htmlFor='role' className='block text-sm font-medium text-gray-700 mb-1'>
								Role
							</label>
							<select
								name='role'
								value={formData.role}
								onChange={handleChange}
								className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
								required>
								<option value=''>Select a role</option>
								<option value='Administrator'>Administrator</option>
								<option value='Sales Manager'>Sales Manager</option>
								<option value='User'>User</option>
							</select>
						</div>
						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
								Password
							</label>
							<input
								type='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
								required
							/>
						</div>
						<div className='flex justify-end mt-4'>
							<button
								type='submit'
								className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
								Create
							</button>
						</div>
					</form>
				</div>
			</div>
			</div>
		</>

	);
};

export default CreateUser;
