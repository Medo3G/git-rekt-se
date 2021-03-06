/**
 * Mailer Service
 */

const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const Admin = require('../../models/admin/Admin');
const Business = require('../../models/business/Business');

/**
 * Mailer Configuration.
 */

const mailer = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: process.env.SEND_GRID,
  },
}));

const info = {
  from: 'mohamedelzarei@gmail.com',
};

/**
 * Sends an email to the Client with a token to allow him to confirm his email.
 * @param {string} email - Client's email address.
 * @param {string} host - Website's address.
 * @param {string} resetToken - JWT Token.
 * @returns {Promise<string>} - Resolves if no error occured while
 * sending the email, rejects otherwise.
 */
exports.clientConfirmEmail = (email, host, resetToken) => {
  const emailTemplateVars = {
    confirmUrl: `http://${host}/client/confirm/${resetToken}`,
    title: 'Git Rekt Directory',
  };

  const emailContent = {
    to: [email],
    from: info.from,
    subject: 'Git Rekt Confirm Email',
    html: `
            Hello,
            Thanks for registering on our ${emailTemplateVars.title}, to confirm your email click
            <a href="${emailTemplateVars.confirmUrl}">Here</a>.
      `,
    text: `
      Hello,
      Thanks for registering on our ${emailTemplateVars.title}, to confirm your email
      copy and paste the following url into your browser ${emailTemplateVars.confirmUrl}.
      `,
  };
  return new Promise((resolve, reject) => {
    mailer.sendMail(emailContent, (err, information) => {
      if (err) {
        return reject(err);
      }
      return resolve(information);
    });
  });
};

/**
 * Sends an email to the client notifying him
 * that his booking has been accepted.
 * @param {string} email - Client's Email.
 * @returns {Promise<string>} - Resolves if no error occurs, otherwise rejects.
 */
exports.notifyClientOnTransactionAccept = (email) => {
  const emailContent = {
    to: email,
    from: info.from,
    subject: '[Git-Rekt] Booking Confirmed',
    html: `Hello,
          This email is to notify you that one of your bookings have been confirmed.`,
    text: `Hello,
      This email is to notify you that one of your bookings have been confirmed.`,
  };
  return new Promise((resolve, reject) => {
    mailer.sendMail(emailContent, (err, information) => {
      if (err) {
        reject(err);
      } else {
        resolve(information);
      }
    });
  });
};

/**
 * Sends an email to the client notifying him
 * that his booking has been rejected.
 * @param {string} email - Client's Email.
 * @returns {Promise<string>} - Resolves if no error occurs, otherwise rejects.
 */
exports.notifyClientOnTransactionRefund = (email) => {
  const emailContent = {
    to: email,
    from: info.from,
    subject: '[Git-Rekt] Transaction Refunded',
    html: `Hello,
          This email is to notify you that one of your transactions have been refunded.`,
    text: `Hello,
      This email is to notify you that one of your transactions have been refunded.`,
  };
  return new Promise((resolve, reject) => {
    mailer.sendMail(emailContent, (err, information) => {
      if (err) {
        reject(err);
      } else {
        resolve(information);
      }
    });
  });
};

/**
 * Sends an email to the Admin notifying
 * him of a new Business Signing Up.
 * @returns {Promise<string>} - Resolves if no error occured while
 * sending the email, rejects otherwise.
 */
exports.notifyAdminOfNewBusinessSignup = () => {
  const emailContent = {
    from: info.from,
    subject: '[Git-Rekt] New Business Signup',
    html: `
            Hello, <br />
            A new business has requested to signup and be listed on the directory waiting for approval.<br />
            --------------------------------- <br />
            This is an automated message.
      `,
    text: `
       Hello,
       A new business has requested to signup and be listed on the directory waiting for approval.
      `,
  };

  return new Promise((resolve, reject) => {
    Admin.findOne({})
      .then((userInfo) => {
        emailContent.to = [userInfo.email];
        mailer.sendMail(emailContent, (err, information) => {
          if (err) {
            return reject(err);
          }
          return resolve(information);
        });
      })
      .catch(reject);
  });
};

/**
 * Sends an email to the Client to allow him to change his password.
 * @param {string} email - Client's email address.
 * @param {string} host - Website's address.
 * @param {string} resetToken - JWT Token.
 * @returns {Promise<string>} - Resolves if no error occured while
 * sending the email, rejects otherwise.
 */
exports.forgotPasswordEmail = (email, host, resetToken) => {
  const mailOptions = {
    to: email,
    from: 'mohamedelzarei@gmail.com',
    subject: '[Git-Rekt] Reset Password',
    text: `${'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://'}${host}/client/reset/${resetToken}\n\n` +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n',
  };

  return new Promise((resolve, reject) => {
    mailer.sendMail(mailOptions, (err, information) => {
      if (err) {
        return reject(err);
      }
      return resolve(information);
    });
  });
};

/**
 * Sends an email to the Business to allow him to change his password.
 * @param {string} email - Business' email address.
 * @param {string} host - Website's address.
 * @param {string} resetToken - JWT Token.
 * @returns {Promise<string>} - Resolves if no error occured while
 * sending the email, rejects otherwise.
 */
exports.forgotPasswordBusinessEmail = (email, host, resetToken) => {
  const mailOptions = {
    to: email,
    from: 'mohamedelzarei@gmail.com',
    subject: '[Git-Rekt] Reset Password',
    text: `${'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://'}${host}/business/reset/${resetToken}\n\n` +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n',
  };

  return new Promise((resolve, reject) => {
    mailer.sendMail(mailOptions, (err, information) => {
      if (err) {
        return reject(err);
      }
      return resolve(information);
    });
  });
};

/**
 * Sends an email to the Business informing
 * him that he has been accepted.
 * @param {string} mail - Business' email address.
 * @param {string} host - Website's address.
 * @param {string} token - JWT Token.
 * @returns {Promise<string>} - Resolves if no error occured while
 * sending the email, rejects otherwise.
 */
exports.notifyBusinessOfConfirmation = (host, mail, token) => {
  const emailContent = {
    from: info.from,
    to: mail,
    subject: 'Git Rekt Application Accepted',
    text: `
       Hello,
       Your application for our directory [Git-Rekt] has been Accepted.\n\n 
       Please click on the following link, or paste this into your browser to complete the process:
       http://${host}/confirm/signup/${token}
      ---------------------------------
      This is an automated message.`,
  };
  return new Promise((resolve, reject) => {
    mailer.sendMail(emailContent, (err, information) => {
      if (err) {
        return reject(err);
      }
      return resolve(information);
    });
  });
};

/**
 * Sends an email to the Business informing
 * him that his application has been denied.
 * @param {string} mail - Business' email address.
 * @returns {Promise<string>} - Resolves if no error occured while
 * sending the email, rejects otherwise.
 */
exports.notifyBusinessOfDenial = (mail) => {
  const emailContent = {
    from: info.from,
    to: mail,
    subject: 'Git Rekt Application Denied',
    text: `
       Hello,
       Your application for our directory [Git-Rekt] has been Denied.
       ---------------------------------
       This is an automated message.
      `,
  };
  return new Promise((resolve, reject) => {
    mailer.sendMail(emailContent, (err, information) => {
      if (err) {
        reject(err);
      } else {
        resolve(information);
      }
    });
  });
};

/**
 * Sends an email to user notifying him that
 * the email associated with his account has been changed.
 * @param {string} email - User's Email.
 * @returns {Promise<string>} - Resolves if no error occurs, else rejects.
 */
exports.sendConfirmationMessage = (email) => {
  const mailOptions = {
    to: email,
    from: 'mohamedelzarei@gmail.com',
    subject: '[Git-Rekt] Email change',
    text: 'You are receiving this because you  have requested to change the email associated with your account.\n\n' +
      'If you did not request this, please contact us.\n',
  };
  return new Promise((resolve, reject) => {
    mailer.sendMail(mailOptions, (err, information) => {
      if (err) {
        return reject(err);
      }
      return resolve(information);
    });
  });
};
