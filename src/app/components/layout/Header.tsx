import Image from 'next/image';
import React from 'react';
import logo from '../../../assets/logo.png';
import bell from '../../../assets/bell.svg';
import wallet from '../../../assets/wallet.svg';
import info from '../../../assets/info.svg';
import settings from '../../../assets/settings.svg';
import profile from '../../../assets/profile.svg';

type Props = {};

const Header = (props: Props) => {
	return (
		<div className='h-[80px] px-[50px] py-[20px] flex items-center gap-8 justify-between bg-white shadow-md fixed left-0 right-0'>
			<div className='min-h-[50px] w-1/2 flex items-center gap-x-8'>
				<Image src={logo} alt='logo' width={40} height={40} />
				<form className='flex-grow'>
					<label
						htmlFor='default-search'
						className='mb-2 text-sm font-medium text-gray-900 sr-only'>
						Search
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
							<svg
								className='w-4 h-4 text-gray-500'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'>
								<path
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</div>
						<input
							type='search'
							id='default-search'
							className='block w-full px-4 py-2 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500'
							placeholder='search here...'
							required
						/>
					</div>
				</form>
			</div>
			<div className='min-h-[50px] w-max flex items-center gap-x-8 text-[#647995]'>
				<ul className='flex gap-x-6 w-max'>
					<li className='flex flex-col gap-y-2 items-center'>
						<Image src={bell} width={15} height={15} alt='icon' />{' '}
						<span className='text-[12px]'>Notifications</span>
					</li>
					<li className='flex flex-col gap-y-2 items-center'>
						<Image src={wallet} width={15} height={15} alt='icon' />{' '}
						<span className='text-[12px]'>Wallet</span>
					</li>
					<li className='flex flex-col gap-y-2 items-center'>
						<Image src={info} width={15} height={15} alt='icon' />{' '}
						<span className='text-[12px]'>Inquiries</span>
					</li>
					<li className='flex flex-col gap-y-2 items-center'>
						<Image src={settings} width={15} height={15} alt='icon' />{' '}
						<span className='text-[12px]'>Settings</span>
					</li>
				</ul>
				<Image src={profile} alt='icon' width={50} height={50} />
			</div>
		</div>
	);
};

export default Header;
