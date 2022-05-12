import React from "react";
import { ContactForm } from "../../components";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";

const ContactUs = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center h-[90vh] items-center gap-10">
			<div>
				<p>Contact Us</p>
				<p>Fill up the Form and our Team will get back to you within 24 hours</p>
				<p>
					<BsTelephoneFill />
					+63 927 792 0462
				</p>
				<p>
					<GrMail />
					fastayudainquiry@gmail.com
				</p>
				<p>
					<AiFillHome />
					Manila, Ph
				</p>
			</div>
			<ContactForm />
		</div>
	);
};

export default ContactUs;
