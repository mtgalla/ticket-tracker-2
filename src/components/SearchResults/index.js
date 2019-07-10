import React from "react";
import "./style.css";
import { Col, Row, } from "../Grid";
import Moment from "react-moment";


const SearchResults = props => {
  console.log(props.tickets.length);
  return (props.tickets.length === 0) ? (
    <div className="card1">
                {/* <h3>No Results to Display</h3> */}
            </div>
) : (
   
      <div className="card-group">
        {props.tickets.map(ticket => {
          return (
            <Col size="sm-12 md-5 lg-4">
              <div className="card1">
                <li className="list list-group-item" id={ticket.id}>
                  <Row>
                    <Col size="6">
                      <h3 className="ticketDate"><Moment format ="MMM DD">{ticket.date}</Moment></h3>
                      <img id="ticketImage" src={ticket.image} alt={ticket.name} />      
                    </Col>  
                    <Col size="6">
                      <h4 className="ticketName">{ticket.name}</h4>
                      <p className="ticketVenue">{ticket.venue}</p>
                    </Col>
                  </Row>
                  <br></br>
                  <Row className="buttonDiv ">
                    <button className="savedTickets btn btn-primary" id={ticket.id} key={ticket._id} onClick={(event) => props.savedTickets(event)}>
                      Save ticket
                   </button>
                      <a href={ticket.link} target="_blank" rel="noopener noreferrer">
                   <button className="viewTicket btn btn-success">
                    View Ticket
                    </button>
                      </a>
                    </Row>
                </li>
                    <br/>
              </div>
            </Col>
          );
        })}
      </div> 
    )
  }

    

export default SearchResults;
