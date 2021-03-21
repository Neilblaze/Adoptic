# Adoptic

## Inspiration
The pandemic had us locked in our homes, working from home. Pro-longed hours in-front of a device screen at a close distance have become the new normal, but these long hours of staring at the device screen can cause the eye-muscles to strain, causing headaches and other vision-related problems like myopia and hypermetropia. Everyone is an open target of this, be it toddlers, teenagers, or adults, & for this various type of severe eye diseases like Computer vision syndrome is quite normal these days.

This is where **Adoptic** comes to the rescue! 🦸 

## What it does
**Adoptic** is a smart AI-based web application that strives against eye-straining and it's side-effects. It provides gesture support for specially-abled people for easy document navigation. And most importantly, provides an intuitive way of bypassing the eye-straining problem that everyone faces in their daily lives!

## How we built it
**Adoptic** is primarily a Javascript based Webapp, running on Tensorflow.js which segments the face under the hood via face-api.js and tracks the user's face providing a very unique way of adjusting the text-scaling with respect to the proximity between the user and the input feed, i.e. the webcam stream. Moreover, it's also fitted with posenet which takes the poses of the user as input and populates the result as gesture-based navigation on the screen. We are using few 3rd party API's like PDF.js for rendering the pdf on the canvas. 

Few resources used are mentioned below :-

Research links :- 
• Realtime Facial Surface geometry : https://arxiv.org/pdf/1907.06724.pdf
• Tfjs 3d plot: https://bit.ly/3f0tSuh

Other Resources :-
• Mediapipe Facemesh (Face & Hand Tracking) : https://bit.ly/3r2ykv3
• Realtime pose estimation using posenet : https://bit.ly/3c6BPw3
• Face-Api.js : https://bit.ly/3tEmJnu
• Azure Cognitive Service Modules : https://bit.ly/3r1s06U
• Azure CSM quickstart guide : https://bit.ly/3lIXaPy

News sources :-
• TOI : https://bit.ly/3lIltgn
• NYT : https://nyti.ms/3s6GG60

Face :-
• https://www.artstation.com/artwork/DxBkPR

## Challenges we ran into
Many! The most critical ones include the transition of the python SSD model into TF.js. We're also facing heavy overfitting isses, which degraded the overall experience. But luckily someone on StackOverflow had the solution of the similar issue, which helped us cover it up quickly. And yes, recording a pitching video is not an easy job at all! 🤐

## Accomplishments that we're proud of
We are proud of finishing the project on time, which seemed like a tough task initially but happily were also able to add most of the features that we envisioned for the app during ideation.

## What we learned
**Proper sleep is very important! :p**
Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon 😆 

## What's next for Adoptic
Finish the unfinished ones, which includes adding support to Google Drive, integrating OAuth & a native dashboard followed by improvement in UI. Later, the code might be refactored for adding responsiveness & support for mobile devices.
