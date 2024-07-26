import Table from './components/table/Table';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

export default function Home() {
	return (
		<div>
			<Header />
			<Sidebar />
			<main className='pt-[100px] pl-[240px] pr-[20px] h-screen'>
				<p className='text-xs text-[#94A3B8] mb-6'>
					Settings / Users & Role Settings
				</p>
				<h2>Users & Roles</h2>
				<p className='text-xs text-[#94A3B8] mt-2'>
					Manage all users in your business
				</p>
				<div className='mt-8'>
					<ul className='flex gap-x-4 mb-6 text-sm'>
						<li className='text-[#0D6EFD] border-b border-[#0D6EFD] pb-1'>
							Users
						</li>
						<li className='pb-1'>Roles</li>
					</ul>
					<Table />
				</div>
			</main>
		</div>
	);
}
