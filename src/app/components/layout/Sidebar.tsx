import React from 'react';
import Image from 'next/image';
import accIcon from '../../../assets/acc.svg';
import backIcon from '../../../assets/back.svg';
import securityIcon from '../../../assets/lock.svg';
import bell from '../../../assets/bell.svg';
import cash from '../../../assets/cash.svg';
import sales from '../../../assets/sales.svg';
import users from '../../../assets/Users.svg';
import backup from '../../../assets/backup.svg';

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<div className='hidden md:flex w-[200px] fixed top-[100px] bottom-0 left-[20px] bg-white p-5 rounded-md shadow-md flex-col justify-between'>
			<div>
				<p className='text-sm'>Settings</p>
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
			</div>
			<div className='flex justify-center'>
				<button className='text-xs rounded-md border border-[#485568] p-[10px] flex gap-x-[10px]'>
					<Image src={backIcon} width={15} height={15} alt='icon' />
					Back to Dashboard
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
