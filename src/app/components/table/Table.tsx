"use client";

import React, { useState, useEffect } from "react";
import TableInput from "./TableInput";
import TableCheckBox from "./TableCheckBox";
import CreateUser from "../modals/CreateUser";
import UpdateUser from "../modals/UpdateUser";
import DeleteUser from "../modals/DeleteUser";
import { toast } from "react-toastify";
import Image from "next/image";
import filter from '../../../assets/filter.svg';
import add from '../../../assets/addUser.svg';
import navigate from '../../../assets/navigation.svg';

type User = {
	id: number;
	email: string;
	name: string;
	role: string;
};

const Table: React.FC = () => {
	const [create, setCreate] = useState(false);
	const [update, setUpdate] = useState(false);
	const [deleted, setDeleted] = useState(false);
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState<string | null>(null);

	const handleCreate = () => setCreate(!create);
	const handleUpdate = () => setUpdate(!update);
	const handleDelete = () => setDeleted(!deleted);

	// Fetch users from API
	const getUsers = async () => {
		setLoading(true);
		try {
			const response = await fetch('https://voyatek-api.free.beeceptor.com/api/get-user');
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			setUsers(data.data);
		} catch (error) {
			setError('Failed to fetch users'); // Set error message
			console.error('Error fetching users:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	const addUser = (newUser: User) => {
		setUsers([...users, newUser]);
		toast.success("User created successfully!");
	};

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right">
				<thead className="text-xs text-[#334155] font-[400] bg-[#F0F2F5]">
					<tr className="bg-white">
						<td className="px-6 py-4" colSpan={2}>
              <div className="flex items-center gap-x-4">
                <TableInput />
                <button
                  type="submit"
                  className="flex items-center gap-x-2 focus:ring-blue-300 font-medium border rounded-lg text-xs px-4 py-2"
                >
                  <Image
                    src={filter} 
                    width={15}
                    height={15}
                    alt="icon"
                  />
                  Filter
                </button>
              </div>
            </td>
					<td className="px-6 py-4" colSpan={2}>
						<div className="flex justify-end">
							
							<button
								type="submit"
								onClick={() => setCreate(true)}
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 flex gap-x-2 items-center"
							>
								<Image src={add} width={15} height={15} alt='icon' />{' '}
								New User
							</button>
						</div>
					</td>
				</tr>
				<tr>
					<th scope="col" className="px-6 py-3 font-[500] bg-[#F0F2F5]">
						<div className="flex gap-x-2 items-center">
							<TableCheckBox />
							Name <span><Image src={navigate} width={10} height={10} alt='icon' className="mx-2" />{' '}</span>
						</div>
					</th>
					<th scope="col" className="px-6 py-3 font-[500]">
						<p className="flex gap-x-2">Email Address <span><Image src={navigate} width={10} height={10} alt='icon' className="mx-2" />{' '}</span></p> 
					</th>
					<th scope="col" className="px-6 py-3 font-[500] flex">
						<p className="flex gap-x-2">Role <span><Image src={navigate} width={10} height={10} alt='icon' className="mx-2" />{' '}</span></p> 
						
					</th>
					<th scope="col" className="px-6 py-3 font-[500]">
						<p className="flex gap-x-2">Actions <span><Image src={navigate} width={10} height={10} alt='icon' className="mx-2" />{' '}</span></p>
					</th>
				</tr>
			</thead>
			<tbody>
				{loading ? (
					<tr>
						<td className="text-center" colSpan={4}>
							Loading Users...
						</td>
					</tr>
				) : error ? (
					<tr>
						<td className="text-center text-red-500" colSpan={4}>
							{error}
						</td>
					</tr>
				) : users.length > 0 ? (
					users.map((user: User) => (
						<tr className="bg-white border-[#F0F2F5] border-b-4" key={user.id}>
							<th scope="row" className="px-6 py-4 whitespace-nowrap font-normal">
								<div className="flex gap-x-2 items-center">
									<TableCheckBox />
									{user.name}
								</div>
							</th>
							<td className="px-6 py-4">{user.email}</td>
							<td className="px-6 py-4">
								<p
									className={`py-1 px-2 rounded-[25px] text-center w-max ${user.role === "Administrator"
										? "text-[#0D6EFD] bg-[#F0F6FE]"
										: user.role === "Sales Manager"
											? "text-[#10B981] bg-[#D1FAE5]"
											: "text-[#F58A07] bg-[#FEF4E6]"

										}`}
								>
									{user.role}
								</p>
							</td>
							<td className="px-6 py-4 text-xs">
								<span
									className="text-[#0D6EFD] mr-4 cursor-pointer"
									onClick={() => handleUpdate()}
								>
									View
								</span>
								<span
									className="text-[#98A2B3] cursor-pointer"
									onClick={() => handleDelete()}
								>
									Remove
								</span>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td className="text-center text-red-500" colSpan={4}>
							No User Found
						</td>
					</tr>
				)}
			</tbody>
		</table>
			{ create && <CreateUser handleCreate={handleCreate} addUser={addUser} /> }
	{ update && <UpdateUser handleUpdate={handleUpdate} /> }
	{ deleted && <DeleteUser handleDelete={handleDelete} /> }
		</div >
	);
};

export default Table;
