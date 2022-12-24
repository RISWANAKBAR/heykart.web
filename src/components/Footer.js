import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div>
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>heykart@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <h1 id='hey'> hEYkaRt</h1>
                                        {/* <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo"/></a> */}
                                    </div>
                                    <div class="footer-text">
                                        {/* <p>Shop from us and make your own style</p> */}
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>

                                        <li><a href="#">contact</a></li>
                                        <li><a href="#">products</a></li>
                                        <li><a href="#">cart</a></li>
                                        <li><a href="#">offers</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright-text">
                        <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/"></a></p>
                    </div>
                </div>

            </footer>
        </div>
    )
}
