
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import accIcon from '../../../assets/acc.svg';
import backIcon from '../../../assets/back.svg';
import securityIcon from '../../../assets/lock.svg';
import bell from '../../../assets/bell.svg';
import cash from '../../../assets/cash.svg';
import sales from '../../../assets/sales.svg';
import users from '../../../assets/Users.svg';
import backup from '../../../assets/backup.svg';
import closeIcon from '../../../assets/close.svg'; 

type Props = {};

const MobileMenu: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);

	if (!isOpen) return null; // Do not render if not open

	return (
		<div className='w-[150px] right-2 bg-white p-5 rounded-md shadow-md flex-col justify-between hidden max-sm:flex absolute z-20'>
			<div className='flex justify-between items-center mb-4'>
				<p className='text-sm'>Settings</p>
				<button onClick={handleClose} className='text-[#e83e35]'>
					{/* <Image src={closeIcon} width={15} height={15} alt='Close Menu' /> */}
                    x
				</button>
			</div>
			<ul className='min-h-[300px] mt-5 flex flex-col gap-y-6'>
				<li className='flex gap-x-[10px] text-xs text-[#94A3B8] items-center p-[10px] rounded-md'>
					<Image src={accIcon} width={15} height={15} alt='icon' />
					Account
				</li>
				<li className='flex gap-x-[10px] text-xs text-[#94A3B8] items-center p-[10px] rounded-md'>
					<Image src={securityIcon} width={15} height={15} alt='icon' />
					Security
				</li>
				<li className='flex gap-x-[10px] text-xs text-[#94A3B8] items-center p-[10px] rounded-md'>
					<Image src={bell} width={15} height={15} alt='icon' />
					Notifications
				</li>
				<li className='flex gap-x-[10px] text-xs text-[#94A3B8] items-center p-[10px] rounded-md'>
					<Image src={cash} width={15} height={15} alt='icon' />
					Pricing
				</li>
				<li className='flex gap-x-[10px] text-xs text-[#94A3B8] items-center p-[10px] rounded-md'>
					<Image src={sales} width={15} height={15} alt='icon' />
					Sales
				</li>
				<li className='flex gap-x-[10px] text-xs items-center p-[10px] rounded-md bg-[#F0F6FE] text-[#0D6EFD]'>
					<Image src={users} width={15} height={15} alt='icon' />
					Users & Roles
				</li>
				<li className='flex gap-x-[10px] text-xs text-[#94A3B8] items-center p-[10px] rounded-md'>
					<Image src={backup} width={15} height={15} alt='icon' />
					Backups
				</li>
			</ul>
			<div className='flex justify-center mt-4'>
				<button className='text-xs rounded-md border border-[#485568] p-[10px] flex gap-x-[10px]'>
					<Image src={backIcon} width={15} height={15} alt='icon' />
					Back to Dashboard
				</button>
			</div>
		</div>
	);
};

export default MobileMenu;
