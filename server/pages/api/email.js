"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 8412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@sendgrid/mail"
const mail_namespaceObject = require("@sendgrid/mail");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/email.js

function handler(req, res) {
    if (req.method === 'POST') {
        const parsedReq = {
            to: process.env.SENDGRID_TO_EMAIL,
            from: process.env.SENDGRID_FROM_EMAIL,
            subject: req.body.msg.subject,
            text: req.body.msg.text,
            html: req.body.msg.html
        };
        mail_default().setApiKey(process.env.SENDGRID_API_KEY);
        mail_default().send(parsedReq).then(()=>{
            console.log('Email sent');
            res.send('Successfully sent! Note, the email may be queued.');
        }).catch((error)=>{
            console.error(error);
            res.send(error);
        });
    } else {
        res.send("Something's not right. Check your API call. Note, this route only accepts post requests!");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8412));
module.exports = __webpack_exports__;

})();