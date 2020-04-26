let connect = require("../config/Connect_DB")
var mongoose = require('mongoose');
const Find_Infor_Order = async function (id) {
    const con = await connect.connectDB()
    var all_infor = []
    var new_id_1 = deduplicate(id)
    var all_infor_new
    for (let i = 0; i <= new_id_1.length; i++) {
        if (i == new_id_1.length) {
            all_infor_new = getUnique(all_infor, 'product_name')
            console.log("độ dài mảng:" + all_infor_new.length)

            return all_infor_new
        }
        else {
            let pro = await con.collection('Product').findOne({ "variants.product_id": parseInt(new_id_1[i]) })
            all_infor.push(pro);
        }
    }
}
function getUnique(arr, comp) {
    const unique = arr
        .map(e => e[comp])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);
    return unique;
}
function deduplicate(arr) {
    let isExist = (arr, x) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === x) return true;
        }
        return false;
    }
    let ans = [];
    arr.forEach(element => {
        if (!isExist(ans, element)) ans.push(element);
    });
    return ans;
}
const check = async (alldata, item, ID_Product, Size, Quantity) => {
    var array_pro_id = []
    // console.log("all dta " + JSON.stringify(alldata))
    alldata.forEach(item1 => {
        item1.variants.forEach(item2 => {
            array_pro_id.push(item2.product_id)
        })
    })
    let array_size = []
    for (var i = 0; i < Size.length; i++) {
        for (var j = 0; j < alldata.length; j++) {
            if (alldata[j] === null) {
                alldata.splice(j, 1);
                // console.log("Phan tu bi loai: " + spliced)
            } else {
                for (var k = 0; k < alldata[j].variants.length; k++) {
                    if (Size[i] == alldata[j].variants[k].product_id) {
                        await array_size.push({
                            _Id_Product: alldata[j]._id,
                            Name_Product: alldata[j].product_name,
                            Product_Size: Size[i],
                            Code: alldata[j].variants[k].code,
                            Price: alldata[j].variants[k].price,
                            Val: alldata[j].variants[k].val
                        })
                    }
                }
            }
        }
    }
    return {
        orderline: array_size,
        item_from_bot: item
    }
}
module.exports = {
    Find_Infor_Order: Find_Infor_Order,
    check: check
};
