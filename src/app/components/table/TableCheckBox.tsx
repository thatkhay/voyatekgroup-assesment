import React from 'react';

type Props = {};

const TableCheckBox = (props: Props) => {
	return (
		<div className=''>
			<input
				id='default-checkbox'
				type='checkbox'
				value=''
				className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
			/>
		</div>
	);
};

export default TableCheckBox;
