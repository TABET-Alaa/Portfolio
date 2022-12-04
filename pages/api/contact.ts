
export default function (req: any, res: any) {
    // !!!! faut changer le type 'any' dans les parametres req et res !!
    // !!!! besoin de configurer les environnements variables pour la securite du mot passe !!!!
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
