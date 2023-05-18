import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './PilotInformation.css'
import { getCookie } from '../../../utilities/helper';


const PilotInformation = () => {
    // const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const pilotName = form.pilotName.value;

        const info = {
            pilotName: pilotName,
        }
        console.log("Info : ", info);

        axios({
            url: `${process.env.REACT_APP_NAGAIR}/api/upload-pilot-information`,
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`, },
            data: info,
        })
            .then((response) => {
                console.log("Signin Access: ", response);
                if (response.data.data) {
                    toast.success('Successfully added new Pilot')
                    navigate('/pilotList')
                }
                // const destination = location?.state?.from || "/";
                // navigate(location?.state?.from || "/", { replace: true });
            })
    }


    return (
        <div className=' col-lg-6 col-md-8 col-10  mx-auto'>
            <h2 className='fw-bold text-center mt-5 mb-3'>Add New Pilot</h2>

            <form onSubmit={handleOnSubmit}>
                <div className="row">

                    <div className=' my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md  fw-bold ">Pilot Name</span>
                        </label>
                        <input type="text" name='pilotName' id='pilotName' placeholder="Enter pilot name" className="input form-control" required />
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

export default PilotInformation;