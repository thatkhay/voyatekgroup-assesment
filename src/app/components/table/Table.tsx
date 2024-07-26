'use client';
import React, { useState } from 'react';
import TableInput from './TableInput';
import Image from 'next/image';
import addUserIccon from '../../../assets/addUser.svg';
import filterIccon from '../../../assets/filter.svg';
import chevIccon from '../../../assets/chevron-v.svg';
import TableCheckBox from './TableCheckBox';
import CreateUser from '../modals/CreateUser';
import UpdateUser from '../modals/UpdateUser';
import axios from 'axios';
import { toast } from 'react-toastify';
import DeleteUser from '../modals/DeleteUser';

type User = {
	id: number;
	email: string;
	name: string;
	role: string;
};

const Table = () => {
	const [create, setCreate] = useState(false);
	const [update, setUpdate] = useState(false);
	const [remove, setRemove] = useState(false);
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState<User[]>([]);
	const handleCreate = () => setCreate(!create);
	const handleUpdate = () => setUpdate(!update);
	const handleDelete = () => setRemove(!remove);

	const getUsers = async () => {
		try {
			setLoading(true);
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.get(
				`https://vggroup.free.beeceptor.com/api/users`,
				config
			);
			if (response.status === 200 || response.status === 201) {
				setLoading(false);
				setUsers(response.data);
			}
		} catch (error: any) {
			setLoading(false);
			console.log(error);
		}
	};

	React.useEffect(() => {
		getUsers();
	}, []);

	const addUser = (newUser: User) => {
		setUsers([...users, newUser]);
		toast.success('User created successfully!');
	};

	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
			<table className='w-full text-sm text-left rtl:text-right'>
				<thead className='text-xs text-[#334155] font-[400] bg-[#F0F2F5]'>
					<tr className='bg-white'>
						<td className='px-6 py-4' colSpan={2}>
							<div className='flex items-center gap-x-4'>
								<TableInput />
								<button
									type='submit'
									className='focus:ring-blue-300 font-medium border rounded-lg text-xs px-4 py-2 flex gap-x-2 items-center'>
									<Image src={filterIccon} alt='icon' width={15} height={15} />
									Filter
								</button>
							</div>
						</td>
						<td className='px-6 py-4' colSpan={2}>
							<div className='flex justify-end'>
								<button
									type='submit'
									onClick={() => setCreate(true)}
									className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 flex gap-x-2 items-center'>
									<Image src={addUserIccon} alt='icon' width={15} height={15} />
									New User
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<th scope='col' className='px-6 py-3 font-[500]'>
							<div className='flex gap-x-2 items-center'>
								<TableCheckBox />
								Name <Image src={chevIccon} alt='icon' width={15} height={15} />
							</div>
						</th>
						<th scope='col' className='px-6 py-3 font-[500]'>
							<p className='flex gap-x-2'>
								Email Address{' '}
								<Image src={chevIccon} alt='icon' width={15} height={15} />
							</p>
						</th>
						<th scope='col' className='px-6 py-3 font-[500]'>
							<p className='flex gap-x-2'>
								Role <Image src={chevIccon} alt='icon' width={15} height={15} />
							</p>
						</th>
						<th scope='col' className='px-6 py-3 font-[500]'>
							<p className='flex gap-x-2'>
								Actions{' '}
								<Image src={chevIccon} alt='icon' width={15} height={15} />
							</p>
						</th>
					</tr>
				</thead>
				<tbody>
					{!loading && users.length > 0 ? (
						users.map((user: User) => (
							<tr
								className='odd:bg-white even:bg-gray-50  border-b text-xs text-[#344054]'
								key={user.id}>
								<th
									scope='row'
									className='px-6 py-4 whitespace-nowrap font-normal '>
									<div className='flex gap-x-2 items-center'>
										<TableCheckBox />
										{user.name}
									</div>
								</th>
								<td className='px-6 py-4'>{user.email}</td>
								<td className='px-6 py-4 '>
									<p
										className={`py-1 px-2 rounded-[25px] text-center w-max ${
											user.role === 'Administrator'
												? 'text-[#0D6EFD] bg-[#F0F6FE]'
												: user.role === 'Sales Manager'
												? 'text-[#0F973D] bg-[#E7F6EC]'
												: 'text-[#F58A07] bg-[#FEF4E6]'
										}`}>
										{user.role}
									</p>
								</td>
								<td className='px-6 py-4 text-xs '>
									<span
										className='text-[#0D6EFD] mr-4 cursor-pointer'
										onClick={() => handleUpdate()}>
										View
									</span>
									<span
										className='text-[#98A2B3] cursor-pointer'
										onClick={() => handleDelete()}>
										Remove
									</span>
								</td>
							</tr>
						))
					) : !loading && users.length === 0 ? (
						<tr>
							<td className='text-center' colSpan={4}>No User</td>
						</tr>
					) : (
						<tr>
							<td className='text-center' colSpan={4}>Loading...</td>
						</tr>
					)}
				</tbody>
			</table>
			{create && <CreateUser handleCreate={handleCreate} addUser={addUser} />}
			{update && <UpdateUser handleUpdate={handleUpdate} />}
			{remove && <DeleteUser handleDelete={handleDelete} />}
		</div>
	);
};

export default Table;
