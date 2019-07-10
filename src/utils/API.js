import axios from "axios";

  //ticketmaster search variables
   const tUrl = "https://app.ticketmaster.com/discovery/v2/events.json?";
   const keyword = "&keyword="
   const tApiKey = "&apikey=JXnaWBjyRcEQwWBS2tO1DRxzbaP4CKl1";
   const location = "&radius=25&unit=miles&city=boston";
   const sort = "&sort=date,asc"
   const classification = "&classificationName=";
   const resultSize = "&size=100";
   const page = "&page=";
  const randomPage = page + (Math.floor(Math.random() * 20)).toString();
  console.log(randomPage);

export default {
  // Search ticketmaster
  searchTickets: function(search) {
    return axios.get(tUrl + keyword + search + tApiKey + resultSize + sort)
  },
  //search StubHub
  searchStubhub: function(search) {
    return axios.get( "https://api.stubhub.com/sellers/search/events/v3",
    {params: {q:search},
  headers: { 'Authorization':'Bearer HXYFUF7ufrQ9EuxZ1lKZDnKehYpI' }
})
  },
// Search category
  searchCategory: function(category) {
    return axios.get(tUrl + tApiKey + classification + category + randomPage + sort)
  },
  // Gets all tickets
  getTickets: function() {
    return axios.get("/api/tickets/");
  },
  // Gets the ticket with the given id
  getTicket: function(id) {
    return axios.get("/api/tickets/" + id);
  },
  // Deletes the ticket with the given id
  deleteTicket: function(id) {
    return axios.delete("/api/tickets/" + id);
  },
  // Saves a ticket to the database
  saveTicket: function(savedTickets) {
    return axios.post("/api/tickets", savedTickets);
  },
  getUser: function() {
    return axios.get("/user/");
  },
  saveUserTicket: function (userId, {users: userTickets}) {
    return axios.put("/api/user/"+ userId, {users :userTickets})
  },
  getUserId: function(id) {
    return axios.get("/api/user/" + id)
  }
};
