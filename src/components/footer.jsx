import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#000a2e] mt-8 text-white ">
      <div className="px-6">
        <div className="flex flex-wrap justify-between py-10 gap-4 mx-auto">
          <div className="col-md-4">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-sm">
            Sri Sivasubramaniya Nadar (SSN) College of Engineering, founded by Shiv Nadar, Founder, HCL Technologies, stands out as a premier center of higher learning with a mission of pursuing excellence in education and research. The institution, with its diverse and dynamic community of students, faculty and staff, offers a distinctive combination of some of graduate, undergraduate and research programs, and is spread over a sprawling 250 acres of sylvan surroundings.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="list-unstyled text-sm">
              <li>
                <a
                  href="https://www.ssn.edu.in"
                  className="text-white hover:underline"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="https://www.ssn.edu.in"
                  className="text-white hover:underline"
                >
                  Conferences
                </a>
              </li>
              <li>
                <a
                  href="https:/www./ssn.edu.in"
                  className="text-white hover:underline"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="https://www.ssn.edu.in"
                  className="text-white hover:underline"
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-sm">
            Sri Sivasubramaniya Nadar College of Engineering
            <br />
Rajiv Gandhi Salai (OMR),<br /> Kalavakkam – 603 110,<br /> Tamil Nadu,<br /> India<br />
Phone: 044 2746 9700
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4">
          <div className="w-full">
            <p className="text-sm text-center">
              Copyright © 2025 SSN College of Engineering. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;