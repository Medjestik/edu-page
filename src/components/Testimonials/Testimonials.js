import React from 'react';
import './Testimonials.css';
import Slider from '../Slider/Slider.js';
import firstImg from '../../images/firstImg.png';
import secondImg from '../../images/secondImg.png';
import thirdImg from '../../images/thirdImg.png';

const testimonials = [
  {id: 1, name: 'Viezh Robert', town: 'Warsaw, Poland', rating: 4.5, text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.', image: firstImg},
  {id: 2, name: 'Yessica Christy', town: 'Shanxi, China', rating: 4.5, text: '“I like it because I like to travel far and still can connect with high speed”.', image: secondImg},
  {id: 3, name: 'Yessica Christy', town: 'Shanxi, China', rating: 4.5, text: '“This is very unusual for my business that currently requires a virtual private network that has high security”.', image: thirdImg},
  {id: 4, name: 'Viezh Robert', town: 'Warsaw, Poland', rating: 4.5, text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.', image: firstImg},
  {id: 5, name: 'Yessica Christy', town: 'Shanxi, China', rating: 4.5, text: '“I like it because I like to travel far and still can connect with high speed”.', image: secondImg},
  {id: 6, name: 'Yessica Christy', town: 'Shanxi, China', rating: 4.5, text: '“This is very unusual for my business that currently requires a virtual private network that has high security”.', image: thirdImg},
  {id: 7, name: 'Viezh Robert', town: 'Warsaw, Poland', rating: 4.5, text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.', image: firstImg},
  {id: 8, name: 'Yessica Christy', town: 'Shanxi, China', rating: 4.5, text: '“I like it because I like to travel far and still can connect with high speed”.', image: secondImg},
  {id: 9, name: 'Yessica Christy', town: 'Shanxi, China', rating: 4.5, text: '“This is very unusual for my business that currently requires a virtual private network that has high security”.', image: thirdImg},
  {id: 10, name: 'Viezh Robert', town: 'Warsaw, Poland', rating: 4.5, text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.', image: firstImg},
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
        <h2 className="testimonials__title">Trusted by Thousands of Happy Customer</h2>
        <p className="testimonials__subtitle">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        <Slider items={testimonials} />
    </section>
  );
}

export default Testimonials;