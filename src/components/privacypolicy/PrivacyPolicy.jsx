import Image from 'next/image';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center w-4/5 mx-auto my-32">
      <header className="flex justify-between w-4/5 pb-8">
        <Image width={200} height={200} className="w-1/3 object-contain" src="/assets/longlogo.webp" alt="logo" />
        <div>
          <b className="text-black">Modern HR Software for Modern Day Companies</b>
          <p className="text-black">
            Email: <a className="text-yellow-500" href="mailto:admin@hrbox.africa">admin@hrbox.africa</a>
          </p>
          <p className="text-black">
            Website: <a className="text-yellow-500" href="https://hrboxafrica.com/">hrboxafrica.com</a>
          </p>
        </div>
      </header>
      <div className="w-4/5 mx-auto">
        <h3 className="text-lg font-bold text-gray-900">HR BOX AFRICA DATA PRIVACY POLICY</h3>

        <p className="text-black text-base leading-relaxed mt-4">
          <strong>HR BOX AFRICA LTD</strong> (hereinafter referred to as “us”, “we”, “our”, or HR BOX AFRICA) is committed to
          ensuring the privacy and accuracy of your information. By “your information”, we mean any information that you
          may provide to us. This statement of privacy pertains to personal information we may collect and/or use in
          order to administer our services and products.
        </p>

        <p className="text-black text-base leading-relaxed mt-4">
          This privacy policy applies to our collection and use of personal information received through the means
          provided below:
        </p>
        <ul className="list-disc pl-8 mt-2">
          <li className="text-black text-base leading-relaxed">Information collected by using our website.</li>
          <li className="text-black text-base leading-relaxed">Information collected when purchasing our products or services.</li>
          <li className="text-black text-base leading-relaxed">Information collected through phone calls, contracts, agreements, email.</li>
          <li className="text-black text-base leading-relaxed">Any other way that personal information may be collected.</li>
        </ul>

        <h3 className="text-lg font-bold text-gray-900 mt-6">DATA PROTECTION PRINCIPLES</h3>

        <p className="text-black text-base leading-relaxed mt-4">
          In complying with the Data Protection Act, 2019, we shall ensure that the personal information we hold about
          you is:
        </p>
        <ul className="list-disc pl-8 mt-2">
          <li className="text-black text-base leading-relaxed">Used lawfully, fairly and in a transparent way.</li>
          <li className="text-black text-base leading-relaxed">Collected only for valid purposes that we shall clearly explain to you.</li>
          <li className="text-black text-base leading-relaxed">
            Put to use only for the purposes for which it was collected and not in any way that is incompatible with those
            purposes.
          </li>
          <li className="text-black text-base leading-relaxed">Accurate and kept up to date.</li>
          <li className="text-black text-base leading-relaxed">Kept only as long as necessary for the purposes we shall have explained.</li>
          <li className="text-black text-base leading-relaxed">Kept securely.</li>
        </ul>

        <h3 className="text-lg font-bold text-gray-900 mt-6">INFORMATION COLLECTED</h3>

        <p className="text-black text-base leading-relaxed mt-4">
          Information we receive from our clients remains their sole and exclusive property and is used only for the
          purposes agreed upon. The information is used for no other purpose without express permission from you. Such
          information is considered confidential and all of our employees meet the highest standards of confidentiality.
        </p>

        <p className="text-black text-base leading-relaxed mt-4">
          We may collect the following information from you:
        </p>
        <ul className="list-disc pl-8 mt-2">
          <li className="text-black text-base leading-relaxed">Basic company information such as name and contact details.</li>
          <li className="text-black text-base leading-relaxed">Company bank details such as account number, account name, bank name, bank branch.</li>
          <li className="text-black text-base leading-relaxed">
            Employee information that includes personal details, contract details, and salary details.
          </li>
        </ul>

        <h3 className="text-lg font-bold text-gray-900 mt-6">THIRD PARTY</h3>
        <p className="text-black text-base leading-relaxed mt-4">
          HR BOX AFRICA LTD follows strict privacy practices and procedures regarding the disclosure of personal
          information. Information is not shared with, or transferred to any other corporation, body, or individual, in
          its original or any modified form, unless we are required to do so by statute or legal proceeding, or
          authorized by you.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6">COOKIES</h3>
        <p className="text-black text-base leading-relaxed mt-4">
          We may use cookies to enhance your experience on our site. A “cookie” is a small data file stored on your
          computer’s hard drive. Cookies allow us to recognize who you are when you arrive at our site by associating
          the identification numbers in the cookie with other information you, as a site visitor, have provided us. A
          cookie cannot retrieve any other data from your hard drive or pass on computer viruses.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6">HOW TO CONTACT US</h3>
        <p className="text-black text-base leading-relaxed mt-4">
          If you have any questions about this Privacy Policy, kindly contact us at:
        </p>
        <a className="text-yellow-500" href="mailto:admin@hrbox.africa">
          admin@hrbox.africa
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
