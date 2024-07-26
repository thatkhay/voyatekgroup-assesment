import React from 'react';

type Props = {
	handleDelete: () => void;
};

const DeleteUser: React.FC<Props> = ({ handleDelete }) => {
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
								<div className='sm:flex sm:items-start'>
									<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
										<h3
											className='leading-6 text-gray-900 text-center text-2xl mb-8'
											id='modal-title'>
											Delete this user
										</h3>
										<div className='mt-2'>
											<p className='text-sm text-[#667185]'>
												This user and all associated data will be permanently
												removed. Do you wish to continue
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className=' px-4 py-3 flex justify-center gap-x-6 mb-6'>
								<button
									type='button'
									className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
									onClick={() => handleDelete()}>
									Cancel action
								</button>
								<button
									type='button'
									className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteUser;
