import Image from 'next/image';
import React from 'react';
import user from '../../../assets/createIcon.svg';
import cancel from '../../../assets/X.svg';

type Props = {
	handleCreate: () => void;
};

const CreateUser: React.FC<Props> = ({ handleCreate }) => {
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

				<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
							<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
								<div className=''>
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
									<form className=' min-h-[100px] space-y-4 md:space-y-6 mb-4'>
										<div>
											<label
												htmlFor='email'
												className='block mb-2 text-gray-900 text-xs'>
												Email Address
											</label>
											<input
												type='email'
												name='email'
												id='email'
												className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-4 placeholder:text-[#98A2B3] placeholder:text-xs'
												placeholder='New User’s Email Address'
												required
											/>
										</div>
										<div>
											<label
												htmlFor='fullname'
												className='block mb-2 text-gray-900 text-xs'>
												Full Name
											</label>
											<input
												type='text'
												name='fullname'
												id='fullname'
												className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-4 placeholder:text-[#98A2B3] placeholder:text-xs'
												placeholder='New User’s Full Name'
												required
											/>
										</div>
										<div>
											<label
												htmlFor='role'
												className='block mb-2 text-sm font-medium text-gray-900'>
												Role
											</label>
											<select
												id='role'
												className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  '>
												<option selected>Select Role</option>
												<option value='US'>Admin</option>
												<option value='CA'>Sales Manager</option>
												<option value='FR'>Sales Representative</option>
											</select>
										</div>

										<div>
											<label
												htmlFor='password'
												className='block mb-2 text-gray-900 text-xs'>
												Create Password
											</label>
											<input
												type='password'
												name='password'
												id='password'
												className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-4 placeholder:text-[#98A2B3] placeholder:text-xs'
												placeholder='Create Password for New User'
												required
											/>
										</div>
										<button className='w-full rounded-md bg-[#0D6EFD] py-4 text-white text-sm'>
											Add User
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateUser;
