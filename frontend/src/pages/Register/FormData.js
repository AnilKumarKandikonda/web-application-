import { useState } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const checkValidity = (value, rules) => {
    let valididation = {
      isValid: true,
      message: ''
    }
    if (!rules) {
      return {
        valid: true,
        message: ''
      };
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      let isValid = pattern.test(value);
      return {
        isValid: isValid,
        message: !isValid ? 'Invalid Email Address' : '',
      };
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      let isValid = pattern.test(value);
      return {
        isValid: isValid,
        message: !isValid ? 'Please Enter Numeric' : ''
      };
    }
    if (rules.maxLength) {
      let isValid = value.length <= rules.maxLength;
      return {
        isValid: isValid,
        message: !isValid ? 'Invalid Data' : ''
      };
    }
    if (rules.specialCharacters) {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[^\w\s]).{8,}$/;
      let isValid = pattern.test(value);
      console.log('check password', isValid);
      return {
        isValid: isValid,
        message: !isValid ? 'Password should contain atleast one special characters, numbers, lowercase and uppercase alphabets' : ''
      };
    }
    if (rules.required) {
      let isValid = value.trim() !== '';
      return {
        isValid: isValid,
        message: !isValid ? 'Field Required' : ''
      };
    }
    if (rules.minLength) {
      let isValid = value.length >= rules.minLength;
      if (rules.password) {
        return {
          isValid: isValid,
          message: !isValid ? 'Min 8 characters needed' : ''
        };
      } else {
        return {
          isValid: isValid,
          message: !isValid ? 'Invalid Data' : ''
        };
      }
    }
    if (rules.dropdownrRequired) {
      if (value.value === -1) {
        return {
          isValid: false,
          message: 'Field Required'
        }
      }
    }
    if (rules.checkboxRequired) {
      console.log('terms checking', value, rules.checkboxRequired);
      if (value === false) {
        return {
          isValid: false,
        }
      }
    }
    if (rules.maxSelection) {
      if (value.length > 5) {
        return {
          isValid: false,
          message: 'You can select upto 5 fields'
        }
      }
    }
    if (rules.checkOtherPreference) {
      console.log(formData.usrOptionField.value);
      if (value === '34') {
        if (value.trim() !== '') {
          return {
            isValid: false,
            message: 'Field Required'
          }
        }
      }
    }
    return valididation;
  }

  const handleInputChange = (field, value) => {
    // console.log(field, value);
    if (field === 'usrCountry') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: {
          ...prevFormData[field],
          value: value,
          validMessage: {
            ...checkValidity(value, prevFormData[field].validation),
          },
          showMessage: false,
          touched: true,
        },
        'usrState': {
          ...prevFormData['usrState'],
          value: { label: 'Select State', value: -1, isState: true },
        },
        'usrCity': {
          ...prevFormData['usrCity'],
          value: { label: 'Select City', value: -1, isCity: true },
        },
        'usrCountryCode': {
          ...prevFormData['usrCountryCode'],
          value: "+" + value.phone_code
        }
      }));
    }
    else if (field === 'usrState') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: {
          ...prevFormData[field],
          value: value,
          validMessage: {
            ...checkValidity(value, prevFormData[field].validation),
          },
          showMessage: false,
          touched: true,
        },
        'usrCity': {
          ...prevFormData['usrCity'],
          value: { label: 'Select City', value: -1, isCity: true },
        }
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: {
          ...prevFormData[field],
          value: value,
          validMessage: {
            ...checkValidity(value, prevFormData[field].validation),
          },
          showMessage: false,
          touched: true,
        },
      }));
    }

  };

  const resetUserLocation = (field, label) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: {
        ...prevFormData[field],
        value: { label: label, value: -1, isState: true },
      }
    }))
  }

  const resetForm = (initialData) => {
    setFormData(initialData);
  };

  const validateFormData = (field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: {
        ...prevFormData[field],
        showMessage: true
      }
    }))
  }

  return {
    formData,
    handleInputChange,
    resetForm,
    validateFormData,
    resetUserLocation
  };
};
export default useForm;