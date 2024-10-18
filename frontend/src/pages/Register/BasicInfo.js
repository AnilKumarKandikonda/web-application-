import React from 'react';
import ReactSelect from '../../components/Utility/ReactSelect';

const BasicInfo = ({
  firstName,
  lastName,
  usrEmail,
  gender,
  day,
  month,
  year,
  password,
  confirmPassword,
  genderOptions,
  onChange,
}) => {
  const handleDropdownChange = (selectedOption, field) => {
    onChange(field, selectedOption)
  }
  return (
    <>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="usernameFirstInput" className="form-label">
            First Name <span className='text-danger'>*</span>
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="usernameFirstInput"
            placeholder="Enter your First Name"
            value={firstName.value}
            onChange={(event) => onChange('firstName', event.target.value)}
          />
          {firstName.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{firstName.validMessage.message}</span>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="usernameLastInput" className="form-label">
            Last Name <span className='text-danger'>*</span>
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="usernameLastInput"
            placeholder="Enter your Last Name"
            value={lastName.value}
            onChange={(event) => onChange('lastName', event.target.value)}

          />
          {lastName.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{lastName.validMessage.message}</span>}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="userEmailInput" className="form-label">
          Email <span className='text-danger'>*</span>
        </label>
        <input
          type="email"
          className="form-control projectb-login-custominput"
          id="userEmailInput"
          placeholder="Enter your Email"
          value={usrEmail.value}
          onChange={(event) => onChange('usrEmail', event.target.value)}

        />
        {usrEmail.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrEmail.validMessage.message}</span>}
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="userPhoneInput" className="form-label">
            Gender <span className='text-danger'>*</span>
          </label>
          <ReactSelect
            defaultValue={gender.value}
            isSearchable={true}
            options={genderOptions}
            isLoading={false}
            field='gender'
            background='rgba(255,255,255,0.1)'
            border={false}
            onSelectChange={handleDropdownChange}
          />
          {gender.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{gender.validMessage.message}</span>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth <span className='text-danger'>*</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="monthDOBInput"
              placeholder="MM"
              maxLength={2}
              value={month.value}
              onChange={(event) => onChange('month', event.target.value)}

            />
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="dayDOBInput"
              placeholder="DD"
              maxLength={2}
              value={day.value}
              onChange={(event) => onChange('day', event.target.value)}

            />
            <input
              type="text"
              className="form-control projectb-login-custominput"
              id="yearDOBInput"
              placeholder="YYYY"
              maxLength={4}
              value={year.value}
              onChange={(event) => onChange('year', event.target.value)}
            />
          </div>
          {(month.showMessage) && <span style={{ fontSize: '12px' }} className='text-warning'>{month.validMessage.message}</span>}
          {(day.showMessage) && <span style={{ fontSize: '12px' }} className='text-warning'>{day.validMessage.message}</span>}
          {(year.showMessage) && <span style={{ fontSize: '12px' }} className='text-warning'>{year.validMessage.message}</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password <span className='text-danger'>*</span>
          </label>
          <input
            type="password"
            className="form-control projectb-login-custominput"
            id="passwordInput"
            placeholder="Enter your Password"
            value={password.value}
            onChange={(event) => onChange('password', event.target.value)}

          />
          {(password.showMessage) && <span style={{ fontSize: '12px' }} className='text-warning'>{password.validMessage.message}</span>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="confirmPasswordInput" className="form-label">
            Confirm Password <span className='text-danger'>*</span>
          </label>
          <input
            type="password"
            className="form-control projectb-login-custominput"
            id="confirmPasswordInput"
            placeholder="Retype Password"
            value={confirmPassword.value}
            onChange={(event) => onChange('confirmPassword', event.target.value)}

          />
          {(confirmPassword.showMessage) && <span style={{ fontSize: '12px' }} className='text-warning'>{confirmPassword.validMessage.message}</span>}
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
