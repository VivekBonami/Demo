import React, {useState} from 'react';
import HeaderNavbar from '../../Component/HeaderNavbar';
import TabMenu from '../AffiliateDashbord/TabMenu';
import PremiumMemberInvites from '../AffiliateDashbord/PremiumMemberInvites';
import Link from '../AffiliateDashbord/Link';
import Email from '../AffiliateDashbord/Email';
import QrCode from '../AffiliateDashbord/QrCode';
import TabLayout from '../AffiliateDashbord/TabLayout';
import FooterWithMediaIcon from '../../Component/FooterWithMediaIcon';
import DetailsInfoModal from '../AffiliateDashbord/DetailsInfoModal';
import infoIcon from '../../Assets/img/info-icon-white.png';
import memberInviteImg from '../../Assets/img/member-invite-heading.png';
import linkImg from '../../Assets/img/link.png';
import contentCopyImg from '../../Assets/img/content-copy.png';
import whatsAppImg from '../../Assets/img/whatsapp-bg.png';
import telegramImg from '../../Assets/img/telegram-bg.png';
import tiktokImg from '../../Assets/img/tiktok.png';
import instagramImg from '../../Assets/img/instagram-bg2.png';
import pinterestImg from '../../Assets/img/pinterest.png';
import facebookImg from '../../Assets/img/facebook-bg2.png';
import linkedinImg from '../../Assets/img/linkedin-bg.png';
import twitterImg from '../../Assets/img/twitter-bg2.png';
import emailIcon from '../../Assets/img/email-icon.png';
import qrCodeIcon from '../../Assets/img/qr-code-icon.png';
import qrImage from '../../Assets/img/qr-code-image.png';
import fileDownloadImage from '../../Assets/img/file-download.png';
import appleWalletImage from '../../Assets/img/Apple-Wallet.png';
import gPayImage from '../../Assets/img/G-Pay.png';

function MemberRewards() {
	// State for details info modal
	const [openModal, setOpenModal] = useState(false);

	// Handle open modal
	const handleOpenModal = () => {
		setOpenModal(true);
	};

	// Handle close modal
	const handleCloseOpenModal = () => {
		setOpenModal(false);
	};

	// Sharing icon list
	const socialLinkList = [

		{
			href: '#',
			image: whatsAppImg,
		},
		{
			href: '#',
			image: telegramImg,
		},
		{
			href: '#',
			image: tiktokImg,
		},
		{
			href: '#',
			image: instagramImg,
		},
		{
			href: '#',
			image: pinterestImg,
		},
		{
			href: '#',
			image: facebookImg,
		},
		{
			href: '#',
			image: linkedinImg,
		},
		{
			href: '#',
			image: twitterImg,
		},
	];

	return (
		<div className="siteBg membersCheckoutPageWrap membersRewardsPageWrap">
			<div className="pageWrap pageWrapInner">
				<div className="fixedHeader">
					<HeaderNavbar/>
				</div>
				<section className="mainContent">
					<div className="pageInternalScroll mCustomScrollbar _mCS_1">
						<div className="container premium-plus-member-rewards-pageWrap pageInternalScrollTopPadding">
							{/* <TabMenu infoIcon={infoIcon} modalOpen={handleOpenModal}/> */}
							<PremiumMemberInvites
                            className="rewardsSection"
								heading="Tripello Rewards"
								para="Share our Tripello Freemium Membership with your friends,
                    family and whoever you think loves and enjoys Travel. For
                    everyone that signs up and then upgrades to a Premium or
                    Premium Plus Membership, you will receive either $25 or $50 Rewards
                    directly into your wallet. ﻿You can apply your Rewards to any of your
                    upcoming bookings on Tripello (Car Rental Services excluded)."
								// para1="You can target prospects with the «Try before you Buy» mindset through your individual Freemium Invite link, or if you are confident that your prospect are ready to sign up immediately, use the Premium Invite link."
								memberInviteImg={memberInviteImg}
                                isContent
							/>
							<div class="sectionTitle">
                                <h2>We have multiple options for you to share your personal invitation:</h2>
                            </div>
							<div className="sharingWrapper desktopViewDisplayBlock">
								<div className="row">
									<div className="col">
										<div className="card">
											<div className="linkIcon">
												<img src={linkImg} alt="icon" />
												<h3>Link</h3>
											</div>
											<Link
												para1="Share your individual invitation link. Copy the link and paste into your personal email, send it via SMS or share it through your favorite Social Media Channels."
												contentCopyImg={contentCopyImg}
												heading2="Click to Copy Link"
												para2="Click on the icon to take you to your favorite Social Media Platform to post your link."
												socialLinkList={socialLinkList}
												isImage={true}
											/>
										</div>
									</div>
									<div className="col">
										<div className="card">
											<div className="linkIcon">
												<img src={emailIcon} alt="icon" />
												<h3>Email</h3>
											</div>
											<Email
												para2="Enter your recipients contact information and we will
                    directly send and Email with your individual invitation."
												para="By sending the invite directly you agree to the Terms and Conditions"
											/>
										</div>
									</div>
									<div className="col">
										<div className="card">
											<div className="linkIcon">
												<img src={qrCodeIcon} alt="icon" />
											</div>
											<QrCode
												para={<>Share your individual Freemium Invitation QR <br />Code directly from this page or download it and share it offline.</>}
												qrImage={qrImage}
												fileDownloadImage={fileDownloadImage}
												heading="Download QR Code (.PNG)"
												appleWalletImage={appleWalletImage}
												gPayImage={gPayImage}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="mobileSharingWrapper mobileSharingWrapper1 sharingWrapper tabletViewDisplayBlock">
								<div className="card">
									<TabLayout/>
								</div>
							</div>
							<div className="sectionTitle searchWrapper desktopViewDisplayBlock">
								<h2>Your Wallet</h2>
                                <form>
                                    <div className="formGroup">
                                        <Button type="submit" className="btnImage"/>
                                        <input type="text" className="formControl" placeholder="Search"/>
                                    </div>
                                </form>
							</div>
							

							<div className="mobileSharingWrapper mobileSharingWrapper2 sharingWrapper tabletViewDisplayBlock">
								<div className="card">
									<TabLayout/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<FooterWithMediaIcon className="white-icon" iconClassName="icon-white"/>
			</div>
			<DetailsInfoModal openModal={openModal} closeModal={handleCloseOpenModal}/>
		</div>
	);
}

export default MemberRewards;