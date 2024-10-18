import React from 'react';
import ReactSelect from '../../components/Utility/ReactSelect';

const BaseInfo2 = ({
  usrState,
  usrPostal,
  usrCountry,
  usrCity,
  usrPhone,
  usrCountryCode,
  usrCountryOptions,
  usrStateOptions,
  usrCityOptions,
  isCountryLoading,
  isStateLoading,
  isCityLoading,
  onChange,
  fetchDataFromFirebase
}) => {
  const handleDropdownChange = (selectedOption, field) => {
    onChange(field, selectedOption);
    if ('usrCountry' === field || 'usrState' === field) {
      fetchDataFromFirebase(field, selectedOption);
    }

  }
  return (
    <>
      <div className="mb-4"> </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="usrCountry" className="form-label">
            Country <span className='text-danger'>*</span>
          </label>
          <ReactSelect
            defaultValue={usrCountry.value}
            isSearchable={true}
            options={usrCountryOptions}
            isLoading={isCountryLoading}
            field='usrCountry'
            background='rgba(255,255,255,0.1)'
            border={false}
            onSelectChange={handleDropdownChange}
          />
          {usrCountry.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrCountry.validMessage.message}</span>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="usrState" className="form-label">
            State <span className='text-danger'>*</span>
          </label>
          <ReactSelect
            defaultValue={usrState.value}
            isSearchable={true}
            options={usrStateOptions}
            isLoading={isStateLoading}
            field='usrState'
            background='rgba(255,255,255,0.1)'
            border={false}
            onSelectChange={handleDropdownChange}
          />
          {usrState.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrState.validMessage.message}</span>}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="usrCity" className="form-label">
            City <span className='text-danger'>*</span>
          </label>
          <ReactSelect
            defaultValue={usrCity.value}
            isSearchable={true}
            options={usrCityOptions}
            isLoading={isCityLoading}
            field='usrCity'
            background='rgba(255,255,255,0.1)'
            border={false}
            onSelectChange={handleDropdownChange}
          />
          {usrCity.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrCity.validMessage.message}</span>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="usrPostal" className="form-label">
            Postal <span className='text-danger'>*</span>
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="usrPostal"
            placeholder="Postal"
            value={usrPostal.value}
            onChange={(event) => onChange('usrPostal', event.target.value)}

          />
          {usrPostal.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrPostal.validMessage.message}</span>}
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="usrCountryCode" className="form-label">
            Country Code <span className='text-danger'>*</span>
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="usrCountryCode"
            placeholder="Postal"
            value={usrCountryCode.value}
            disabled={true}
            onChange={(event) => onChange('usrCountryCode', event.target.value)}
          />
          {usrCountryCode.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrCountryCode.validMessage.message}</span>}
        </div>
        <div className="col-md-8 mb-3">
          <label htmlFor="usrPhoneInput" className="form-label">
            Phone/ Mobile <span className='text-danger'>*</span>
          </label>
          <input
            type="text"
            className="form-control projectb-login-custominput"
            id="usrPhoneInput"
            placeholder="Phone/ Mobile"
            value={usrPhone.value}
            onChange={(event) => onChange('usrPhone', event.target.value)}

          />
          {usrPhone.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrPhone.validMessage.message}</span>}
        </div>
      </div>
    </>
  );
};

export default BaseInfo2;
