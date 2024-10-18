import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import Spinner from '../../components/Spinner/Spinner';
import useForm from './FormData';
import BasicInfo from './BasicInfo';
import BaseInfo2 from './BaseInfo2';
import { connect } from "react-redux";
import UserPreferences from './UserPreferences';
import { registerInitialState } from '../../constants/registerConstants';
import { userLocations } from '../../constants/userLocation';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import FireBaseData from '../../components/FirebaseData/FirebaseData';
import { userRegistration } from './actions/registerAction';
import BaseUtilityModal from '../../components/Utility/BaseUtilityModal';


const UserRegister = (props) => {
  const navigate = useNavigate();
  document.title = 'Sign Up | project-B';
  const lastPage = 3;
  const [page, setPage] = useState(1);

  // page 2 data of usestate



  // page 3 data of usestate
  const [jobPreferencesOptions, setJobPreferencesOptions] = useState([]);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const { formData, handleInputChange, validateFormData, resetForm } = useForm(registerInitialState);
  const { userLocationData, loadCountries, loadStates, loadCities } = FireBaseData(userLocations);
  const [showSuccessDialogue, setShowSuccessDialogue] = useState(false);


  const [genderOptions] = useState([
    { value: 10, label: 'male' },
    { value: 11, label: 'female' },
    { value: 12, label: 'Other' },
  ]);

  /**
   * VALIDATE FORM DATA OF EACH PAGE
   * @returns true or false
   */
  const validateForm = () => {
    let isValid = true;
    if (page === 1) {
      if (!formData.firstName.validMessage.isValid) {
        validateFormData('firstName');
        return formData.firstName.validMessage.isValid;
      } if (!formData.lastName.validMessage.isValid) {
        validateFormData('lastName');
        return formData.lastName.validMessage.isValid;
      } if (!formData.usrEmail.validMessage.isValid) {
        validateFormData('usrEmail');
        return formData.usrEmail.validMessage.isValid;
      } if (!formData.password.validMessage.isValid) {
        validateFormData('password');
        return formData.password.validMessage.isValid;
      } if (!formData.confirmPassword.validMessage.isValid) {
        validateFormData('confirmPassword');
        return formData.confirmPassword.validMessage.isValid;
      } if (!formData.gender.validMessage.isValid) {
        validateFormData('gender');
        return formData.gender.validMessage.isValid;
      } if (!formData.day.validMessage.isValid) {
        validateFormData('day');
        return formData.day.validMessage.isValid;
      } else if (!formData.month.validMessage.isValid) {
        validateFormData('month');
        return formData.month.validMessage.isValid;
      } else if (!formData.year.validMessage.isValid) {
        validateFormData('year');
        return formData.year.validMessage.isValid;
      }
      return isValid;
    } else if (page === 2) {
      if (!formData.usrCountry.validMessage.isValid) {
        validateFormData('usrCountry');
        return formData.usrCountry.validMessage.isValid;
      } if (!formData.usrState.validMessage.isValid) {
        validateFormData('usrState');
        return formData.usrState.validMessage.isValid;
      } if (!formData.usrCity.validMessage.isValid) {
        validateFormData('usrCity');
        return formData.usrCity.validMessage.isValid;
      } if (!formData.usrPostal.validMessage.isValid) {
        validateFormData('usrPostal');
        return formData.usrPostal.validMessage.isValid;
      } if (!formData.usrCountryCode.validMessage.isValid) {
        validateFormData('usrCountryCode');
        return formData.usrCountryCode.validMessage.isValid;
      } if (!formData.usrPhone.validMessage.isValid) {
        validateFormData('usrPhone');
        return formData.usrPhone.validMessage.isValid;
      }
      return isValid;
    } else if (page === 3) {
      if (!formData.usrOptionField.validMessage.isValid) {
        // console.log('usrOptionField');
        validateFormData('usrOptionField');
        isValid = formData.usrOptionField.validMessage.isValid;
        if (!isValid) {
          return formData.usrOptionField.validMessage.isValid;
        }
      }
      if (!formData.usrPreferenceOther.validMessage.isValid) {
        // console.log('usrPreferenceOther');
        if (formData.usrOptionField.value === '34') {
          validateFormData('usrPreferenceOther');
          isValid = formData.usrPreferenceOther.validMessage.isValid;
          if (!isValid)
            return formData.usrPreferenceOther.validMessage.isValid;

        }
      }
      if (!formData.usrJobPreferences.validMessage.isValid) {
        validateFormData('usrJobPreferences');
        isValid = formData.usrJobPreferences.validMessage.isValid;
        if (!isValid)
          return formData.usrJobPreferences.validMessage.isValid;
      }
      if (!formData.termsConditions.validMessage.isValid) {
        console.log('terms and conditions');
        validateFormData('termsConditions');
        return formData.termsConditions.validMessage.isValid;
      }
      return isValid;
    }
    return isValid;
  }
  // end validationform

  function handleSubmit() {
    // event.preventDefault();
    console.log(formData);
    props.onUserRegistration(formData);
    // here check the validity of the details, and if valid, then submit, if not redirect to the page where there is error.
  };
  const handleNext = (event) => {
    event.preventDefault();
    if (page !== lastPage) {
      // console.log(validateForm())
      if (validateForm()) {
        setPage(page + 1);
      }
    } else {
      if (validateForm()) {
        handleSubmit();
      }

    }

  };
  const handlePrev = (event) => {
    event.preventDefault();
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  // this is to fetch when there is any change in country or change in state
  const fetchDataFromFirebase = (field, value) => {
    // console.log(field, value);
    if (field === 'usrCountry') {
      loadStates(value.value);
    }
    if (field === 'usrState') {
      loadCities(formData.usrCountry.value.value, value.value)
    }
    // fetch the data from firebase.
  }

  const loadJobPreferences = () => {
    // load job preferences from firebase and setpreferences to usestate
  }

  const handleTermsConditionsModal = () => {
    setShowTermsModal(!showTermsModal);
  }

  useEffect(() => {
    // get the countries list from the firbase,
    loadCountries();
    // get the job preferences from the firebase
    loadJobPreferences();
  }, [loadCountries])
  // console.log(formData);

  useEffect(() => {
    console.log(props.registerUserFail);
    if (props.registerUserFail.status !== undefined && props.registerUserFail.status) {
      if (props.registerUserFail.page !== 0) {
        setPage(props.registerUserFail.page);
      }
    }
    if (props.registerUserSuccess.status !== undefined && props.registerUserSuccess === 200) {
      resetForm(registerInitialState);
      setShowSuccessDialogue(true);
      var timer = setTimeout(() => {
        navigate('/login');
        setShowSuccessDialogue(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [props.registerUserFail, props.registerUserSuccess]);

  return (
    <Aux>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              {showSuccessDialogue && <BaseUtilityModal
                titleShow={true}
                titleSuccess={true}
                titleShowMessage="Registration Successful"
                message="Registration successful, you will be navigated to the login page. "
                showLoader={true}
              />}
              {(props.registerUserLoading) && <Spinner />}
              <Container className="projectb-login-container">
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    {/* {(props.registerUserFail.status !== undefined && props.registerUserFail.status !== 200) && (
                      <Alert
                        message={props.registerUserFail.message}
                        contactLink={true}
                        alertIcon={true}
                      />
                    )} */}
                    <Card className="auth-box ">
                      <Row className="g-0">
                        <Col lg={12}>
                          <CardBody className="auth-content h-100 text-white projectb-login-card ">
                            <div className="w-100">
                              {page === 1 && (
                                <div className="text-center mb-4">
                                  <h5>Welcome to Project-B !!!</h5>
                                  <p className="text-white-70">
                                    Register to continue.
                                  </p>
                                </div>
                              )}
                              <Form
                                className="auth-form"
                                id="projectbRegisterForm"
                              >
                                {page === 1 && (
                                  <BasicInfo
                                    firstName={formData.firstName}
                                    lastName={formData.lastName}
                                    usrEmail={formData.usrEmail}
                                    gender={formData.gender}
                                    day={formData.day}
                                    month={formData.month}
                                    year={formData.year}
                                    password={formData.password}
                                    confirmPassword={formData.confirmPassword}
                                    genderOptions={genderOptions}
                                    onChange={handleInputChange}

                                  />
                                )}
                                {page === 2 && (
                                  <BaseInfo2
                                    usrState={formData.usrState}
                                    usrPostal={formData.usrPostal}
                                    usrCountry={formData.usrCountry}
                                    usrCity={formData.usrCity}
                                    usrPhone={formData.usrPhone}
                                    usrCountryCode={formData.usrCountryCode}
                                    usrCountryOptions={userLocationData.countries}
                                    usrStateOptions={userLocationData.states}
                                    usrCityOptions={userLocationData.cities}
                                    isCountryLoading={false}
                                    isStateLoading={false}
                                    isCityLoading={false}
                                    onChange={handleInputChange}
                                    fetchDataFromFirebase={fetchDataFromFirebase}
                                  />
                                )}
                                {page === 3 && (
                                  <UserPreferences
                                    jobPreferencesOptions={jobPreferencesOptions}
                                    usrJobPreferences={formData.usrJobPreferences}
                                    termsConditions={formData.termsConditions}
                                    preferenceOptionLoading={false}
                                    usrOptionField={formData.usrOptionField}
                                    usrPreferenceOther={formData.usrPreferenceOther}
                                    showTermsModal={showTermsModal}
                                    handleTermsConditionsModal={handleTermsConditionsModal}
                                    onChange={handleInputChange}
                                  />
                                )}

                                <div className="row">
                                  <div className="col-md-4 mb-3">
                                    {page !== 1 && <div className="text-center">
                                      <button
                                        type="button"
                                        className="btn btn-white btn-hover w-100"
                                        onClick={handlePrev}>
                                        Previous
                                      </button>
                                    </div>}
                                  </div>
                                  <div className="col-md-4 mb-3"></div>
                                  <div className="col-md-4 mb-3">
                                    <div className="text-center">
                                      <button
                                        type="button"
                                        className="btn btn-white btn-hover w-100"
                                        onClick={handleNext}
                                      >
                                        {page !== lastPage ? 'Next' : 'Submit'}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Form>
                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  Already have an account ?{" "}
                                  <Link
                                    to="/signin"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign In{" "}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    // register page details
    registerUserLoading: state.registerPage.registerUserLoading,
    registerUserSuccess: state.registerPage.registerUserSuccess,
    registerUserFail: state.registerPage.registerUserFail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserRegistration: (data) => dispatch(userRegistration(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);
