import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <a href="/">Home</a> 
                    </div>
                    <div className="col-1">
                        <a href="/aboutus">About</a>
                    </div>
                    <div className="col-1">
                         <a href="/directory">Directory</a>
                    </div>
                    <div className="col-2">
                         <a href="/contactus">Contact</a>
                    </div>
                    <div className="col-4 col-sm-3 text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-2 sm-3 text-center">
                        <a role="button" className="btn btn-link" href="tel:+13858817615"><i className="fa fa-phone" /> 1-385-881-7611</a><br />
                        
                    </div>
                    <div className="col-sm-2 text-center">
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> glamm@directory.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;