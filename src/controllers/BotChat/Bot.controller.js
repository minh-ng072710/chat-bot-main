let Layout_BOT = (req, res) => {
    res.render("Bot_Infor.ejs");
};
let Get_Parrams_Form_Bot = (req, res) => {
    res.send({
        obj: {
            Custumer_Name: req.query.name,
            Phone: req.query.phone,
            Address_Deli: req.query.address_deli,
            Product_Quantity: req.query.product_quantity,
            Size: req.query.size,
            Note: req.query.note,
            Payments: req.query.payment,
            Code: req.query.code,
        }
    })
}
module.exports = {
    Layout_BOT: Layout_BOT,
    Get_ALL_Parrams: Get_Parrams_Form_Bot,
}
