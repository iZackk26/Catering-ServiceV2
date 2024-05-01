import React, { useState } from 'react';

const questionsAnswers = [
  {
    question: 'What payment methods do you accept?',
    answer: 'Currently in the company we accept the payment methods of Paypal, Stripe, debit and credit card.'
  },
  {
    question: 'What is the estimated delivery or service execution time?',
    answer: 'Once you place the order through our calendar platform, that day that you have registered with all the information, it is sent directly to the catering service and they should be arriving approximately 1 hour before the start time of the event.'
  },
  {
    question: 'What warranties or return policies do you offer?',
    answer: 'We offer a 7 day warranty'
  },
  {
    question: 'Do you offer special deals or discounts for frequent customers?',
    answer: 'Yes, we offer a 50% discount every 10 events, that is, if you are a person who is a frequent customer and you have contracted 20 services, after that, every 10 events you will receive a 50% discount on the packages you are going to hire.'
  },
  {
    question: 'How can I leave a review or feedback about your services?',
    answer: 'We greatly appreciate that you want to leave a review about the app, we are working hard to implement a reviews section and a testimonials section on the website.'
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-5">
      <h2 className="text-4xl font-bold mb-5">Frequently Asked Questions</h2>
      {questionsAnswers.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            className="py-2 px-4 w-full text-left text-white bg-blue-500 hover:bg-blue-700 font-semibold rounded-lg"
            onClick={() => handleToggle(index)}
          >
            {item.question}
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-200 rounded-lg mt-2">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
