import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './CabinCrueInformationEntry.css'
import { getCookie } from '../../../utilities/helper';

const CabinCrueInformationEntry = () => {
    // const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const cabinCrewName = form.cabinCrewName.value;

        const info = {
            cabinCrewName: cabinCrewName,
        }
        console.log("Info : ", info);

        axios({
            url: `${process.env.REACT_APP_NAGAIR}/api/upload-cabin-crew-information`,
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${getCookie('token')}`, },
            data: info,
        })
            .then((response) => {
                console.log("cabin Crew : ", response);
                if (response.data.data) {
                    toast.success('Successfully added new Cabin Crue')
                    navigate('/cabinCrueList')
                }
                // const destination = location?.state?.from || "/";
                // navigate(location?.state?.from || "/", { replace: true });
            })
    }


    return (
        <div className=' col-lg-6 col-md-8 col-10  mx-auto'>
            <h2 className='fw-bold text-center mt-5 mb-3'>Add New Cabin Crue</h2>

            <form onSubmit={handleOnSubmit}>
                <div className="row">

                    <div className=' my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md  fw-bold ">Cabin Crew Name</span>
                        </label>
                        <input type="text" name='cabinCrewName' id='cabinCrewName' placeholder="Enter cabin crew name" className="input form-control" required />
                    </div>

                </div>

                <div className='d-flex justify-content-between my-5'>
                    <button type="reset" className="btn btn-warning" value="Reset">Reset</button>
                    <button type='submit' name='submit' className="btn btn-primary">Save</button>
                </div>

            </form>
        </div>
    );
};

export default CabinCrueInformationEntry;