import React, { useRef} from 'react';

const AcademicDetails = ({
  eduCollegeName,
  eduCourseType,
  eduCourseName,
  eduCountry,
  eduJoiningMonth,
  eduJoiningYear,
  eduLeavingMonth,
  eduLeavingYear,
  onChange,
}) => {
    const focusField = useRef(null);
  return (
    <>
    <div className="mb-4"> </div>
    <div className="d-flex align-items-center mb-4">
        <div className="text-left me-1">
            <h5>Last Education Details</h5>
        </div>
        <div className="underline-div flex-grow-1"></div>
    </div>
    <div className="mb-3">
          <label htmlFor="collegeNameInput" className="form-label">
            College Name
          </label>
          <input
          innerRef={focusField}
            type="text"
            className="form-control projectb-login-custominput"
            id="collegeNameInput"
            placeholder="Enter College Name"
            value={eduCollegeName}
            onChange={(event) =>
              onChange('eduCollegeName', event.target.value)
            }
            required
          />
        </div>
        <div className='row'>
        <div className="col-md-6  mb-3">
          <label htmlFor="courseTypeInput" className="form-label">
            Course Type
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="courseTypeInput"
            placeholder="Enter Course Type"
            value={eduCourseType}
            onChange={(event) =>
              onChange('eduCourseType', event.target.value)
            }
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="courseNameInput" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="courseNameInput"
            placeholder="Enter Course Type"
            value={eduCourseName}
            onChange={(event) =>
              onChange('eduCourseName', event.target.value)
            }
            required
          />
        </div>
        </div>
        <div className="mb-3">
          <label htmlFor="eduCountryInput" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="eduCountryInput"
            placeholder="Enter the Country"
            value={eduCountry}
            onChange={(event) =>
              onChange('eduCountry', event.target.value)
            }
            required
          />
        </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="dob" className="form-label">
            Started At
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="eduJoiningMonthInput"
              placeholder="MM"
              value={eduJoiningMonth}
              onChange={(event) =>
                onChange('eduJoiningMonth', event.target.value)
              }
              required
            />
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="eduJoiningYearInput"
              placeholder="YYYY"
              value={eduJoiningYear}
              onChange={(event) =>
                onChange('eduJoiningYear', event.target.value)
              }
              required
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
              id="eduLeavingMonthInput"
              placeholder="MM"
              value={eduLeavingMonth}
              onChange={(event) =>
                onChange('eduLeavingMonth', event.target.value)
              }
              required
            />
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="eduLeavingYearInput"
              placeholder="YYYY"
              value={eduLeavingYear}
              onChange={(event) =>
                onChange('eduLeavingYear', event.target.value)
              }
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicDetails;
