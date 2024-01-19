import Image from "next/image";


const AboutPage = () => {
    return (
        <div className="w-screen">
            <div className="bg-[#FF4500] h-screen">
                <div className="text-center flex items-center justify-center h-screen max-w-sm md:max-w-lg mx-auto">
                    <div className="space-y-4">
                        <h1 className="text-5xl text-white font-bold">Community Building</h1>
                        <p className="text-[20px] text-gray-700">Join us in building a community where your voice matters. Whether you are here to share your expertise, learn from others, or simply connect with like-minded individuals, Dilogify is your platform to engage and grow.</p>

                        <Image src="https://i.ibb.co/FnT729k/community.jpg" alt="community image"
                            height={600}
                            width={600}
                        />
                    </div>
                </div>
            </div>

            <div className=" h-screen">
                <div className="text-center flex items-center justify-center h-screen max-w-sm md:max-w-lg mx-auto">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold">Our Mission</h1>
                        <p className="text-[20px] text-gray-700">Our mission is to provide a space for open and respectful dialogue. We strive to create an inclusive environment
                            where users can express themselves, learn from others, and engage in conversations that matter.</p>

                        <Image src="https://i.ibb.co/XFk3fXH/mission.png" alt="community image"
                            height={600}
                            width={600}
                        />
                    </div>
                </div>

            </div>
            <div className=" h-screen bg-[#FF4500]">
                <div className="text-center flex items-center justify-center h-screen max-w-sm md:max-w-lg mx-auto">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold">Privacy and Security</h1>
                        <p className="text-[20px] text-gray-700">Your privacy and security are our top priorities. We implement robust measures to safeguard your data, ensuring you can freely express yourself without concerns.</p>

                        <Image src="https://i.ibb.co/R055qmB/security.jpg" alt="community image"
                            height={600}
                            width={600}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;