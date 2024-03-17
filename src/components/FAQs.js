import React, { useState, useEffect } from 'react';
import './FAQs.css';
const FAQs = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const [faqsToShow, setFaqsToShow] = useState([]);

    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };
    // Randomly generated FAQs
    const faqs = [
        {
            question: "What is baby sleep training?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            question: "Does the Lumi smart Sleep Coach app work?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            question: "I don't have time to track manually, is there an alternative?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
            question: "Is sleep training safe for my baby?",
            answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        },
        {
            question: "Are there multiple sleep training methods to choose from?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            question: "How long does it take for my baby's sleep to improve?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            question: "When can I start training my baby to sleep with the Lumi Smart Sleep Coach?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
            question: "Can I grant app access to other people who care for my baby?",
            answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        },
        {
            question: "Is it too late to sleep train my baby?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            question: "How long will I have access?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            question: "Can I cancel my plan?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        }

    ];
 {/* eslint-disable-next-line */}
    useEffect(() => {
        // Determine the number of FAQs to show based on screen width
        const screenWidth = window.innerWidth;
        let numberOfFaqs = faqs.length; // Default number of FAQs to show

        if (screenWidth <= 768) {
            numberOfFaqs = 5; // If screen width is less than or equal to 768px, show only 5 FAQs
        }

        setFaqsToShow(faqs.slice(0, numberOfFaqs)); // Slice the array to get the desired number of FAQs
       
    }, []);

    return (

    <div id='FAQ'>
            <div>
            <div className='text-container'>
            <div className='blue' style={{textAlign: 'center'}}>
    <h1>We're here to answer your questions</h1>
</div>

            </div>
            {faqsToShow.map((faq, index) => (
               <div className='FAQs-container'>
                 <div key={index} className="faq-item">
                    <div
                        className="faq-question"
                        onClick={() => toggleExpand(index)}
                    >
                        <div>{faq.question}</div>
                        <div>{expandedIndex === index ? '▲' : '▼'}</div>
                    </div>
                    {expandedIndex === index && (
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
               </div>
            ))}
            <div className='below-button1'  style={{ width: '150px', margin: 'auto', marginBottom:"100px"}  }>
                <button>Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default FAQs;