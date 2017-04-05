/**
 * Constant Strings
 */

const locations = require('../../seed/service/locations')
  .join(', ');

/**
 *  General Strings
 */

const generalErrors = {
  mailerError: 'An issue occured while sending the email.',
};

/**
 * Business Strings
 */

const bussinessValidationErrors = {
  emptyEmail: 'Email is a required field.',
  invalidEmail: 'Invalid Email.',
  emptyPassword: 'Password is a required field.',
  invalidPassword: 'Password length must be between 8 and 15 and contains at least one number.',
  emptyName: 'Name is a required field.',
  emptyMobile: 'Mobile is a required field.',
  emptyDescription: 'Description is a required field.',
  invalidMobile: 'Mobile must be in this format 01xxxxxxxxx',
  passwordRequired: 'Password is a required field.',
  passwordLength: 'Password length must be between 8 and 15 and contains at least one number.',
  passwordMismatch: 'Password and Password Confirmation must match.',
  workingHoursRequired: 'Working Hours is a required field.',
  categoriesRequired: 'Must Include atleast 1 category.',
  branchesRequired: 'Must Include aleast 1 branch.',
  businessExists: 'Business already exists.',
  invalidBusinessId: 'The required id is invalid.',
  locationRequired: 'Location is a required field',
  addressRequired: 'Address is a required field',
  locationInvalid: `Invalid location. Must be any of [${locations}]`,
};

const businessSuccess = {
  unverifiedSignup: 'Signup Successful, A representative will contact you soon.',
  emailConfirmation: 'Please check your email for the email confirmation.',
  infoEditSuccess: 'Info Edited Successfully',
  branchAddedSuccess: 'Branch Added Successfully',
  branchEditSuccess: 'Branch Edited Successfully',
  branchDeleteSuccess: 'Branch Deleted Successfully',
};

const businessLoginMessages = {
  invalidCreds: 'Invalid Credentials.',
  loginSuccess: 'Business Login Success.',
  pendingVerification: 'You have not been confirmed by the admin.',
  removeBusiness: 'This business has been removed.',
  invalidToken: 'Invalid Token',
};

const businessMessages = {
  allFieldsEmpty: 'All fields are empty. Atleast 1 field is needed.',
  businessDoesntExist: 'Business Doesn\'t Exist',
  branchDoesntExist: 'Business Doesn\'t Exist',
  mismatchID: 'You can only edit your Info!',
};

/**
 * Client Strings
 */

const clientValidationErrors = {
  emptyEmail: 'Email is a required field.',
  invalidEmail: 'Invalid Email.',
  emptyPassword: 'Password is a required field.',
  invalidPassword: 'Password length must be between 8 and 15 and contains at least one number.',
  emptyConfirmation: 'Password Confirmation is a required field.',
  passwordMismatch: 'Password and Password Confirmation must match.',
  emptyFirstName: 'Firstname is a required field.',
  emptyLastName: 'Lastname is a required field.',
  emptyMobile: 'Mobile is a required field.',
  invalidMobile: 'Mobile must be in this format 01xxxxxxxxx',
  emptyGender: 'Gender is a required field.',
  invalidGender: 'Invalid Gender.',
  invalidBirthdate: 'Invalid birthdate',
  userExists: 'User already exists.',
};

const clientSuccess = {
  signup: 'Signup Successful, Please check your email for the email confirmation.',
  emailConfirmation: 'Please check your email for the email confirmation.',
};


const clientForgotPassword = {
  CHECK_YOU_EMAIL: 'You should recieve an email to reset your password, if the email exists.',
  INVALID_RESET_TOKEN: 'Invalid reset token.',
  PASSWORD_RESET_SUCCESS: 'Password Changed Successfully.',
};

const clientLoginMessages = {
  invalidCreds: 'Invalid Credentials.',
  loginSuccess: 'Client Login Success.',
  confirmEmail: 'Please confirm your email.',
  bannedClient: 'This user has been banned.',
  invalidToken: 'Invalid Token',
};

const clientConfirmation = {
  emailAlreadyConfirmed: 'User email already confirmed.',
  notFound: 'User not found.',
};
/**
 * Visitor Strings
 */

const visitorErrors = {
  NoRelatedBusinesses: 'No related businesses',
  NoRelatedServices: 'No related services',
};

const visitorValidationErrors = {
  InvalidID: 'Invalid category ID',
  InvalidOffset: 'Invalid Offset',
};

const businessForgotPassword = {
  CHECK_YOU_EMAIL: 'You should recieve an email to reset your password, if the email exists.',
  INVALID_RESET_TOKEN: 'Invalid reset token.',
  PASSWORD_RESET_SUCCESS: 'Password Changed Successfully.',
};
/**
 * Service Strings
 */

const serviceValidationErrors = {
  emptyName: 'Service Name is a required field',
  emptyShortDescription: 'Service short description is a required field',
  invalidCategory: 'No such a category',
};

const offeringValidationError = {
  emptyPrice: 'Offering Price is a required field',
  emptyStartDate: 'Offering Start Date is a required field',
  invalidStartDate: 'Invalid Start Date',
  emptyEndDate: 'Offering End Date is a required field',
  invalidEndDate: 'Invalid End Date',
  emptyLocation: 'Location is a required field',
  invalidBranchID: 'Branch is invalid',
  invalidServiceID: 'Service is invalid',
  invalidService: 'No such a service',
  invalidOperation: 'Not authorized for doing such an operation',
  invalidBranch: 'Your business doesnot have this branch',
  invalidOfferingID: 'Offering is invalid',
  invalidOffering: 'No such offering',
};

const serviceSuccess = {
  serviceAdded: 'Service has been added successfully to your business',
  serviceEdited: 'Service has been edited successfully to your business',
  serviceDeleted: 'Service has been deleted successfully',
  offeringAdded: 'Offering has been added successfully to your business',
  offeringEdited: 'Offering has been edited successfully to your business',
  offeringDeleted: 'Offering has been deleted successfully',
};

/**
 * Admin Strings
 */

const adminLoginMessages = {
  invalidCreds: 'Invalid Credentials.',
  loginSuccess: 'Admin Login Success.',
  invalidToken: 'Invalid Token',
};

const adminValidationErrors = {
  emptyEmail: 'Email is a required field.',
  invalidEmail: 'Invalid Email.',
  emptyPassword: 'Password is a required field.',
  invalidPassword: 'Password length must be between 8 and 15 and contains at least one number.',
  passwordRequired: 'Password is a required field.',
  passwordLength: 'Password length must be between 8 and 15 and contains at least one number.',
  passwordMismatch: 'Password and Password Confirmation must match.',
  adminExists: 'Administrator already exists.',
};

module.exports = {
  generalErrors,
  clientValidationErrors,
  clientSuccess,
  clientLoginMessages,
  clientConfirmation,
  clientForgotPassword,

  bussinessValidationErrors,
  businessSuccess,
  businessLoginMessages,
  businessForgotPassword,
  adminLoginMessages,
  adminValidationErrors,
  visitorErrors,
  visitorValidationErrors,
  businessMessages,

  serviceValidationErrors,
  offeringValidationError,
  serviceSuccess,
};
