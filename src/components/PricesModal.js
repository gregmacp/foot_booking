import {Component} from "react";

const PricesModal = ({handleSubmit, children}) => {
  return (
    <div className="modal fade" id="priceModal" tabindex="-1" role="dialog" aria-labelledby="pModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">p</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <p>a table displaying prices for treatments</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  );
};
export default PricesModal;
