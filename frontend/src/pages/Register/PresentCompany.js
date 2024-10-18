import React, { useRef} from 'react';

const PresentCompany = ({
  companyName,
  companyPosition,
  companyCountry,
  joiningMonth,
  joiningYear,
  leavingMonth,
  leavingYear,
  onChange,
}) => {
  const focusField = useRef(null);
  return (
    <>
    <div className="mb-4"> </div>
    <div className="d-flex align-items-center mb-4">
        <div className="text-left me-1 text-dark">
            <h5>Present Company Details</h5>
        </div>
    </div>
        <div className="mb-3">
          <label htmlFor="companyNameInput" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="companyNameInput"
            placeholder="Enter Present Company"
            value={companyName}
            onChange={(event) =>
              onChange('companyName', event.target.value)
            }
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="companyPositionInput" className="form-label">
            Position
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="companyPositionInput"
            placeholder="Enter Present Position"
            value={companyPosition}
            onChange={(event) =>
              onChange('companyPosition', event.target.value)
            }
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="companyCountryInput" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="companyCountryInput"
            placeholder="Enter the Country"
            value={companyCountry}
            onChange={(event) =>
              onChange('companyCountry', event.target.value)
            }
            
          />
        </div>
      <div className='row'>
        <div className="col-md-6 mb-3">
          <label htmlFor="dob" className="form-label">
            Started At
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="joiningMonthInput"
              placeholder="MM"
              value={joiningMonth}
              onChange={(event) =>
                onChange('joiningMonth', event.target.value)
              }
              
            />
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="joiningYearInput"
              placeholder="YYYY"
              value={joiningYear}
              onChange={(event) =>
                onChange('joiningYear', event.target.value)
              }
              
            />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="dob" className="form-label">
            Ended At
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="leavingMonthInput"
              placeholder="MM"
              value={leavingMonth}
              onChange={(event) =>
                onChange('leavingMonth', event.target.value)
              }
              
            />
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="leavingYearInput"
              placeholder="YYYY"
              value={leavingYear}
              onChange={(event) =>
                onChange('leavingYear', event.target.value)
              }
              
            />
          </div>
          </div>
        </div>
    </>
  );
};

export default PresentCompany;
