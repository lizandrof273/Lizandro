import React, { Component }  from 'react';
import './myStyles.css'
import me from './me.png';

export const About = () => 
<div className={`main container`}>
        <img src={me} width='160' height='170' class ="rcorners4"/> 
        
        <h2>About me</h2>
        <p> I am an aspiring Software Engineer with passion to create. Currently studying computer science 
            and data science at the University of California, Berkeley. I am employed by the school as a Data Analyst, 
            my goal is to use data to help those underrepresented in the university. I held an 
            Internship Facebook under the program "Facebook University", where I helped develop an Android application
            that encourages hanging out with friends that have free time that overlaps with the user.   </p>
        <p>I love to learn from others and I am always excited to pick up new technologies (frameworks / 
            libraries / languages / etc). I am always fully engaged in meetings and I always take 
            opportunities to lead and bring the team together, in order to insure the best possible product. </p>
        <p>Outside of bringing to life products I have several hobbies. One thing I love to do is run,
             one of my dreams is to qualify and run in the Olympics for a marathon. I love creating in
            general, whether it is a website, a creative video, or music. 
        </p>
        
 </div>

 