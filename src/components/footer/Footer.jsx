'use client';

import { Footer } from 'flowbite-react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function FooterWithSocialMediaIcons() {
    return (
        <Footer container className='bg-transparent'>
            <div className="w-2/3 mx-auto">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            alt="Flowbite Logo"
                            href="https://flowbite.com"
                            name="Vocatel"
                            src="https://www.flowbite-react.com/favicon.svg"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Vocatel
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Us
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="Vocatel"
                        href="#"
                        year={2023}
                    />
                </div>
            </div>
        </Footer>
    )
}