import React , { useState } from 'react'
import phone1 from '../Images/phone1.png'
import phone2 from '../Images/phone2.png'
 
function Detail() {
  return (
    <div className="detail">



        
        
        
        
        <div className="para para1">
            <h3>Truly Free Matrimony App - Zero Ads/Zero Payments</h3>
            <p>Every matrimony app offers free registration but asks for money to connect you to potential matches. Not us! We promise to never ask for money.</p>
            <img className="img1" src={phone1} alt=""/>
        </div>
        <div className="para para2">
            <h3>Let AI find your match - (some cool AI image, eg. neural network)</h3>
            <p>Check your compatibility score based on our AI algorithm</p>
            <img className="img2" src={phone2} alt=""/>
        </div>
        <div className="para para3">
            <h3>Manually Verified Profiles - (detective image)</h3>
            <p>We take extra care to keep scamster and fake profiles out of our platform</p>
            <img className="img3" src="https://betterhalf.ai/static/media/mob3.5e8cf23b.png" alt=""/>
        </div>
        <div className="para para4">
            <h3>Take control of your privacy - (privacy setting screenshot)</h3>
            <p>Manage how much information you want to share</p>
            <img className="img4" src="https://betterhalf.ai/static/media/mob4.7dfe00a3.png" alt=""/>
        </div>
    </div>
  )
}
 
export default Detail
 