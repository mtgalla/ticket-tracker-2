import React from "react";
import "./style.css";
import { Col, Row, } from "../Grid";
import Moment from "react-moment";

const SavedTickets = props => {
  return (props.savedTickets.length === 0) ? (
    <div className="card1">
        {/* <div className="card-body player">
            <div className="article"> */}
                <h3>No Saved Tickets</h3>
            {/* </div>
        </div> */}
    </div>
) : (

          <div>
            <h3>Saved Tickets</h3>
            <div className="card-group">
            {/* <div className="card-body">
                <div className="article"> */}
                    {props.savedTickets.map(saveTicket => {
                        return (
                          <Col size="sm-12 md-5 lg-4">
                            <li className="list list-group-item">

                                <Row className="SearchResult row" id={saveTicket.title + "Card"} key={saveTicket._id}>
                                  <Col size="6">
                                    <h3 className="ticketDate"><Moment format ="MMM DD">{saveTicket.date}</Moment></h3>
                                    {/* <Col size="12" className="ticketImage"> */}
                                        <img id="ticketImage" src={saveTicket.image} alt={saveTicket.name} />
                                    </Col>
                                    {/* <Col size="1" className="emptyCol"/> */}
                                    {/* <Col size="9" className="ticketInfo"> */}

                                    <Col size="6">
                                          <h4 className="ticketName">{saveTicket.name}</h4>
                                   
                                      {/* <Row>
                                          <h4 className="ticketAttraction">{saveTicket.attraction}</h4>
                                      </Row> */}
                                          <p className="ticketVenue">{saveTicket.venue}</p>
                                      
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="saveTicket btn btn-primary" id={saveTicket._id} data-ticketid={saveTicket._id} onClick={(event) => props.deleteTicket(event)}>
                                        Delete Ticket
                                    </button>
                                    <a href={saveTicket.link} target="_blank" rel="noopener noreferrer">
                                        <button className="viewTicket btn btn-success">
                                            View Ticket
                                    </button>
                                    </a>
                                </Row>
                            </li>
                            <br />
                          </Col>
                        );
                    })}
                {/* </div>
            </div> */}
        </div>
        </div>
    )
}
export default SavedTickets;
