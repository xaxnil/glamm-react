import React from 'react';

function Search(props) {
    return (
     


  

        <div class="row row-content align-items-center">

            <div class="col-4">
                <h2>Glamm DIRECTORY</h2>
                <p class="d-none d-sm-block">Glamm DIRECTORY offers a variety of specialists and you can book your
                appointment easily</p>
                <p>
                -Directory including details of every professional.</p>
                <p>It will be delivered a notfication to your inbox</p>
            </div>

            <div class="col-sm-8">
                <div class="card bg-warning">
                    <h5 class="bg-warning">Search the service to book an appointment</h5>
                    <div class="card-body">
                        <form class="form" id="reserveForm">
                            <div class="form-group row align-items-rigth">
                                <label class="col col-form-label ">Service</label>
                                <div class="col-sm-3">
                                    <select name="service" id="numCampers" class="form-control">
                                        <option selected>Select...</option>
                                        <option value="haircut">Haircut</option>
                                        <option value="nails">Nails</option>
                                        <option value="eyelash">Eyelash Technician</option>
                                        <option value="make-up">Make-up Artist</option>
                                        <option value="barber">Barber</option>
                                    </select>
                                </div>
                                <label class="col col-form-label align-items-center">Date</label>
                                <div class="col">
                                    <input type="date" name="Date" id="Date" class="form-control" /> 
                                </div>
                                <div class="col">
                                    <button type="submit" class="btn btn-primary"
                                        onclick="changeColor()">Reserve</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;