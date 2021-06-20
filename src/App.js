import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="content-block" id="header">
        <div id="overlay-1">
          <header id="site-header" class="clearfix">
            <div class="pull-left">
              <h1><a href="#">Developer</a></h1>
            </div>
            <div class="pull-right">
              <nav class="navbar site-nav" role="navigation">

                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <i class="fa fa-bars fa-2x"></i>
                  </button>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                    <li class="active"><a href="#header"><i class="fa fa-home"></i> <span>Home</span></a></li>
                    <li><a href="#portfolio"><i class="fa fa-bookmark"></i> Portfolio</a></li>
                    <li><a href="#services"><i class="fa fa-bullhorn"></i> Me</a></li>
                    <li><a href="#testimonials"><i class="fa fa-thumbs-up"></i> Tetimonials</a></li>
                    <li><a href="#contact"><i class="fa fa-phone-square"></i> Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>

          <div class="middle text-center clearfix">
            <div class="container">
              <h1 class="pro-name">Web  <span style={{ color: "#71b644" }} > Developer </span></h1>
              <p class="tagline">Bring your dreams to life</p>
              <div class="skills">

              </div>
              <a href="#contact" target="_blank" class="btn btn-lg btn-hire wow animated zoomIn">Hire Me</a>
            </div>
          </div>

          <div class="bottom text-center">
            <a href="#portfolio"><i class="fa fa-angle-down fa-3x pulse"></i></a>
          </div>
        </div>
      </div>

      <div class="content-block text-center" id="portfolio">
        <header class="block-heading cleafix">
          <h1>Latest Works</h1>
          <p>Take a look at some of my recent products</p>
        </header>

        <div class="isotope portfolio-items">
          <div class="element-item grid">
            <div class="effect-zoe">
              <img class="img-responsive" alt="Portfolio" src="img/work1.jpg" />
              <figcaption>
                <h2 class="hidden-xs">Creative <span>Joe</span></h2>
                <p class="icon-links">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </p>
              </figcaption>
            </div>
          </div>
          <div class="element-item grid">
            <div class="portfolio-item effect-zoe">
              <img class="img-responsive" alt="Portfolio" src="img/work2.jpg" />
              <figcaption>
                <h2 class="hidden-xs">Creative <span>Joe</span></h2>
                <p class="icon-links">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </p>
              </figcaption>
            </div>
          </div>
          <div class="element-item grid">
            <div class="portfolio-item effect-zoe">
              <img class="img-responsive" alt="Portfolio" src="img/work3.png" />
              <figcaption>
                <h2 class="hidden-xs">Creative <span>Joe</span></h2>
                <p class="icon-links">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </p>
              </figcaption>
            </div>
          </div>
          <div class="element-item grid">
            <div class="portfolio-item effect-zoe">
              <img class="img-responsive" alt="Portfolio" src="img/work7.jpg" />
              <figcaption>
                <h2 class="hidden-xs">Creative <span>Joe</span></h2>
                <p class="icon-links">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </p>
              </figcaption>
            </div>
          </div>
          <div class="element-item grid">
            <div class="portfolio-item effect-zoe">
              <img class="img-responsive" alt="Portfolio" src="img/work8.png" />
              <figcaption>
                <h2 class="hidden-xs">Creative <span>Joe</span></h2>
                <p class="icon-links">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </p>
              </figcaption>
            </div>
          </div>
          <div class="element-item grid">
            <div class="portfolio-item effect-zoe">
              <img class="img-responsive" alt="Portfolio" src="img/work4.jpg" />
              <figcaption>
                <h2 class="hidden-xs">Creative <span>Joe</span></h2>
                <p class="icon-links">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </p>
              </figcaption>
            </div>
          </div>
          <div class="element-item grid">
            <div class="portfolio-item effect-zoe">
              <img class="img-responsive" alt="Portfolio" src="img/work5.jpg" />
              <figcaption>
                <h2 class="hidden-xs">Creative <span>Joe</span></h2>
                <p class="icon-links">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </p>
              </figcaption>
            </div>
          </div>
          <div class="element-item grid">
            <div class="portfolio-item effect-zoe">
              <img class="img-responsive" alt="Portfolio" src="img/work6.jpg" />
              <figcaption>
                <h2 class="hidden-xs">Creative <span>Joe</span></h2>
                <p class="icon-links">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </p>
              </figcaption>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-lg btn-view">
          <i class="fa fa-eye"></i>
          <span>View All</span>
        </a>
      </div>
      <div id="services" class="content-block">
        <div id="numbers" class="parallax">
          <div class="overlay">
            <div class="container-fluid numbers-title">
              <div class="container">
                <div class="row block-heading">
                  <h1>Some Cool Facts About Me</h1>
                </div>
              </div>
            </div>
            <div class="container-fluid">

              <ul class="numbersList">
                <li class="col-md-2 col-sm-4 col-xs-6">
                  <h4> Conferences </h4>
                  <span id="number1" class="count1 count-timer">101</span>
                </li>
                <li class="col-md-2 col-sm-4 col-xs-6">
                  <h4> Lines of Code</h4>
                  <span id="number2" class="count2">92</span>
                </li>
                <li class="col-md-2 col-sm-4 col-xs-6">
                  <h4> Hours of Work</h4>
                  <span id="number3" class="count3">54</span>
                </li>
                <li class="col-md-2 col-sm-4 col-xs-6">
                  <h4> Repositories in Git</h4>
                  <span id="number4" class="count4">99</span>
                </li>
                <li class="col-md-2 col-sm-4 col-xs-6">
                  <h4> Mobile APP</h4>
                  <span id="number5" class="count5">124</span>
                </li>
                <li class="col-md-2 col-sm-4 col-xs-6">
                  <h4> Happy Client </h4>
                  <span id="number6" class="count6">45</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="content-block" id="testimonials">
        <header class="block-heading cleafix text-center">
          <h1>What Clients Say</h1>
          <p>Lorem Ipsum Text</p>
        </header>
        <div class="block-content text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3">
                <div class="owl-carousel">
                  <div class="owl-item">
                    <div class="testimonial">
                      <img alt="Client Photo" src="img/testimonial_31-190x190.jpg" />
                      <p>In at accumsan risus. Nam id volutpat ante. Etiam vel mi mattis, vulputate nunc nec, sodales nibh. Etiam nulla magna, gravida eget ultricies sit amet.</p>
                      <strong>Jhon Doe</strong><br />
                      <span>Head of Ideas, Technext</span>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="testimonial">
                      <img alt="Client Photo" src="img/testimonial_11-190x190.jpg" />
                      <p>In at accumsan risus. Nam id volutpat ante. Etiam vel mi mattis, vulputate nunc nec, sodales nibh. Etiam nulla magna, gravida eget ultricies sit amet.</p>
                      <strong>Jane Doe</strong><br />
                      <span>CEO, Apple Inc</span>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="testimonial">
                      <img alt="Client Photo" src="img/testimonial_22-190x190.jpg" />
                      <p>In at accumsan risus. Nam id volutpat ante. Etiam vel mi mattis, vulputate nunc nec, sodales nibh. Etiam nulla magna, gravida eget ultricies sit amet.</p>
                      <strong>Albert Doe</strong><br />
                      <span>Team Lead, Design Studio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-block" id="contact">
        <div class="overlay-3">
          <header class="block-heading cleafix text-center">
            <h1>Contact</h1>
            <p>Feel Free to Contact</p>
          </header>
          <div class="block-content text-center">
            <div class="container">
              <div class="row">
                <div class="col-md-6 wow animated fadeInLeft">
                  <form class="contact-form" action="form.php">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea rows="5" name="message" placeholder="Say Something..." required></textarea>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
                <div class="col-md-6 wow animated fadeInRight">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="contact-info">
                        <div class="clearfix">
                          <div class="rotated-icon">
                            <div class="sqaure-nebir"></div>
                            <i class="fa fa-map-marker"></i>
                          </div>
                          <p><strong> Address:</strong> 308 Negra Arroyo Lane Albuquerque, New Mexico, 87111.
                          </p>
                        </div>
                        <div class="clearfix">
                          <div class="rotated-icon">
                            <div class="sqaure-nebir"></div>
                            <i class="fa fa-mobile"></i>
                          </div>
                          <p><strong> Cell No:</strong> 1-800-123-456 </p>
                        </div>
                        <div class="clearfix">
                          <div class="rotated-icon">
                            <div class="sqaure-nebir"></div>
                            <i class="fa fa-envelope-o"></i>
                          </div>
                          <p>
                            <strong> Email:</strong> developer@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <ul class="social-box">
                      <li><a class="facebook-icon" href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a class="twitter-icon" href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a class="g-plus-icon" href="#"><i class="fa fa-google-plus"></i></a></li>
                      <li><a class="linkedin-icon" href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="copyright">&copy; 2014 Developer</div>
            </div>
            <div class="col-sm-6">
              <div class="designed-by">Designed By <a href="http://themewagon.com/" target="_blank">ThemeWagon</a></div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
