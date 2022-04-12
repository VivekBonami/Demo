/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';
import useOutsideHandler from '../../Stores/Utils/useOutsideHandler';
import Button from '../FormComponent/Button';

function SortBy({label, sortOptions}) {
	const [showOption, setshowOption] = useState(false);
	const [selectedOption, setSelectedOption] = useState(sortOptions[0]);
	const sortRef = useRef(null);
	const toggleCloseSort = () => {
		setshowOption(false);
	};

	useOutsideHandler(sortRef, showOption, toggleCloseSort);
	return (
		<div className="filterDropdownWrap sortByOption" ref={sortRef}>
			<div className="flterOption" onClick={() => setshowOption(!showOption)}>
				<div>
					<span className="whiteLabel">{label}</span>
					<span className="desktopViewDisplayBlock">
						{selectedOption.label}
					</span>
					<span className="tabletViewDisplayBlock">{selectedOption.label}</span>
				</div>
				<span className={`fa fa-angle-${showOption ? 'up' : 'down'}`}></span>
			</div>
			<div className={`filterDropdown ${showOption ? 'd-block' : ''}`}>
				<ul>
					{sortOptions
            && sortOptions.map((item, index) => (
            	<li key={index}>
            		<Button
            			onClick={() => {
            				setSelectedOption({
            					value: item.value,
            					label: item.label,
            				});
            				setshowOption(false);
            			}}
            		>
            			{item.label}
            		</Button>
            	</li>
            ))}
				</ul>
			</div>
		</div>
	);
}

export default SortBy;
