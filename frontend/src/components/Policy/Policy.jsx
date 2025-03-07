import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './Policy.css';

// Import images
import returnPolicyImg from './policyimg/policy1.jpeg';
import bonusCardImg from './policyimg/policy2.jpeg';
import sawaPointsImg from './policyimg/policy3.jpeg';
import privacyImg from './policyimg/policy4.jpeg';
import giftVoucherImg from './policyimg/policy5.jpeg';
import termsImg from './policyimg/policy3.jpeg';

const policies = [
  {
    title: 'Return Policy',
    content: [
      'Customers may return products within [X] days of purchase.',
      'Items must be in original condition and packaging.',
      'Proof of purchase is required for all returns.',
      'Certain items are non-returnable; see our [list of non-returnable items].',
    ],
    image: returnPolicyImg,
  },
  {
    title: 'Bonus Card Policy',
    content: [
      'Bonus cards are issued to customers who spend over [X] amount.',
      'Each bonus card is valid for [X] months from the date of issue.',
      'Bonus cards are non-transferable and cannot be exchanged for cash.',
      'Lost or stolen bonus cards cannot be replaced.',
    ],
    image: bonusCardImg,
  },
  {
    title: 'Beisawa Loyalty Points Policy (Sawa Points)',
    content: [
      'Customers earn [X] Sawa Points for every [X] amount spent.',
      'Sawa Points can be redeemed for discounts on future purchases.',
      'Points expire after [X] months of inactivity.',
      'Sawa Points cannot be transferred between accounts.',
    ],
    image: sawaPointsImg,
  },
  {
    title: 'Privacy and Cookie Policy',
    content: [
      'We collect personal information to improve our services.',
      'Cookies are used to enhance user experience and analyze site traffic.',
      'Personal data is stored securely and not shared with third parties without consent.',
      'Users can manage cookie preferences through their browser settings.',
    ],
    image: privacyImg,
  },
  {
    title: 'Gift Voucher Policy',
    content: [
      'Gift vouchers are valid for [X] months from the date of purchase.',
      'Vouchers can be used for any in-store or online purchase.',
      'Gift vouchers are non-refundable and cannot be exchanged for cash.',
      'Lost or stolen vouchers will not be replaced.',
    ],
    image: giftVoucherImg,
  },
  {
    title: 'Terms and Conditions',
    content: [
      'Use of our website constitutes acceptance of these terms.',
      'Prices and availability of products are subject to change without notice.',
      'We reserve the right to refuse service to anyone for any reason.',
      'Users are responsible for maintaining the confidentiality of their account information.',
    ],
    image: termsImg,
  },
];

const Policy = () => {
  return (
    <div className="policy-container">
      <motion.h1 
        className="policy-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        OUR POLICIES
      </motion.h1>
      
      {policies.map((policy, index) => (
        <motion.div
          className={`policy-section ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="policy-image">
            <img src={policy.image} alt={policy.title} />
          </div>
          <div className="policy-content">
            <h2 className="policy-title">{policy.title}</h2>
            <ul>
              {policy.content.map((point, idx) => (
                <li key={idx}><FaCheckCircle className="check-icon" /> {point}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Policy;