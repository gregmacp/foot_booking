import {Component} from "react";

const BookingModal = ({handleSubmit, children}) => {
  return (
    <div className="modal fade" id="calModal" tabindex="-1" role="dialog" aria-labelledby="calModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Book a Consultation</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Please choose a date and time.</p>
        {children}
      <div className="ccc">
      <br></br>
        <input type="text" id="email" placeholder="Please enter your email address"/>
      <br></br>
        <input type="text" id="phone" placeholder="Please enter contact number"/>
      </div>
      </div>



      <div className="modal-footer">
        <button id="sub" type="button" onClick={handleSubmit} className="btn">Submit</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  );
};
export default BookingModal;
