import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { cx } from "class-variance-authority";
import { IconCircleFilled } from "@tabler/icons-react";
import { Hero } from "@/components/privacy-policy/Hero";

export default function PrivacyPolicePage() {
	return (
		<>
			<Navbar />
			<Hero />
			<main>
				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>1. Information We Collect</h3>
						<p className={cx("text-description lg:w-full text-start")}>When you use our website, make a booking, or interact with our services, we may collect the following types of information:</p>
						<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Personal Information Provided by Users</h4>
						<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Full Name</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Email Address</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Phone Number</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Passport or ID Number (if required for booking verification)</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Payment Information (processed securely through third-party payment providers)</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Billing Address</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">Special Requests (such as dietary restrictions or accessibility needs)</p>
							</div>
						</div>

						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Booking Information</h4>

							<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Trip details (selected package, dates, number of guests, and preferences)</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Guest details (name, nationality, age, and emergency contact information)</p>
								</div>
							</div>
						</section>
						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Technical & Usage Data</h4>

							<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">IP Address</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Browser type and version</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Device Information</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">
										Cookies and tracking data (see <b>Cookies & Tracking Technologies</b> section below)
									</p>
								</div>
							</div>
						</section>
						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Empowering Local Communities</h4>
							<p className={cx("text-description lg:w-full text-start")}>Sustainability is also about people. We are committed to:</p>

							<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Employing and training local Dayak and Melayu communities, providing fair wages and career opportunities.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Partnering with local artisans, guides, musicians, and homestay providers to ensure economic benefits remain within the community.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Supporting educational programs, including Ransel Buku, a local initiative providing library services to riverside villages.</p>
								</div>
							</div>
						</section>
						<section className="flex flex-col gap-y-5">
							<h4 className={cx("text-2xl text-gray-600 font-prata text-start")}>Sustainable Growth for Future Generations</h4>
							<p className={cx("text-description lg:w-full text-start")}>We believe that tourism should be a force for good. That’s why we continuously seek new ways to:</p>

							<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Reduce our environmental impact through green technology and energy-efficient solutions.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Raise awareness about climate change, deforestation, and the importance of conservation.</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<IconCircleFilled size={10} className="w-fit mt-2.5" />
									<p className="w-full">Encourage guests to travel responsibly, with respect for local cultures and ecosystems.</p>
								</div>
							</div>
						</section>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>2. How We Use Your Information</h3>
						<p className={cx("text-description lg:w-full text-start")}>We use the collected data for the following purposes:</p>

						<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>To Process Bookings:</b> Managing your reservation, sending booking confirmations, and providing customer support.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>To Improve User Experience:</b> Analyzing website performance, troubleshooting technical issues, and personalizing content.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>To Ensure Security & Fraud Prevention:</b> Verifying payments, preventing fraudulent activities, and safeguarding user accounts.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>To Communicate with You:</b> Sending <b>booking confirmations, travel updates, check-in reminders, payment notifications, or important policy updates</b>.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>To Comply with Legal Obligations:</b> Ensuring compliance with local regulations and responding to legal requests if required.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>3. How We Protect Your Data</h3>
						<p className={cx("text-description lg:w-full text-start")}>We implement a variety of security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. These include:</p>

						<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>SSL Encryption:</b> Secure data transmission to protect your sensitive information.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Secure Payment Processing:</b> Payments are handled through <b>third-party PCI-compliant</b> payment processors.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Restricted Access:</b> Only authorized personnel have access to user data, and they are required to follow strict confidentiality obligations.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>4. Sharing of Information</h3>
						<p className={cx("text-description lg:w-full text-start")}>
							We <b>do not sell, rent, or trade</b> your personal information. However, we may share your data in the following cases:
						</p>

						<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Service Providers & Payment Processors:</b> We use third-party payment gateways and booking management software to process transactions securely.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Legal Compliance:</b> If required by law or in response to valid legal requests, such as government regulations or court orders.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Business Transfers:</b> If Wow Borneo undergoes a merger, acquisition, or asset sale, your data may be transferred as part of that transaction.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>5. Cookies & Tracking Technologies</h3>
						<p className={cx("text-description lg:w-full text-start")}>
							Our website uses <b>cookies and tracking technologies</b> to enhance your browsing experience. Cookies help us understand user behavior, improve website performance, and provide personalized recommendations. You can choose to <b>disable cookies</b> in your browser settings, but this may impact certain website functionalities, including booking capabilities. For more details, see our <b>[Cookies Policy]</b>.
						</p>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>6. Your Rights & Data Control</h3>
						<p className={cx("text-description lg:w-full text-start")}>Depending on your location, you may have rights over your personal data, including:</p>
						<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Access & Correction:</b> You may request access to your stored personal information or request corrections.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Data Deletion:</b> You may request deletion of your data unless we are legally required to retain it.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Marketing Preferences:</b> You can opt out of promotional emails at any time by clicking "unsubscribe" in our emails.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Withdraw Consent:</b> If you previously consented to data collection, you may withdraw consent for future use.
								</p>
							</div>
						</div>
						<p className={cx("text-description lg:w-full text-start")}>
							To exercise these rights, please <b>contact us</b> at hey@wowborneo.com.
						</p>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>7. Third-Party Links</h3>
						<p className={cx("text-description lg:w-full text-start")}>
							Our website may contain links to third-party websites (such as social media platforms, external travel guides, or payment gateways). We are not <b>responsible</b> for their privacy policies, and we encourage you to review their terms before sharing your data.
						</p>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>8. Data Retention</h3>
						<p className={cx("text-description lg:w-full text-start")}>
							We <b>retain your personal data only as long as necessary</b> to fulfill booking services, comply with legal obligations, resolve disputes, and enforce agreements.
						</p>

						<div className="flex flex-col gap-y-1 text-description lg:w-full text-start ms-5">
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Booking Data:</b> Retained for up to [X] years as required for record-keeping and legal compliance.
								</p>
							</div>
							<div className="flex items-start justify-start gap-3">
								<IconCircleFilled size={10} className="w-fit mt-2.5" />
								<p className="w-full">
									<b>Marketing & Analytics Data:</b> Retained until you withdraw consent or request deletion.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("text-center grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>9. Updates to this Privacy Policy</h3>
						<p className={cx("text-description lg:w-full text-start")}>
							We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The latest version will always be available on our website, and we will notify users of significant updates. <br />
							<br /> Last updated on: [Insert Date]
						</p>
					</div>
				</section>
				<section className={cx("w-full h-full space-y-0 md:px-0 pb-10 pt-20")}>
					<div className={cx("grid grid-cols-1 gap-y-8 items-end justify-between relative sm:px-8 md:px-16 text-start")}>
						<h3 className={cx("text-subtitle font-prata text-start")}>10. Contact Us</h3>
						<p className={cx("text-description lg:w-full text-start")}>For any questions, requests, or concerns regarding this Privacy Policy, please contact us at:</p>

						<p>
							<b>Email:</b> hey@wowborneo.com
						</p>
						<p>
							<b>Address:</b> [Insert Physical Address]
						</p>
						<p>
							<b>Phone:</b> [Insert Phone Number]
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
