import React from 'react'

export default function StoryCard({index}) {
  return (
    <div className={"story-card "+((index+1)%3===0  ? 'dark': (index+1)%2==0 ? "semi-dark" :"")}>
        <div className="story-card-row">
            <img src="https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DM0rkDcI7zZu08Q9k8wn4idUmfRVbuv~3ACLA81qjFQhS5UObWxk8uIuyo1CPb5uerM87eSPP36R6NqqIFwV87FolMn4ztRRDyxA-jR4q0ReDwiIRhh6WgassXzZB~LOwG1aFBhT7G7uVRS7s5~RlvNvd4tEeAvy5GoK5wYLsk0yndcgFFlkM~w00FJ4d5bj9pO6dyIIKxsAzuS7Lh1vsXIm4Rcjmtg5qj4bQp0bjNOE76WFjsgu7021NKZunSov2PELdCy6G3O0EZwgVbK-UV8ss3Mc1-xkwFll2UdVcq9CG~AdNma1ChpsQXq5OfNKYHkukaINqw2SsrfXb3Ff4w__" alt="" />
            <b className="story-card-title">
                Experiance data management and track progress {index}
            </b>
        </div>
        <div className="story-card-row">
            <p>Effortlessly monitor your progress with complimentary data management services, ensuring streamlined organization and optimization of your data. Effortlessly monitor your progress with complimentary data management services, ensuring streamlined organization and optimization of your data.</p>
        </div>
    </div>
  )
}
