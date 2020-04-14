import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <CardTitle>{campsite.name}</CardTitle>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="80%" src={campsite.image} alt={campsite.name}  />
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-2 m-1"  >
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Hair</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
            <div className="row">
                <h3>Nails</h3>
                <hr />
                <div className="row">
                    {directory}
                </div>
            </div>
            
        </div>
    );
}

export default Directory;