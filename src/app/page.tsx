import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Calculator App",
	description: "Basic Calculator App",
};

const page = () => {
	return <section className="grid h-[90dvh] place-items-center"></section>;
};

export default page;
