import Image from 'next/image';
import React, { useState } from 'react';
import user from '../../../assets/createIcon.svg';
import cancel from '../../../assets/X.svg';

type Props = {
	handleCreate: () => void;
	addUser: (newUser: User) => void;
};

type User = {
	id: number;
	email: string;
	name: string;
	role: string;
	password: string;
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
			const response = await fetch('https://vggroup.free.beeceptor.com/api/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const data = await response.json();

			if (response.ok) {
				console.log('User created successfully:', data);
				addUser(data);  // Add the new user to the list
			} else {
				console.log('Failed to create user:', data);
				
			}
		} catch (error) {
			console.error('Error creating user:', error);
			
		}
		handleCreate(); // Close the modal after submission
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div className='relative w-[600px] p-4 bg-white rounded-lg shadow'>
				<div className='flex justify-between items-center mb-4'>
					<h2 className='text-xl font-bold'>Create User</h2>
					<button onClick={handleCreate} className='focus:outline-none'>
						<Image src={cancel} alt='Cancel' />
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='grid grid-cols-2 gap-4'>
						<div>
							<label className='block text-sm font-medium mb-1'>Name</label>
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-lg focus:outline-none'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium mb-1'>Email</label>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-lg focus:outline-none'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium mb-1'>Role</label>
							<select
								name='role'
								value={formData.role}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-lg focus:outline-none'
								required>
								<option value=''>Select a role</option>
								<option value='Administrator'>Administrator</option>
								<option value='Sales Manager'>Sales Manager</option>
								<option value='User'>User</option>
							</select>
						</div>
						<div>
							<label className='block text-sm font-medium mb-1'>Password</label>
							<input
								type='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-lg focus:outline-none'
								required
							/>
						</div>
					</div>
					<div className='flex justify-end mt-4'>
						<button
							type='submit'
							className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none'>
							Create
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateUser;
