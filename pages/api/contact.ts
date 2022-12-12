
export default function hundler(req: any, res: any) {

    //require('dotenv').config()
    //test en attendant la configuration des env
    //const PASSWORD = process.env.password
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'tabet.sendmail@gmail.com',
            pass: 'ikwyqbpwjlwynotz',
        },
        secure: true,
    })

    const mailData = {
        from: 'tabet.sendmaill@gmail.com',
        to: 'alae.tabet02@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
      }
      transporter.sendMail(mailData, function (err : any, info : any) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)

}