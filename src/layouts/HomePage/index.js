import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
// Actions
import { toggleSidenav, setSidenavOpen, toggleSidenavVariant } from '../../actions/layout.actions';
import styles from './layout-toolbar.style';
import './indexcss.css';
// new imports
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// End of new imports

class Home extends React.Component {
  constructor(props) {
    super(props);
    props.toggleSidenavVariant('temporary');
    props.setSidenavOpen(false);
  }
  state = {
    age: '',
    name: 'hai'
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
  
    const { children, classes } = this.props;
    return (

        <div className="page-wrapper">
          <div className="preloader"></div>

          <header className="main-header header-style-five">

            <div className="header-upper">
              <div className="inner-container">
                <div className="auto-container clearfix">

                  <div className="logo-outer">
                    <div className="logo homeLogonw"><a href=""><img src="../../assets/images/seriorLogo.png" alt="" title="" /></a></div>
                  </div>

                  <div className="info-outer clearfix">
                    <div className="info-box">
                      <div className="icon"><span className="flaticon-contract"></span></div>
                      <div className="text">
                        <strong>Certified Seniorplicity</strong>
                        <span className="info">ISO 9001 - 2025</span>
                      </div>
                    </div>

                    <div className="info-box">
                      <a href="" className="theme-btn btn-style-one"><span className="txt">Ask a Question</span></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="header-lower">
              <div className="auto-container">

                <div className="nav-outer clearfix">
                  <div className="mobile-nav-toggler"><span className="icon flaticon-menu-button"></span></div>
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="navbar-header">

                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon flaticon-menu"></span>
                      </button>
                    </div>

                    <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                      <ul className="navigation clearfix">
                        <li className="current dropdown"><a href="#">HOME</a>
                          {/* <ul>
                            <li><a href="">Home page 01</a></li>
                            <li><a href="">Home page 02</a></li>
                            <li><a href="">Home page 03</a></li>
                            <li><a href="">Home page 04</a></li>
                            <li><a href="">Home page 05</a></li>
                            <li className="dropdown"><a href="#">Header Styles</a>
                              <ul>
                                <li><a href="">Header Style One</a></li>
                                <li><a href="">Header Style Two</a></li>
                                <li><a href="">Header Style Three</a></li>
                                <li><a href="">Header Style Four</a></li>
                                <li><a href="">Header Style Five</a></li>
                              </ul>
                            </li>
                          </ul> */}
                        </li>
                        <li className="dropdown"><a href="#">COMMUNITY</a>
                          {/* <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Faq's</a></li>
                            <li><a href="">Testimonial</a></li>
                          </ul> */}
                        </li>
                        <li className="dropdown"><a href="#">SEARCH</a>
                          {/* <ul>
                            <li><a href="">Elderly Care Service</a></li>
                            <li><a href="">Personal Care</a></li>
                            <li><a href="">Respite Care</a></li>
                            <li><a href="">Skilled Nursing</a></li>
                            <li><a href="">24/7 Day Support</a></li>
                            <li><a href="">Hospital Discharge</a></li>
                            <li><a href="">Companion Care</a></li>
                            <li><a href="">Chronical Condition Care</a></li>
                            <li><a href="">After Surgery Care</a></li>
                            <li><a href="">End of Life Care</a></li>
                            <li><a href="">Special Need Care</a></li>
                          </ul> */}
                        </li>
                        <li className="dropdown"><a href="#">ABOUT</a>
                          {/* <ul>
                            <li><a href="">Company News</a></li>
                            <li><a href="">Our Gallery</a></li>
                            <li><a href="">How do I started</a></li>
                            <li><a href="">CareGiver Jobs</a></li>
                          </ul> */}
                        </li>
                        <li><a href="">JOB BOARD</a></li>
                        <li><a href="">TRAVEL</a></li>
                        <li><a href="">COUPANS</a></li>
                        <li><a href="">NEWS</a></li>
                        <li><a href="">BLOG</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <div className="mobile-menu">
              <div className="menu-backdrop"></div>
              <div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>
              <nav className="menu-box">
                <div className="nav-logo"><a href=""><img src="../../assets/images/seriorLogo.png" alt="" title="" /></a></div>
                <ul className="navigation clearfix">
                </ul>
              </nav>
            </div>
          </header>

          {/* custom add  */}
          <section>
            <div className="newHome">
              <div className="newHomeIner">
                <div className="newSeniorClickHere">
                  <div className="senoirSignup">
                    <h1>New to Seniorplicity? <a>CLICK HERE</a></h1>
                    <p>no sign-up required</p>
                  </div>
                  <div className="senoirCmnity">
                    <div><a>Senior Communities</a></div>
                    <div><a>Service Providers</a></div>
                  </div>

                  <div className="mileZip">
                    <div className="distance_mile">
                      <FormControl>
                        <InputLabel htmlFor="age-simple">State</InputLabel>
                        <Select
                          value={this.state.age}
                          onChange={this.handleChange}
                          inputProps={{
                            name: 'age',
                            id: 'age-simple'
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="of_lbl"><label>of</label></div>
                    <div className="distance_zip">
                      <TextField
                        label="Zip"
                        margin="normal"
                        className="distance_zipInr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="srchBy_lbl">Search By</label>
                    <div className="ctyZip_sec">
                      <div className="ctyZip_left">
                        <TextField
                          label="Zip"
                          className={classes.textField}
                          margin="normal"
                          className="mngLabel"
                        />
                      </div>
                      <div className="ctyZip_rght">
                        <TextField
                          label="City"
                          className={classes.textField}
                          margin="normal"
                          className="mngLabel"
                        />
                      </div>
                    </div>
                    <div className="cntryState_sec">
                      <div className="cntryState_lft">
                        <TextField
                          label="Country"
                          className={classes.textField}
                          margin="normal"
                          className="mngLabel"
                        />
                      </div>
                      <div className="cntryState_rght">
                        <TextField
                          label="State"
                          className={classes.textField}
                          margin="normal"
                          className="mngLabel"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="seniorSubmit">
                    <Button variant="raised" color="primary" className={classes.button}>
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/*End of custom add  */}
          </section>

          <section className="mission-section style-two">
            <div className="auto-container">
              <div className="row clearfix">

                <div className="image-column col-lg-3 col-md-4 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <img src="../../assets/images/home/resource/mission.jpg" alt="" />
                    </div>
                  </div>
                </div>

                <div className="content-column col-lg-9 col-md-8 col-sm-12">
                  <div className="inner-column">
                    <h2>Our Company Mission</h2>
                    <div className="bold-text">Everything we do at Home Instead Seniorplicity is driven by our universal mission: To enhance the lives of aging adults and their families.</div>
                    <div className="text">When our founders Paul and Lori Hogan began providing care for Paul’s grandmother to help her remain at home, they envisioned a future where all people could age with greater hope and success. We strive to make that vision a reality with every life we are privileged to touch.</div>
                    <h3>Changing the Face of Aging</h3>
                    <div className="row clearfix">
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <ul className="list-style-two">
                          <li>-  Reading, writing and light household tasks</li>
                          <li>-  Shopping for food or clothing</li>
                          <li>-  Travelling to and from appointments</li>
                          <li>-  Doing hobbies, arts and crafts together</li>
                        </ul>
                      </div>
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <ul className="list-style-two">
                          <li>-  Purchasing magazines, newspapers and books</li>
                          <li>-  Social visits to neighbours and clubs</li>
                          <li>-  Preparing simple meals</li>
                          <li>-  Video calls to family and friends</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          <section className="fluid-section-one uppercolumnSpace">
            <div className="outer-container clearfix">
              <div className="content-column">
                <div className="image-layer patternCstmBg"></div>
                <div className="content-box">
                  <h2>Here For You Always</h2>
                  <div className="text">We know that it can be overwhelming to welcome a stranger into the home. Because of that, we train our professionals not just on high-quality care but on interpersonal relationships as well.</div>
                  <ul className="list-style-one">
                    <li>Advanced age</li>
                    <li>Dementia or Alzheimer's disease</li>
                    <li>Degenerative disorders, such as MS or ALS</li>
                    <li>Post-surgery, including cosmetic, joint replacement, or heart surgery</li>
                    <li>Chronic conditions, such as diabetes, COPD, or cancer</li>
                    <li>Backup care for children</li>
                  </ul>
                  <div className="bold-text">Let us help you care for your loved one living with dementia!</div>
                </div>
              </div>

              <div className="image-column videoImgCstm">
                <div className="inner-column">
                  <div className="image">
                    <img src="images/resource/video-img.jpg" alt="" />
                  </div>
                  <a href="" className="overlay-link lightbox-image">
                    <div className="icon-box">
                      <span className="icon flaticon-play-button"></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="meeting-section">
            <div className="auto-container">
              <h2>How To Get Started With Seniorplicity</h2>
              <div className="bold-text">Learn How To Get Started with Home Care</div>
              <div className="text">The best way to provide the highest quality level of care requires an initial meeting where family and/or client meet with a Visiting Seniorplicity coordinator. This meeting includes a detailed review of care needed, schedule request (if known), specific requests of family or client, and any other concerns. This is an excellent opportunity to ask questions of Visiting Seniorplicity and it is an excellent opportunity for us to get to know you as well. If you are feeling overwhelmed, we can make recommendations as we have much experience in understanding what works in certain situations.</div>
              <div className="row clearfix">

                <div className="content-column col-lg-8 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>The following topics are commonly discussed during initial meetings.</h3>
                    <ul className="list-style-four">
                      <li>Specific physical needs of the care recipient with regards to bathing and grooming, dressing, meals and diet, mobility, and incontinence.</li>
                      <li>Reviewing schedules involving sleep, eating and medicine. <br /> Specific emotional needs such as social interaction, activities, conversation, appointments, and companionship.</li>
                      <li>Specific assistance with homemaking such as preparation of meals, groceries, linens, laundry, and light housekeeping.</li>
                      <li>Logistics of schedules, access to the home, documentation, and the details of how to work with scheduling changes, the office or the Seniorplicity.</li>
                    </ul>
                  </div>
                </div>

                <div className="image-column col-lg-4 col-md-12 col-sm-12">
                  <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="image">
                      <img src="../../assets/images/home/resource/meeting.jpg" alt="" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="call-to-action-section shareYpurBg">
            <div className="auto-container">
              <h2>Share Your Cares. Inspire Others.</h2>
              <div className="text">Join our movement to make the world a better place for seniors.</div>
              <a href="" className="theme-btn btn-style-two"><span className="txt">contact us</span></a>
            </div>
          </section>

          <section className="services-section-three">
            <div className="auto-container">

              <div className="title-box">
                <h2>What is Home Care... In Home Care Services For Everyone. </h2>
                <div className="text">Discover how professional Seniorplicity approach caring for your loved one in order to engage</div>
              </div>

              <div className="row clearfix">
                <div className="service-block-three col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="overlay-content">
                          <div className="content">
                            <div className="icon-box">
                              <span className="icon flaticon-hair"></span>
                            </div>
                            <h3><a href="">Personal Grooming Like Bathing or Getting Dressed</a></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-block-three col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="overlay-content">
                          <div className="content">
                            <div className="icon-box">
                              <span className="icon flaticon-elder"></span>
                            </div>
                            <h3><a href="">Helping a Person with Dementia by Grounding and Orienting Them</a></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-block-three col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="overlay-content">
                          <div className="content">
                            <div className="icon-box">
                              <span className="icon flaticon-medicine"></span>
                            </div>
                            <h3><a href="">Take Care of Medication Reminders</a></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-block-three col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="overlay-content">
                          <div className="content">
                            <div className="icon-box">
                              <span className="icon flaticon-walk"></span>
                            </div>
                            <h3><a href="">Moving Around. Getting in and out of the Bed or Shower</a></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-block-three col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="overlay-content">
                          <div className="content">
                            <div className="icon-box">
                              <span className="icon flaticon-groceries"></span>
                            </div>
                            <h3><a href="">Errands Like Grocery Shopping and Picking up Prescriptions</a></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-block-three col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="overlay-content">
                          <div className="content">
                            <div className="icon-box">
                              <span className="icon flaticon-deal"></span>
                            </div>
                            <h3><a href="">Keeping Them Safe and Comfortable</a></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="news-section style-two">
            <div className="auto-container">
              <div className="sec-title style-two">
                <div className="clearfix">
                  <div className="pull-left">
                    <h2>Latest Articles & Blogs</h2>
                    <div className="text">Seniorplicity Community Reviews</div>
                  </div>
                  <div className="pull-right">
                    <a href="" className="view-blogs">View all blogs</a>
                  </div>
                </div>
              </div>

              <div className="row clearfix">
                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href=""><img src="../../assets/images/home/resource/news-1.jpg" alt="" /></a>
                    </div>
                    <div className="lower-content">
                      <div className="post-date">July 12, 2018</div>
                      <h3><a href="">Top 5 Tips for Seniorplicity During the Holidays </a></h3>
                      <div className="text">Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis.</div>
                      <a href="" className="read-more">Continue Reading ...</a>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href=""><img src="../../assets/images/home/resource/news-2.jpg" alt="" /></a>
                    </div>
                    <div className="lower-content">
                      <div className="post-date">July 12, 2018</div>
                      <h3><a href="">Caregiving Checklist for a New <br /> Year</a></h3>
                      <div className="text">Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis.</div>
                      <a href="" className="read-more">Continue Reading ...</a>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href=""><img src="../../assets/images/home/resource/news-3.jpg" alt="" /></a>
                    </div>
                    <div className="lower-content">
                      <div className="post-date">July 12, 2018</div>
                      <h3><a href="">Our Experts Answer Your Questions About Dementia Care</a></h3>
                      <div className="text">Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis.</div>
                      <a href="" className="read-more">Continue Reading ...</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="call-to-action-section-two style-two">
            <div className="auto-container">
              <div className="inner-container">
                <h2>Get Started Today</h2>
                <div className="text">Contact a franchised Visiting Seniorplicity office in your area for information on elderly home care services.</div>
                <a href="" className="find">Find our office near you.</a>
              </div>
            </div>
          </section>

          <section className="map-section">
            <div className="outer-container">
              <div className="map-outer">
                <div className="map-canvas"
                  data-zoom="12"
                  data-lat="-37.817085"
                  data-lng="144.955631"
                  data-type="roadmap"
                  data-hue="#ffc400"
                  data-title=""
                  data-icon-path="images/icons/map-marker.png"
                  data-content="256, Victory Street,, New York <br/> City, AZ 550067 <br/> (1800) 456 7890 <br/> Mon-Sat: 7.00an - 9.00pm <br/> Sunday closed">
                </div>
              </div>
            </div>
          </section>

          <footer className="main-footer">
            <div className="auto-container">
              <div className="widgets-section">
                <div className="row clearfix">
                  <div className="big-column col-lg-6 col-md-12 col-sm-12">
                    <div className="row clearfix">
                      <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                        <div className="footer-widget logo-widget">
                          <div className="logo">
                            <a href=""><img src="../../assets/images/seriorLogo.png" alt="" className="footerLogo" /></a>
                          </div>
                          <div className="text">Seniorplicity is build Elderly People Care. It has good features and you will love.</div>
                          <ul className="social-icons">
                            <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                            <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                            <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                        <div className="footer-widget links-widget">
                          <h2>Quick links</h2>
                          <div className="widget-content">
                            <ul className="list">
                              <li><a href="#">About Hotel</a></li>
                              <li><a href="#">Types of Care</a></li>
                              <li><a href="#">Testimonials</a></li>
                              <li><a href="#">News & Articles</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="big-column col-lg-6 col-md-12 col-sm-12">
                    <div className="row clearfix">
                      <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                        <div className="footer-widget contact-widget">
                          <h2>Contact Info</h2>
                          <div className="widget-content">
                            <a href="tel:1800-574-9687" className="contact-number">(1800) 574 9687</a>
                            <ul>
                              <li>256, Victory Street, New York <br /> City, AZ 550067</li>
                              <li>Email :<a href="mailto:info@sceniorplicity.com"> info@sceniorplicity.com</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                        <div className="footer-widget newsletter-widget">
                          <h2>Newsletter</h2>
                          <div className="text">Get Special offers & Discounts</div>

                          <div className="newsletter-form">
                            <form method="post" action="">
                              <div className="form-group">
                                <input type="email" name="email" value="" placeholder="Enter your email address" required />
                                <button type="submit" className="theme-btn btn-style-one"><span className="txt">Subscribe</span></button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-bottom clearfix">
                <div className="pull-left">
                  <div className="copyright">&copy; Copyright Seniorplicity 2019. All right reserved.</div>
                </div>

                {/* <div className="pull-right">
                  <a href="#" className="purchase">Purchase Now</a>
                </div> */}

              </div>

            </div>
          </footer>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout: {
      sidenavOpen: state.layout.sidenavOpen
    }
  };
}
Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}).isRequired,
  setSidenavOpen: PropTypes.func.isRequired,
  toggleSidenavVariant: PropTypes.func.isRequired
};
export default compose(
  withWidth(),
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    toggleSidenav,
    setSidenavOpen,
    toggleSidenavVariant
  })
)(Home);




