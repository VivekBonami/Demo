/* eslint-disable no-mixed-spaces-and-tabs */
import React, {Fragment} from 'react';
import Button from '../../Component/FormComponent/Button';
import HotelName from '../../Component/Filters/HotelName';
import MapView from './MapView/MapView';
import PriceRange from '../../Component/Filters/PriceRange';
import StarRating from '../../Component/Filters/StarRating';
import CategoriesFilter from '../../Component/Filters/CategoriesFilter';
import {amenitiesFilter, categoriesFilter} from '../../Data/filterMockData';
import SortBy from '../../Component/SortBy/SortBy';
import {hotelCardData} from '../../Data/hotelMockData';
import SingleHotelCard from './SingleHotelCard/SingleHotelCard';
import Pagination from '../../Component/Pagiantion/Pagination';

function HotelSearchResult() {
	return (
		<div className="siteBg listingPageWrap">
			<div className="pageInternalScroll">
				<div className="container listing-margin-top">
					<div className="contentWrapper row">
						<div className="leftSideBar col">
							<div className="card mapCard">
								<MapView />
							</div>
							<div className="cardHead dflex">
								<h3>Filter by</h3>
								<Button className="whiteText">
									<i className="icon-close"></i>Clear
								</Button>
							</div>
							<div className="card">
								<HotelName />
							</div>
							<div className="card">
								<PriceRange title="Price" from={69} to={340} />
							</div>
							<div className="card">
								<StarRating />
							</div>
							<div className="card">
								<CategoriesFilter
									title="Categories"
									filterOptions={categoriesFilter}
								/>
							</div>
							<div className="card amenities-wrap">
								<CategoriesFilter
									title="Amenities"
									filterOptions={amenitiesFilter}
								/>
							</div>
						</div>
						<div className="mainWrap col">
							<div
								className="
                    rightInfo
                    d-flex
                    justify-content-between
                    align-items-center
                  "
							>
								<div className="mobileSearchFilterButtons">
									<div className="d-flex">
										<div className="sortingButton mobileButtons">
											<i className="fa fa-sliders"></i> Filter & Sorting
										</div>
										<div className="mapButton mobileButtons">Map View</div>
									</div>
								</div>
								<h3 className="whiteText">
                  423 hotels found in Los Angeles (and vicinity), CA, USA
								</h3>
								<div
									className="
                      sortWrapper
                      row
                      justify-content-between
                      no-gutters
                      align-items-center
                    "
								>
									<SortBy />
								</div>
							</div>
							{hotelCardData
                && hotelCardData.map((item, index) => {
                	if (index === 4) {
                		return (
                			<Fragment key={index}>
                				<SingleHotelCard key={index} {...item} />
                				<div className="card2">
                					<div className="dflex noteCard">
                						<div className="dflex">
                							<span className="icon-border-plain"></span>
                              Tripello Members save up to 67% or more
                						</div>
                						<a href="#" className="btnBorder2">
                              Learn How <i className="fa fa-angle-right"></i>
                						</a>
                						<a href="#" className="closeBtn">
                							<i className="icon-close"></i>
                						</a>
                					</div>
                				</div>
                			</Fragment>
                		);
                	}

                	return <SingleHotelCard key={index} {...item} />;
                })}
							<div className="paginationWrapper">
								<Pagination />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HotelSearchResult;
