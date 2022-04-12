import React, {useState} from 'react';
import CheckBoxFilter from '../../Component/Filters/CheckBoxFilter';
import PriceSingleRange from '../../Component/Filters/PriceSingleRange';
import SortBy from '../../Component/Filters/SortBy';
import Button from '../../Component/FormComponent/Button';
import {
	flightAirlinesFilter,
	flightArrivalTimeFilter,
	flightSortOptions,
	flightStopsFilter,
} from '../../Data/filterMockData';

function FlightListingFilters() {
	const [showMobileFilter, setshowMobileFilter] = useState(false);
	return (
		<>
			<Button
				onClick={() => setshowMobileFilter(true)}
				className="mobileFilterBtn mobileShow"
			>
				<i className="fa fa-sliders"></i> Filter &amp; Sorting
			</Button>
			<div
				className={`mobileSortFilter mobilePopup ${
					showMobileFilter ? 'd-block' : ''
				}`}
			>
				<div className="mobileShow">
					<Button className={`clearFilter ${showMobileFilter ? 'd-none' : ''}`}>
            Clear
					</Button>
					<Button
						className="closePopup closePopup2"
						onClick={() => setshowMobileFilter(false)}
					>
						<span className="icon-close"></span>
					</Button>
					<h4 className="mobilePopTitle">Sort by</h4>
					<div className="clearBtnMobile">
						<Button className="btn" type="reset">
              Clear
						</Button>
					</div>
					<div className="applyBtnMobile">
						<Button className="btn">Apply</Button>
					</div>
				</div>
				<div className="sortFilter">
					<h4 className="mobilePopTitle filterTitle mobileShow">Filter by</h4>
					{/* //Flight price range filter */}
					<PriceSingleRange label="Price" min={100} max={10000} />
					{/* //Flight Stops filter */}
					<CheckBoxFilter label="Stops" filterOptions={flightStopsFilter} />
					{/* Flight Airlines filter */}
					<CheckBoxFilter
						label="Airlines"
						filterOptions={flightAirlinesFilter}
					/>
					{/* Flight Arrival time filter */}
					<CheckBoxFilter
						label="Arrival Time"
						filterOptions={flightArrivalTimeFilter}
					/>
					{/* Flight Depature time filter */}
					<CheckBoxFilter
						label="Departure Time"
						filterOptions={flightArrivalTimeFilter}
					/>
					<SortBy label="Sort by" sortOptions={flightSortOptions}/>
				</div>
			</div>
		</>
	);
}

export default FlightListingFilters;
