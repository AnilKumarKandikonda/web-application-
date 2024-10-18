export const registerInitialState = {
    //first page: Basic Info
    firstName: {
        type: 'text',
        placeholder: 'First Name',
        value: '',
        validation: {
            required: true,
            isAlphaNumeric: false
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,

        }
    },
    lastName: {
        type: 'text',
        placeholder: 'Last Name',
        value: '',
        validation: {
            required: true,
            isAlphaNumeric: false
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,

        }
    },
    usrEmail: {
        type: 'email',
        placeholder: 'Email',
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },
    gender: {
        type: 'dropdown',
        placeholder: 'Sex',
        value: { label: 'Select Gender', value: -1 },
        validation: {
            dropdownrRequired: true,
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },
    day: {
        type: 'text',
        placeholder: 'DD',
        value: '',
        validation: {
            required: true,
            maxLength: 2,
            minLength: 2,
            isNumeric: true
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },
    month: {
        type: 'text',
        placeholder: 'MM',
        value: '',
        validation: {
            required: true,
            maxLength: 2,
            minLength: 2,
            isNumeric: true
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },
    year: {
        type: 'text',
        placeholder: 'YYYY',
        value: '',
        validation: {
            required: true,
            maxLength: 4,
            isNumeric: true
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },

    password: {
        type: 'password',
        placeholder: 'Password',
        value: '',
        validation: {
            required: true,
            minLength: 8,
            specialCharacters: true, // this indicates that it should contain special characters and also alpha numeric characters
            password: true
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },
    confirmPassword: {
        type: 'password',
        placeholder: 'Confirm Password',
        value: '',
        validation: {
            required: true,
            checkPassword: true,
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },

    // page 2
    usrCountry: {
        type: 'dropdown',
        placeholder: 'Country',
        value: { label: 'Select Country', value: -1, isCountry: true },
        validation: {
            dropdownrRequired: true,
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },
    usrState: {
        type: 'dropdown',
        placeholder: 'State',
        value: { label: 'Select State', value: -1, isState: true },
        validation: {
            dropdownrRequired: true,
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },
    usrCity: {
        type: 'dropdown',
        placeholder: 'State',
        value: { label: 'Select City', value: -1, isCity: true },
        validation: {
            dropdownrRequired: false,
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },
    usrPostal: {
        type: 'text',
        placeholder: 'Postal Code',
        value: '',
        validation: {
            required: true,
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: '',
            isValid: false,
        }
    },
    usrCountryCode: {
        type: 'dropdown',
        placeholder: 'Country Code',
        value: '',
        validation: {
            dropdownrRequired: false,
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: true,
        }
    },
    usrPhone: {
        type: 'text',
        placeholder: 'Mobile/ Phone',
        value: '',
        validation: {
            required: true,
            minLength: 10,
            isNumeric: true
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },
    // page 3
    usrOptionField: {
        type: 'radioButton',
        placeholder: '',
        value: '30',
        validation: {
            radioGroupRequired: false,
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: true,
        }
    },
    usrPreferenceOther: {
        type: 'text',
        placeholder: 'Enter Preference',
        value: '',
        validation: {
            otherrPreferencerequired: false,
            checkOtherPreference:true,
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: false,
        }
    },

    usrJobPreferences: {
        type: 'dropdownMulti',
        placeholder: '',
        value: null,
        validation: {
            multiDropdownrRequired: false,
            maxSelection:3
        },
        touched: false,
        showMessage: false,
        validMessage: {
            message: 'Field Required',
            isValid: true,
        }
    },
    termsConditions: {
        type: 'button',
        placeholder: '',
        value: false,
        validation: {
            checkboxRequired: true,
        },
        touched: true,
        showMessage: false,
        validMessage: {
            message: 'accept the terms and conditions to register',
            isValid: false,
        }
    },

    formValid: false,
};

// // third page: Company Detail
// companyName: {
//     type: 'text',
//     placeholder: 'Present Company',
//     value: '',
//     validation: {
//         required: false,
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// companyPosition: {
//     type: 'text',
//     placeholder: 'Present Position',
//     value: '',
//     validation: {
//         required: false,
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// companyCountry: {
//     type: 'text',
//     placeholder: 'Country',
//     value: '',
//     validation: {
//         required: false,
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// joiningMonth: {
//     type: 'text',
//     placeholder: 'MM',
//     value: '',
//     validation: {
//         required: false,
//         maxLength: 2,
//         minLength: 2,
//         isNumeric: true
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// joiningYear: {
//     type: 'text',
//     placeholder: 'YYYY',
//     value: '',
//     validation: {
//         required: false,
//         maxLength: 4,
//         minLength: 4,
//         isNumeric: true
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// leavingMonth: {
//     type: 'text',
//     placeholder: 'MM',
//     value: '',
//     validation: {
//         required: false,
//         maxLength: 2,
//         minLength: 2,
//         isNumeric: true
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// leavingYear: {
//     type: 'text',
//     placeholder: 'YYYY',
//     value: '',
//     validation: {
//         required: false,
//         maxLength: 4,
//         minLength: 4,
//         isNumeric: true
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// //forth Page: Academic Page
// eduCollegeName: {
//     type: 'text',
//     placeholder: 'College/ University',
//     value: '',
//     validation: {
//         required: false,
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// eduCourseType: {
//     type: 'dropdown',
//     placeholder: 'Course Type',
//     value: { label: 'Course Type', value: 'Course Type' },
//     validation: {
//         required: false,
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// eduCourseName: {
//     type: 'text',
//     placeholder: 'Course Name',
//     value: '',
//     validation: {
//         required: false,
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// eduCountry: {
//     type: 'text',
//     placeholder: 'Country',
//     value: '',
//     validation: {
//         required: false,
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// eduJoiningMonth: {
//     type: 'text',
//     placeholder: 'MM',
//     value: '',
//     validation: {
//         required: false,
//         maxLength: 2,
//         minLength: 2,
//         isNumeric: true
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// eduJoiningYear: {
//     type: 'text',
//     placeholder: 'YYYY',
//     value: '',
//     validation: {
//         required: false,
//         maxLength: 4,
//         minLength: 4,
//         isNumeric: true
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// eduLeavingMonth: {
//     type: 'text',
//     placeholder: 'MM',
//     value: '',
//     validation: {
//         required: false,
//         maxLength: 2,
//         minLength: 2,
//         isNumeric: true
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// eduLeavingYear: {
//     type: 'text',
//     placeholder: 'YYYY',
//     value: '',
//     validation: {
//         required: false,
//         maxLength: 4,
//         minLength: 4,
//         isNumeric: true
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// usrPositionTitle: {
//     type: 'text',
//     placeholder: 'Job Preference',
//     value: '',
//     validation: {
//         required: false
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },
// usrDepartment: {
//     type: 'dropdown',
//     placeholder: 'Department',
//     value: { label: 'Select Department', value: 'Select Department' },
//     validation: {
//         required: false
//     },
//     touched: false,
//     showMessage: false,
//     validMessage: {
//         message: '',
//         isValid: false,
//     }
// },