import './Style.css'
import Probo from './assets/probo-3.png'
import Language from './assets/language-change.avif'
import video from './assets/video.png'
import list from './assets/event-list-table-1.avif'
import subimg from './assets/table-subimg.avif'
import RightArrow from './assets/probo-arrow-right.svg'
import Earth from './assets/earth.avif'
import Filter from './assets/filter.avif'
import WhiteRight from './assets/probo-arrow-right-white.svg'
import Exit from './assets/exit.avif'
import Adult from './assets/18+.avif'
import StartQuotes from './assets/quotes-start.avif'
import EndQuotes from './assets/quotes-eend.avif'
import FirstPerson from './assets/person-1.avif'
import SecondPerson from './assets/person-2.avif'
import ThirdPerson from './assets/person-3.avif'
import FourthPerson from './assets/person-4.avif'
import Sardar from './assets/sardarji.avif'
import Vadil from './assets/vadil.avif'
import Linkedin from './assets/linkedin.avif'
import Twitter from './assets/twitter.avif'
import Instagram from './assets/instagram.avif'
import Youtube from './assets/youtube.avif'












function User () {
    return(
    <>
 <div className="navbar">
            <div className="logo" ><img src={Probo} alt="probo-logo" /></div>
            <div className="list-item">
                <div>Trading</div>
                <div>Team 11</div>
                <div>Read</div>
                <div>Cares</div>
                <div>Carrers</div>
            </div>
            <div className="right-item">
                <div className="para">For 18 years and above only</div>
                <button className="download-button">Download App</button>
                <button className="trade-online-button">Trade Online</button>
                <div className="language-change-icon"><img src={Language} alt="language-change-icon" /></div>
            </div>
        </div>

        <div className="part-1">
    <div className="subpart-1">
        <p className="part-1-p1">Invest in your</p>
        <p className="part-1-p2">point of View</p>
        <p className="part-1-p3">Sport,Entertainment,Economy or Finance.</p>
        <div className="button-part-1">
        <button className="download-button">Download App</button>
        <button className="trade-online-button">Trade Online</button>
        </div>
        <div className="part-1-p4">
      <input className="checkbox" type="checkbox" defaultChecked />
      For 18 years and Above Only
    </div>
    </div>
    <div className="subpart-2">
        <img style={{ height: "570px", width: "590px" }} src="women-think-1.avif" alt="women-thinking" />
    </div>
</div>

<section className="slider-sec">
    <div className="style-container">
    <div className="style-row">

        <div className="slider-column-1">

    <div className="headlines">
    <div className="selected">Samachar</div>
    <div>Vichaar</div>
    <div>Vyapaar</div>
    </div>

    <div className="headlines-description">
        <div className="description-tittle">Be in the Know</div>
        <div>Invest in your opinions about future events and use your knowledge to trade & benefit.</div>
    </div>
    
         </div>

         <div className="slider-column-2">
             <img src={video} alt="frame" />
         </div>

    </div>
    </div>
</section>

<div className="event-sec">
    <div className="event-sec-column-1">
        <div className="event-p1">Trade when you like,</div>
        <div className="event-p2">on what you like.</div>
    </div>

    <div className="event-sec-column-2">
        <div className="event-list">
            <div className="event-list-sec">
                
              <div className="event-card-1">
                <div className="event-img-1"><img src={list} /></div>
                <div className="event-cardstats"><img style={{height: "16px", width: "16px"}} src={subimg} /> <p className="event-cardtxt">32517 Trader</p></div>
                <div className="event-card-tittle">Center to Constitute the 8th pay Commision?</div>
                <div className="event-btn"><button className="event-yesbtn">Yes $2</button> <button className="event-nobtn">No $8</button></div>
              </div>

            </div>
        </div>
        <div className="event-card-1">
            <div className="event-img-1"><img src={list} /></div>
            <div className="event-cardstats"><img  style={{height: "16px", width: "16px"}}  src={subimg} /> <p className="event-cardtxt">32517 Trader</p></div>
            <div className="event-card-tittle">Center to Constitute the 8th pay Commision?</div>
            <div className="event-btn"><button className="event-yesbtn">Yes $2</button> <button className="event-nobtn">No $8</button></div>
          </div>

          <div className="event-card-1">
            <div className="event-img-1"><img src={list} /></div>
            <div className="event-cardstats"><img  style={{height: "16px", width: "16px"}}  src={subimg} /> <p className="event-cardtxt">32517 Trader</p></div>
            <div className="event-card-tittle">Center to Constitute the 8th pay Commision?</div>
            <div className="event-btn"><button className="event-yesbtn">Yes $2</button> <button className="event-nobtn">No $8</button></div>
          </div>

          <div className="event-card-1">
            <div className="event-img-1"><img src={list} /></div>
            <div className="event-cardstats"><img  style={{height: "16px", width: "16px"}}  src={subimg} /> <p className="event-cardtxt">32517 Trader</p></div>
            <div className="event-card-tittle">Center to Constitute the 8th pay Commision?</div>
            <div className="event-btn"><button className="event-yesbtn">Yes $2</button> <button className="event-nobtn">No $8</button></div>
          </div>

          <div className="event-card-1">
            <div className="event-img-1"><img src={list} /></div>
            <div className="event-cardstats"><img  style={{height: "16px", width: "16px"}}  src={subimg} /> <p className="event-cardtxt">32517 Trader</p></div>
            <div className="event-card-tittle">Center to Constitute the 8th pay Commision?</div>
            <div className="event-btn"><button className="event-yesbtn">Yes $2</button> <button className="event-nobtn">No $8</button></div>
          </div>

          <div className="event-card-1">
            <div className="event-img-1"><img src={list} /></div>
            <div className="event-cardstats"><img  style={{height: "16px", width: "16px"}}  src={subimg} /> <p className="event-cardtxt">32517 Trader</p></div>
            <div className="event-card-tittle">Center to Constitute the 8th pay Commision?</div>
            <div className="event-btn"><button className="event-yesbtn">Yes $2</button> <button className="event-nobtn">No $8</button></div>
          </div>

          <div className="event-card-1">
            <div className="event-img-1"><img src={list} /></div>
            <div className="event-cardstats"><img  style={{height: "16px", width: "16px"}}  src={subimg} /> <p className="event-cardtxt">32517 Trader</p></div>
            <div className="event-card-tittle">Center to Constitute the 8th pay Commision?</div>
            <div className="event-btn"><button className="event-yesbtn">Yes $2</button> <button className="event-nobtn">No $8</button></div>
          </div>

          <div className="event-card-1">
            <div className="event-img-1"><img src={list} /></div>
            <div className="event-cardstats"><img  style={{height: "16px", width: "16px"}}  src={subimg} /> <p className="event-cardtxt">32517 Trader</p></div>
            <div className="event-card-tittle">Center to Constitute the 8th pay Commision?</div>
            <div className="event-btn"><button className="event-yesbtn">Yes $2</button> <button className="event-nobtn">No $8</button></div>
          </div>

    </div>
    
</div>

<div className="info-wrapper">
    <div className="info-wrapper-1"><p className="wrapper-1-txt">What’s new in Probo?</p> <img style={{height: "30px", width: "30px", marginLeft: "270px"}} src={RightArrow} /></div>
    <div className="info-wrapper-2"><p className="wrapper-2-txt">Probo Cares</p> 
        <p className="wrapper-2-para">Be it loss protection or data security, Probo is user first always. Check out the latest on responsible trading.</p>
        <div className="read-more"><p>Read More</p> <img style={{width: "15px"}} src={WhiteRight} /></div>
    </div>
    <div className="info-wrapper-3"><p className="wrapper-3-txt">Exiting trades is your choice</p>
        <p className="wrapper-3-para">The ‘Exit’ feature gives the user an opportunity to exit from the current trade and helps in controlling your losses and maximising the profit.</p>
        <div className="read-more"><p>Read More</p> <img style={{width: "15px"}} src={WhiteRight} /></div>
    </div>
</div>

<div className="info-wrapper-part2">
    <div className="info-wrapper-p1"><p style={{ maxWidth: "312px" }} className="wrapper-p1-txt">Market Orders and Instant Exit</p>
    <p  className="wrapper-p1-para">Market orders are a fast and reliable method to buy or exit a trade in a fast-moving market. With market orders, quantities are matched almost instantly after placing an order at the best available price. Come test drive.</p>
    <div className="read-more"><p>Read More</p> <img style={{width: "15px"}} src={WhiteRight} /></div>

    </div>
    <div className="info-wrapper-p2"><p className="wrapper-p2-txt">The Power of Prediction Markets</p>
    <p className="wrapper-p2-para">Check out case studies, research articles and the utility of Probo events</p>
    <div className="read-more"><p>Read More</p> <img style={{width: "15px"}} src={WhiteRight} /></div>

    </div>
</div>

<div className="feature-sec">
    <div className="feature-sec-p1">
        <p className="feature-para-1">Probo takes care of you,<br />so you take care of your trades. </p>
    </div>
    <div className="feature-sec-p2">
        <div className="feature-f1">
            <img style={{ maxWidth: "80px"}} className="feature-icon" src={Earth} />
            <p className="f1-para-1">Fastest news feed in the <br /> game</p>
            <p className="f1-para-2">Probo is all about understanding the world around us and bene fitting from our knowledge. Everything on Probo is based on real events that you can learn about, verify and follow yourself.</p>
        </div>

        <div className="feature-f2">
            <img style= {{maxWidth: "80px"}} className="feature-icon" src={Filter} />
            <p className="f1-para-1">All the news without the noise</p>
            <p className="f1-para-2">Probo is all about understanding the world around us and bene fitting from our knowledge. Everything on Probo is based on real events that you can learn about, verify and follow yourself.</p>
        </div>

        <div className="feature-f3">
            <img style={{maxWidth: "80px"}} className="feature-icon" src={Exit} />
            <p className="f1-para-1">The power to exit trades, anytime</p>
            <p className="f1-para-2">Probo is an opinion trading platform. And, like a true trading platform, Probo gives you the power to exit. You can withdraw from a trade, if it’s not going in the direction you thought it will go.</p>
        </div>

        <div className="feature-f4">
            <img style={{maxWidth: "80px"}} className="feature-icon" src={Adult} />
            <p className="f1-para-1">The pulse of society is on Probo</p>
            <p className="f1-para-2">Besides helping you learn important financial & trading skills, Probo also helps you understand the collective thoughts of Indians. Knowledge that is crucial for the betterment of our country.</p>
        </div>
    </div>
</div>

<div className="opportunity-sec">

  <div className="opportunity-tittle-p1">
   <img src={StartQuotes} />
   <p className="opportunity-tittle-para">News that creates trading</p>
  </div>

  <div className="opportunity-tittle-p2">
    <p className="opportunity-tittle-para">opportunity, everyday</p>
    <img className="quotes-end" src={EndQuotes} />
   </div>

   <div className="feature-row">
    <div className="person-1">
        <div className="person-img"><img className="person-img" src={FirstPerson} /></div>
        <div className="txt-box">
            <p className="nazar">Nazar</p>
            <p className="nazar-des">Keep an eye on the happenings around you. Be it Politics, Sports, Entertainment and more.</p>
        </div>
    </div>
    <div className="person-2">
        <div className="person-img"><img className="person-img" src={SecondPerson} /></div>
        <div className="txt-box">
            <p className="nazar">Khabar</p>
            <p className="nazar-des">Understand the news without the noise. Get to the crux of every matter and develop an opinion.</p>
        </div>
    </div>
    <div className="person-3">
        <div className="person-img"><img className="person-img" src={ThirdPerson} /></div>
        <div className="txt-box">
            <p className="nazar">Jigar</p>
            <p className="nazar-des">Have the courage to stand by your opinions about upcoming world events by investing in them.</p>
        </div>
    </div>
    <div className="person-4">
        <div className="person-img"><img className="person-img" src={FourthPerson} /></div>
        <div className="txt-box">
            <p className="nazar">Sabar</p>
            <p className="nazar-des">Have the patience to negotiate market ups and downs, and take a decision as events unfold.</p>
        </div>
    </div>
   </div>

</div>

<div className="download-app">
    <div className="download-para"><p>What will be the return on your opinions?</p></div>
    <button className="download-app-button">Download App</button>
    <div className="two-man">
        <div><img style={{height: "300px", width: "300px"}} src={Sardar} /></div>
        <div><img style={{height: "300px", width: "300px"}} src={Vadil} /></div>
    </div>
</div>

<div style={{marginTop: "30px"}} className="navbar">
    <div className="logo" ><img src={Probo} alt="probo-logo" /></div>

    <div className="right-item">
        <div className="para">For 18 years and above only</div>
        <button className="download-button">Download App</button>
        <button className="trade-online-button">Trade Online</button>
    </div>
</div>

<div className="footer-p1">

    <div className="f1">
        <p className="bold">Company</p>
        <p>About Us</p>
        <p>Culture</p>
    </div>

    <div className="f2">
         <p className="bold">Resources</p>
         <p>Help Centre</p>
         <p>Contact Support</p>
         <p>What's New</p>
    </div>

    <div className="f3">
        <p className="bold">Careers</p>
        <p>Open Roles</p>
    </div>

    <div className="f4">
         <p className="bold">Contact Us</p>
         <p>help@probo.in</p>
         <p>communication@probo.in</p>
    </div>
</div>

<div className="social">
    <div className="social-icon">
        <img src={Linkedin} />
        <p id="p">LinkedIn</p>
    </div>

    <div className="social-icon">
        <img src={Twitter} />
        <p id="p">Twitter</p>
    </div>

    <div className="social-icon">
        <img src={Instagram} />
        <p id="p">Instagram</p>
    </div>

    <div className="social-icon">
        <img src={Youtube} />
        <p id="p">youtube</p>
    </div>
</div>

    </>
    )
    }
    export default User