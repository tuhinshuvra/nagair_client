import React from 'react';
import '../Passenger/FormDesign.css';

const AdminForm = () => {
    return (
        <div className='col-lg-8 col-md-10 mx-auto'>
            <h2 className="text-center text-2xl font-medium text-primary my-4">
                Admin Infomation Form
            </h2>

            <form action="">
                <div className="row my-5">

                    <div className='col-lg-4 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Name</span>
                        </label>
                        <input type="text" id='full-name' placeholder="Type here" className="input form-control" required />
                    </div>

                    <div className='col-lg-4 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Email Address</span>
                        </label>
                        <input type="email" id='email_address' placeholder="abcd@email.com" className="input form-control" required />
                    </div>

                    <div className='col-lg-4 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Mobile</span>
                        </label>
                        <input type="text" id='primary-mobile' placeholder="880 1123456789" className="input form-control" required />
                    </div>

                </div>
            </form>
        </div>

    );
};
export default AdminForm;