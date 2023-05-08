import React from 'react';



const ConfirmatinModal = ({ title, message, closeModal, modalData, successAction, successButtonName }) => {
    console.log("modalData", modalData);
    return (
        <div>

            <div data-bs-backdrop="static" className="modal fade" id="confirmationModal" tabIndex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="confirmationModalLabel">{title}</h1>
                        </div>
                        <div className="modal-body fw-bold">
                            {message}
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button onClick={() => successAction(modalData)} type="button" data-bs-dismiss="modal" className="btn btn-info">{successButtonName}</button>

                            <button onClick={closeModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default ConfirmatinModal;