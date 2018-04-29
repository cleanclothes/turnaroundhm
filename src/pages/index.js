import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'
import turnaround from '../assets/images/turnaround.svg'
import ahead from '../assets/images/ahead.svg'
import turnright from '../assets/images/turnright.svg'

import { Accordion, AccordionItem } from '../components/accordion';



class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }



  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>HEY, H&amp;M, YOU SEEM TO BE QUITE LOST</h2>
                </header>
                <p>Did you forget your destination altogether? <br /></p>
                <p><b>You committed to reaching Living Wage for workers who make your clothes by 2018.</b></p>
                <p>Remember that? You even drew up a roadmap, and you got loud cheers from all over the world.<br/>
It looks like you threw the roadmap out the window and you now need some help to get to your original destination before 2018 is over. </p>
<p>Here’s a short version of what you need to do:</p>
                <ul className="actions">
                  <li><div ><img src={turnaround} alt="Turn around"/><br/><b>Turn around</b><br/>to stay true <br/>to your commitment</div></li>
                  <li><div ><img src={ahead} alt="Go straight" /><br /><b>Go straight</b><br />to your suppliers</div></li>
                  <li><div ><img src={turnright} alt="Turn right" /><br /><b>Take the right turn</b><br />to make sure workers <br/>get paid a living wage</div></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="turnhmaround" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>TURN H&amp;M AROUND</h2>
                </header>
                <h3>Will you help H&amp;M find a way to start paying a living wage?</h3>
                <p>In 2013 H&amp;M committed to ensuring living wages by 2018, which brought the brand a lot of positive media coverage. Now H&amp;M is trying to cover up that commitment, pretending they have been saying something else all along.</p>
                <p>Meanwhile hundreds of thousands of workers making H&amp;M clothing still cannot lift themselves out of poverty with the hard work hidden behind the glossy storefronts. </p>
                <p>H&amp;M has the financial means and the power to stay true to their original commitment. Not only that – they could even go beyond that and cover their whole supply chain. </p>
                <p>You have a voice in determining H&amp;M’s course of action! </p>
                <h3>What you can do to turn H&amp;M around:</h3>
                <p>Sign and share this petition:</p>
                <p>Tweet your own message to H&amp;M (@HM), using #TurnAroundHM and #LivingWageNow</p>
                <p>You could also tweet one of these messages:</p>
                <blockquote>I want workers behind @HM clothes to be paid a living wage – as #HM promised they would be by 2018! #TurnAroundHM #LivingWageNow</blockquote>
                <blockquote>I want #LivingWageNow for workers in @HM supply chain! #TurnAroundHM - Stop turning your back on the living wage commitment!</blockquote>
                <blockquote>Hey, @HM, you committed that workers who make your clothes will be paid a #LivingWage by 2018. Make it happen! #TurnAroundHM #LivingWageNow</blockquote>
                <p>Make sure to check back and follow our social media for more ways to support this effort. </p>
                <ul className="features">
                  <li><a href="https://www.facebook.com/cleanclothescampaign/" title="Facebook" target="_blank" className="icon  fa-facebook fa-2x alt">
                  </a><a href="https://www.facebook.com/cleanclothescampaign/" title="Facebook" target="_blank" ><h5>cleanclothescampaign</h5></a>
                    
                  </li>
                  <li><a href="https://twitter.com/cleanclothes" title="Twitter" target="_blank" className="icon fa-twitter fa-2x alt"></a>
                  <a href="https://twitter.com/cleanclothes" title="Twitter" target="_blank"><h5>@cleanclothes</h5></a>

                  </li>
                  </ul>
              </div>
            </div>
          </section>

          <section id="news" className="main ">
            <header className="major">
              <h2>News</h2>
            </header>
            <div className="content">
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title')
              const url = get(node, 'frontmatter.path' )
              return (
                <div key={node.frontmatter.title}>
                  <small>{node.frontmatter.date}</small>
                  <h4 className="content">
                    <Link to={url}>
                      {title}
                    </Link>
                  </h4>


                  <p  dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  <ul className="actions">
                    <li><Link to={url} className="button">Learn More</Link></li>
                  </ul>
                </div>
              )
            })}
            </div>

          </section>

          <section id="livingwage" className="main special">
            <header className="major">
              <h2>DESTINATION: LIVING WAGE</h2>

            </header>
            <p className="content">Where we want H&amp;M to get their workers is to a wage that is earned in a standard working week of no more than 48 hours,
                 and that allows a garment worker to be able to buy food for herself and her family, pay the rent, pay for healthcare, clothing, transportation and education and have a small amount of savings for when something unexpected happens.</p>


            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-cutlery"></span>
                <strong>Food</strong> 
              </li>
              <li className="style1">
                <span className="icon fa-home"></span>
                <strong>Rent</strong>
              </li>
              <li className="style3">
                <span className="icon fa-medkit"></span>
                <strong>Healthcare</strong>
              </li>
              <li className="style4">
                <span className="icon fa-shopping-basket"></span>
                <strong>Clothing</strong>
              </li>
              <li className="style5">
                <span className="icon fa-bus"></span>
                <strong>Transportation</strong>
              </li>
              <li className="style5">
                <span className="icon fa-graduation-cap"></span>
                <strong>Education</strong>
              </li>
              <li className="style5">
                <span className="icon fa-money"></span>
                <strong>Savings</strong>
              </li>
            </ul>
            <header className="major">
              <h2>ORIGIN: POVERTY WAGE</h2>
            </header>
            <p className="content">One of the people whose hard work goes into what we find in H&amp;M’s stores recently told us: "I would give everything to be able to buy a toy car for my four children. I dream about it day and night, but I doubt I would ever be able to make this come true."
            <br/>
              <br />The origin of the journey we want H&amp;M to undertake is the current situation, in which hundreds of thousands of workers have to constantly worry about how to feed themselves and their families, how to make sure they do not find themselves without a roof above their heads, what to do about the unavoidable fees if they want to send their children to school, what would happen if there is a medical emergency &hellip; <br />
              What it is like to live on poverty wages is evident from <a href="http://workerdiaries.org//wp-content/uploads/2017/04/Garment_Worker_Diaries_Cambodia_Interim_Report.pdf" target="_blank">Sokhaeng’s story</a> reported in Worker diaries:
"Despite earning the minimum wage, Sokhaeng’s pay often did not cover all of her expenses and obligations. Consider the demands on her July paycheck. In the week she received her payment, she sent 560,000 riels to her mother using the mobile money service Wing; gave her brother an 80,000 riels loan repayment; paid her and Pisen’s rent and utility bills for 163,000 riels; and bought 137,900 riels of basic items for the home. Within a matter of days, Sokhaeng had spent nearly all of her salary, which left her with a fraction of the cash that she needed to meet the rest of the month’s expenses."  </p>

          </section>

          <section id="faq" className="main ">
            <header className="major">
              <h2>FREQUENTLY ASKED QUESTIONS</h2>
            </header>
            <Accordion>
              <AccordionItem title={`What is this website all about?`} >
                    <div>
                  <p>The website is the online home of the broader campaign aimed at making H&amp;M fulfill the commitment made in November 2013: to ensure that workers in their supply chain are paid a living wage by 2018.</p>
                <p>The campaign was launched in May 2018. It is coordinated (and the website maintained) by Clean Clothes Campaign, the world’s largest network of labour unions and non-governmental organizations focused on improving working conditions and empowering workers in the garment and sportswear industries. <a href="https://www.laborrights.org" target="_blank">International Labor Rights Forum</a> and <a href="https://wemove.eu" target="_blank">wemove.eu</a> are also actively involved in the campaign.</p>
                    </div>
                  </AccordionItem>
              <AccordionItem title={`Why is H&M the target of this campaign?`}>
                <div><p>H&amp;M is one of the first and largest fast fashion brands with a globalized supply chain. How the brand treats this supply chain directly affects so many workers they would outnumber the population of many countries. Add to them all the family members, and we are talking about millions of people.</p>
                  <p>Consider this: referring to only 60% of their product volume, H&amp;M cited in 2013 that their living wage commitment would reach 850,000 workers. Yes, you saw that right: making only sixty per cent of the H&amp;M’s product volume involves eight hundred and fifty <i>thousand</i> workers!</p>
                  <p>That kind of scope and the impact the brand’s practices have on all those human lives comes with a responsibility, and H&amp;M seems in need of a reminder that this is the case. In addition, H&amp;M’s 2013 public commitment to ensure living wages to 850,000 workers, and the associated roadmap, received a lot of positive media coverage and cheers from many consumers who care about sustainable fashion.</p>
                  <p>The fact that H&amp;M benefitted from the mere proclamation of the commitment but has so far failed to ensure that living wages would actually be paid to the workers is what drives this campaign, as does the fact that H&amp;M certainly has the financial means and other resources to live up to that commitment. All H&amp;M is lacking is political will to do it.</p></div>
                  </AccordionItem>
              <AccordionItem title={`Why do we want H&M to turn around?`}>
                <div><p>We are calling on H&amp;M to turn around so as to stop turning its back on the 2013 living wage commitment. The reason we are saying that H&amp;M is heading the wrong way is that we are well into 2018, yet the hundreds of thousands of workers who had pinned their hopes on that commitment are still not receiving a living wage. This is a hard fact, however many times H&amp;M claims that it is well on its way to reach the living wage goals (see next FAQ).</p> </div>
              </AccordionItem>
              <AccordionItem title={`H&M is saying its goal has stayed the same, and they are right on track. Is that true?`}>
            <div><p>No, that is not true, and H&amp;M is not on track to fulfil its original commitment at the time this campaign is being launched. Instead of admitting that this is the case, corporate public relations experts are trying to divert attention from how the commitment has been watered down through the years.</p>
              <p>In fact, original documents published in 2013 have disappeared from H&amp;M’s corporate website! Why take them down if not because there is something in them that H&amp;M would like to hide? Thankfully, the groundbreaking commitment H&amp;M made in 2013 sparked so much interest that the original wording can still be found, despite H&amp;M’s concerted efforts to cover it up.</p>
                  <p>This is what H&amp;M committed to in 2013: "In a first step, our goal is that H&amp;M's strategic suppliers should have pay systems in place to <em><strong>pay a fair living wage by 2018</strong></em>. By then, this will affect 850,000 textile workers." (emphasis added). This is how the commitment sounds in the brand’s latest sustainability report: "Supplier factories representing 50% of product volume should be using the Fair Wage Method by 2018 and 90% of business partners should regard H&amp;M as a fair business partner by 2018."</p>
              <p>The same? Not even close!</p>
              <p>Current wording would not lead to the kind of media coverage that H&amp;M received in 2013. &ldquo;H&amp;M promises to pay textile workers 'living wage' by 2018,&rdquo; <a href="http://articles.latimes.com/2013/nov/25/home/la-fi-mo-hm-textile-workers-living-wage-20131125" target="_blank">read the headline in Los Angeles Times</a>. &ldquo;A Swedish retailer promises a living wage,&rdquo; was the title of the <a href="https://www.nytimes.com/2013/12/02/opinion/a-swedish-retailer-promises-a-living-wage.html" target="_blank">editorial in New York Times</a>. &ldquo;H&amp;M has pledged to pay a living wage to 850,000 textile workers after expressing frustration over a lack of action by governments&hellip;,&rdquo; <a href="https://www.theguardian.com/business/2013/nov/25/h-m-living-wage-textile-workers-bangladesh-cambodia" target="_blank">wrote the Guardian</a>.</p>
                  <p>At the time, H&amp;M did not rush out to correct these reports and say – as it does now – that the goal is actually to have &ldquo;supplier factories representing 50% of product volume &hellip; using the Fair Wage Method by 2018&rdquo;. Instead, H&amp;M cashed in on all the positive outcomes of the original commitment, and then turned its back on it and proceeded to methodically cover it up.</p> </div>
              </AccordionItem>
              <AccordionItem title={`What does H&M have to do to get on the right track?`}>
                <div><p>Clearly, there are not many days left for H&amp;M to stay true to its original commitment: that workers would be paid living wages by 2018. This is not the first time that we are reminding H&amp;M of that fact.</p>
                  <p>As we pointed out in the open letter to H&amp;M’s Board of Directors, CEO and Head of Sustainability in March (following up on previous letters and statements), H&amp;M can still take the right steps to live up to its commitment, namely:</p>
                  <ol>
                    <li>Publish a detailed road map on wage increases, with time-bound, measurable wage level increase targets and time-bound actions in the field of purchasing practices.</li>
                    <li>Invest in long term, sustainable relationships with factories.</li>
                    <li>Invest in measurable and transparent changes in real wages of workers in the H&amp;M supply chain.</li>
                  </ol>
                  <p>We have also been repeatedly calling for transparency, as this is another area where H&amp;M strayed off course it chartered in 2013 when it promised ###ORIGINAL QUOTE TO BE ADDED HERE###. Instead of getting ever more nontransparent, as it is currently the case, H&amp;M needs to publish the following:</p>
                  <ul>
                    <li>Information on the living wage pilot projects carried out as part of H&amp;M’s commitment, including concrete factory information, wage level and development through time at each factory, and lessons learned.</li>
                    <li>Definition of a &ldquo;fair living wage&rdquo; as well as information on the proposed methodology to calculate a &ldquo;fair wage&rdquo; and to make sure that it is actually paid.</li>
                    <li>Based on the above definition, minimum acceptable wage levels – in concrete terms – for all H&amp;M’s production countries.</li>
                    <li>Detailed information about efforts made within existing living wage initiatives such as ACT.</li>
                    <li>A cost breakdown of the pricing structure, specifying how labour costs are calculated at present and how that is different from before H&amp;M’s living wage commitment was made,including information on how much more H&amp;M is paying to suppliers to ensure that FOB-prices are high enough to pay all workers the &ldquo;fair wage&rdquo;. (Note: FOB stands for &ldquo;free on board&rdquo;, which is a price that includes all costs up to placing the garments aboard a ship an overseas vessel.)</li>
                  </ul>
 </div>
              </AccordionItem>
              <AccordionItem title={`What is a living wage?`}>
                <div><p>The term living wage first appeared in 1919 when the International Labor Organization (ILO) was established, and the ILO has since defined a living wage as a basic human right.</p>
                  <p>Clean Clothes Campaign defines a living wage as a wage that should be earned in a standard working week (no more than 48 hours) and allow the garment worker to be able to buy food for herself and her family, pay the rent, pay for healthcare, clothing, transportation and education and have a small amount of savings for when something unexpected happens.</p></div>
              </AccordionItem>
              <AccordionItem title={`Is a minimum wage the same as a living wage?`}>
                <div><p>No, a minimum wage, where it exists, is not the same as a living wage. What the minimum wage amounts to differs per country, but in almost all production countries it is far from sufficient to provide for workers’ and their families’ basic needs. Moreover, workers typically work more than 48 hours per week to earn those wages.</p>
                  <p>For instance, the Stitched up <a href="https://cleanclothes.org/livingwage/europe" target="_blank">report published by Clean Clothes Campaign in 2017</a> showed that there was a large gap between the legal minimum wages in Eastern/South-Eastern Europe and Turkey, and what a worker would actually need to provide for themselves and their family. </p></div>
              </AccordionItem>
              <AccordionItem title={`How can I / my organization join the campaign?`}>
              <div><p>Please take a look at the &ldquo;Turn H&amp;M Around&rdquo; section above for concrete suggestions of what you can do. Signing and spreading the petition and using your social media channels to demand that H&amp;M ensures living wages in its supply chain would be a great start. We will be posting more suggestions as the campaign unfolds, so make sure to check back, and sign up for our updates. </p>
                <p>If your organization would like to become a part of the campaign coalition, please get in touch with <a href="mailto:join@turnaroundhm.org">join@turnaroundhm.org</a></p></div>
              </AccordionItem>
            </Accordion>

          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;