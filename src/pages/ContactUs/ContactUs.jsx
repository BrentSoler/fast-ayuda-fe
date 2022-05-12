import React from "react";
import { ContactForm } from "../../components";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";

const ContactUs = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center md:h-[90vh] items-center gap-10 font-pop p-5">
			<div>
				<p className="text-4xl font-bold text-main">Contact Us</p>
				<p className="mb-10 text-xl w-[30rem]">
					Fill up the Form and our Team will get back to you within 24 hours
				</p>
				<p className="form-text">
					<BsTelephoneFill />
					+63 927 792 0462
				</p>
				<p className="form-text">
					<GrMail />
					fastayudainquiry@gmail.com
				</p>
				<p className="form-text">
					<AiFillHome />
					Manila, Ph
				</p>
			</div>
			<ContactForm />
		</div>
	);
};

export default ContactUs;
