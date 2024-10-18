import React from "react";
import ReactSelect from '../../components/Utility/ReactSelect';
import TermsModal from "./TermsModal";

const UserPreferences = ({
    jobPreferencesOptions,
    usrJobPreferences,
    preferenceOptionLoading,
    usrOptionField,
    handleTermsConditionsModal,
    usrPreferenceOther,
    termsConditions,
    showTermsModal,
    onChange }) => {
    const handleDropdownChange = (selectedOption, field) => {
        onChange(field, selectedOption);
    }

    const handleTermsConditions = (field, value) => {
        // console.log(field,value);
        onChange(field, value);
        handleTermsConditionsModal();
    }
    return (
        <>
            <h5>Preferences</h5>
            <div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="radio">
                            <label>
                                <input type="radio" value='31'
                                    checked={usrOptionField.value === '31'}
                                    onChange={(event) => onChange('usrOptionField', event.target.value)}
                                />
                                &nbsp;&nbsp;    Looking for Job
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="radio">
                            <label>
                                <input type="radio" value='32'
                                    checked={usrOptionField.value === '32'}
                                    onChange={(event) => onChange('usrOptionField', event.target.value)}
                                />
                                &nbsp;&nbsp;    Hiring
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="radio">
                            <label>
                                <input type="radio" value='33'
                                    checked={usrOptionField.value === '33'}
                                    onChange={(event) => onChange('usrOptionField', event.target.value)}
                                />
                                &nbsp;&nbsp;    Freelancer
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="radio">
                            <label>
                                <input type="radio" value='34'
                                    checked={usrOptionField.value === '34'}
                                    onChange={(event) => onChange('usrOptionField', event.target.value)}
                                />
                                &nbsp;&nbsp;    Other
                            </label>
                        </div>
                    </div>
                </div>
                {usrOptionField.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrOptionField.validMessage.message}</span>}
            </div>

            {usrOptionField.value === '34' && <div className="row">
                <div className="col-md-12 mb-3">
                    <label htmlFor="usrPreferenceOther" className="form-label">
                        If Other, Please Mention
                    </label>
                    <input
                        type="text"
                        className="form-control projectb-login-custominput"
                        id="usrPreferenceOther"
                        placeholder={usrPreferenceOther.placeholder}
                        value={usrPreferenceOther.value}
                        onChange={(event) => onChange('usrPreferenceOther', event.target.value)}

                    />
                    {usrPreferenceOther.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrPreferenceOther.validMessage.message}</span>}
                </div>
            </div>}

            <div className="row">
                <div className="col-md-12 mb-3">
                    <label htmlFor="usrCountry" className="form-label">
                        Field <span className="text-warning">(can choose upto max of 5)</span>
                    </label>
                    <ReactSelect
                        defaultValue={null}
                        isSearchable={true}
                        options={jobPreferencesOptions}
                        isLoading={preferenceOptionLoading}
                        field='usrJobPreferences'
                        background='rgba(255,255,255,0.1)'
                        isMulti={true}
                        border={false}
                        onSelectChange={handleDropdownChange}
                    />
                </div>
                {usrJobPreferences.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{usrJobPreferences.validMessage.message}</span>}
            </div>
            <div className="row">
                <div className="col-md-12 mb-3">
                    <div>
                        Accept Terms and Conditions. <span className="text-danger" style={{ cursor: 'pointer' }}
                            onClick={handleTermsConditionsModal}
                        >Click Here!</span>
                    </div>
                    {termsConditions.showMessage && <span style={{ fontSize: '12px' }} className='text-warning'>{termsConditions.validMessage.message}</span>}
                </div>
            </div>

            <TermsModal
                modal={showTermsModal}
                modalToggle={handleTermsConditionsModal}
                handleTermsConditions={handleTermsConditions}
            />

        </>
    )
}

export default UserPreferences;