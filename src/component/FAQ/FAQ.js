import React , { useState } from 'react'
import Navbar from '../Navbar'
import FAQd from './FAQ-detail'
 
function FAQ() {
  return (
    <div>
        <Navbar />
        <div className="faq">
            <h1>FAQ</h1>
            <div>
                <FAQd 
                  title="What is Betterhalf.ai?"
                  para1="Betterhalf.ai is a modern matrimony app for urban Indians. We predict and recommend the best profiles suitable to your personality and prederences. When two beautiful souls with common interests, beliefs, personalities, values and life goals come together, we believe it is a match made in AI heaven."
                />
                <FAQd 
                  title="How is Betterhalf different from other platforms?"
                  para1="Betterhalf can be termed as a modern matrimony app. It serves to its premium pool of age group; 25-35 years, who are looking for a serious relationship with an intent to get married within a year or two. Unlike traditional matchmaking & matrimony sites, Betterhalf.ai provides hassle free experience & AI compatible matches with these two unique features:"
                  para2="Premium network of professionals: Get connected with professionals working at top notch companies like Google, Amazon, Adobe, Accenture etc. and send/accept their request based on your compatibility score with them to end your exhaustive search of finding a life partner."
                />
                <FAQd 
                  title="How is Betterhalf using Artificial Intelligence and Machine Learning?"
                  para1="Kindly read our recent article on this
                        https://medium.com/@betterhalfai/how-betterhalf-ai-uses-ai-to-match-users-to-their-compatible-partners-7176a10b5960"
                />
                <FAQd 
                  title="How does Betterhalf calculate compatibility?"
                  para1="Our AI has developed six-dimensional compatibility analysis for Betterhalf which addresses the basic lifestyle and preferences of an individual. While creating a profile, personality traits are captured through a series of questions curated by the professors of Cambridge. The questionnaire brings out the personality traits like kindness, dominance, social, quarrelsome etc. and is attentively designed and positioned in a way to improve the user experience."
                  para2="Betterhalf AI engine is focussed on six personality dimensions: relationships, social, intellectual, emotional, values and physical level. A person is matched based on their individual compatibility score (87% on emotional, 91% on intellectual, 73% on values etc.) as well as overall compatibility score (88% total compatibility). As users interact with the matches and the compatibility percentage gets more attuned to the user’s preferences, it provides more personalized matches over time."

                />
                <FAQd 
                  title="How do I create a profile on Betterhalf?"
                  para1="Step 1: Sign Up through Facebook"
                  para2="Step 2: Answer quick personality questions"
                  para3="Step 3: Fill in your details like Name, Education, City etc."
                  para4="Step 4: Upload your pictures following these guidelines"
                  para5="Step 5: State your partner preferences"
                  para6="Step 6: View your instant 25 matches and check your compatibility score"
                  para7="Step 7: Send connection requests to the profiles you like and let’s get started!"

                />
                
            </div>
        </div>
        
        
    </div>
  )
}
 
export default FAQ
 