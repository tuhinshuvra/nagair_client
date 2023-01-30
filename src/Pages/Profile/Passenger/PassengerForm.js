import React from 'react';
import './FormDesign.css';


const PassengerForm = () => {
    return (
        <div className='col-lg-6 mx-auto'>
            <h2 className="text-center text-2xl font-medium text-primary my-4">
                Passenger Infomation Form
            </h2>

            <form action="">

                <div className="row my-4">

                    <div className='col-lg-6 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Name</span>
                        </label>
                        <input type="text" id='full-name' placeholder="Type here" className="input form-control" required />
                    </div>

                    <div className='col-lg-6 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Email Address</span>
                        </label>
                        <input type="email" id='email_address' placeholder="abcd@email.com" className="input form-control" required />
                    </div>
                </div>

                <div className="row my-4">
                    <div className='col-lg-6 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Primary Mobile</span>
                        </label>
                        <input type="text" id='primary-mobile' placeholder="880 1123456789" className="input form-control  " />
                    </div>

                    <div className='col-lg-6 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Secondary Mobile</span>
                        </label>
                        <input type="text" id='secondary-mobile' placeholder="880 1123456789" className="input form-control  " />
                    </div>
                </div>

                {/* <div className="row my-4">
                    <div className='col-lg-6 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Nationality</span>
                            <span className=" ms-5">Bangladeshi</span>
                            <input className="form-check-input mx-3" type="checkbox" value="" id="flexCheckChecked" />
                        </label>

                        <input type="text" id='nationality' placeholder="Type here" className="input form-control  " />
                    </div>
                    <div className='col-lg-6 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">National ID</span>
                        </label>
                        <input type="text" id='national-id' placeholder="Type here" className="input form-control  " />
                    </div>
                </div> */}




                <div className="row my-4">

                    <div className='col-lg-6 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Blood Group</span>
                        </label>
                        <select className="form-select select-bordered  ">
                            <option disabled selected>Select</option>
                            <option value={0}>A(+ve)</option>
                            <option value={1}>A(-ve)</option>
                            <option value={2}>B(+ve)</option>
                            <option value={3}>B(-ve)</option>
                            <option value={4}>O(+ve)</option>
                            <option value={5}>O(-ve)</option>
                            <option value={6}>AB(+ve)</option>
                            <option value={7}>AB(-ve)</option>
                        </select>
                    </div>

                    <div className='col-lg-6 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Weight(kg)</span>
                        </label>
                        <input type="text" id='weight' placeholder="Type here" className="input form-control  " />
                    </div>
                </div>

                <div className='d-flex justify-content-between my-5'>
                    <button className="btn btn-warning">Cancel</button>
                    <button type='submit' name='submit' className="btn btn-primary">Save</button>
                </div>

            </form>
        </div>

    );
};
export default PassengerForm;