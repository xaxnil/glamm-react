import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    const RenderPartner = ({partner}) => {
        if (partner){
            return (
                <React.Fragment>
                    
                    <Media object src={partner.image} alt ={partner.name} width="100" />
                    <Media body className="ml-5 mb-4">
                        <Media heading> {partner.name}</Media>
                        {partner.description} 
                    </Media>

                </React.Fragment>
            );

        }
        return <div />
        
    };

    const partners = props.partners.map(partner => {
        return (
          //  <h5>{partner.name}</h5>
          <Media tag="li" id={partner.id} >
              <RenderPartner partner={partner} />
          </Media>
        );
    });

    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>What is Beauty Directory ?</h3>
                    <p> WHAT IS Glamm Directory ?
                    Glamm Directory is a members website for beauty appointments. An invaluable resource, to look for services and book quickly.</p>
                    <p>Glamm Directory features a database of over the best talented and professional on beauty.</p>
                </div>
                <div className="col-sm-6">
                    <Card border-success >
                        <CardHeader className="text-white bg-transparent border-info"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">April 10, 2020</dd>
                                <dt className="col-6">No. of Professionals in April</dt>
                                <dd className="col-6">50</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">3</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                
            </div>
            <div className="col">
                <Card className="bg-warning mt-3">
                    <CardBody>
                        <blockquote className="blockquote">
                            <p className="mb-0">Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.</p>
                            <footer className="blockquote-footer">Marilyn Monroe{' '}
                            </footer>
                        </blockquote>
                    </CardBody>
                </Card>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;