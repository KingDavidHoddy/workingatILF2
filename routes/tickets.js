const express = require('express');
const { checkTicket, getAllTickets, getTicketById, deleteTicketById, mailTempToken, getTicketByToken, verifyPassWordForTicket, scan} = require('../controllers/tickets')
const router = express.Router();
const {protect, userRoleAuth } = require('../middleware/authMiddleware')

//router.route('/sendEventTicket/:userId').post(sendEventTicket)
//router.route('/getEventTicket/:userId').get(getEventTicket)

router.route('/tempToken').post(mailTempToken)
router.route('/getTicketByToken').get(getTicketByToken)
//router.route('/generateAndSaveTicket/:userId').post(generateAndSaveTicket)
router.route('/getAllTickets').get(protect,getAllTickets)
router.route('/verifyPassword').post(protect, verifyPassWordForTicket)
router.route('/scan').post(protect, scan)
router.route('/getTicketById/:ticketId').get(getTicketById)
router.route('/checkToken').get(checkTicket);
router.route('/deleteTicketById/:ticketId').delete(deleteTicketById)
module.exports = router