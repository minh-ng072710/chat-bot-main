let connect = require("../config/Connect_DB")
var mongoose = require('mongoose');

var ObjectId = require('mongodb').ObjectID;
const Find_Infor_Order = async function (id) {
    // id = ["5b03966a1acd4d5bbd67239c", "5b03966a1acd4d5bbd67239c", "5b03966a1acd4d5bbd67239c", "3"]
    // var new_id = []
    // id.forEach(_id => {
    //     new_id.push(_id)
    // })
    // console.log("id: " + new_id)
    const con = await connect.connectDB()
    var all_infor = []
    var new_id_1 = deduplicate(id)
    console.log(new_id_1)
    for (let i = 0; i <= new_id_1.length; i++) {
        if (i == new_id_1.length) {

            return all_infor
        }
        else {
            let pro = await con.collection('Product').findOne({ _id: ObjectId(new_id_1[i]) })
            all_infor.push(pro);
        }

    }

    // console.log("new_id: " + new_id_1)
    // var all_infor = [];


    // const con = await connect.connectDB()
    // // var tam;
    // for (let i = 0; i <= id.length; i++) {

    //     if (i == id.length) {

    //         return all_infor
    //     }
    //     else {
    //         if (id[i] === tam) {
    //             console.log("trunng roi")

    //         } else {
    //             console.log("tamp: " + tam + "id: " + id[i])
    //             let pro = await con.collection('Product').findOne({ _id: id[i] })

    //             all_infor.push(pro);
    //             console.log(pro._id)
    //             tam = pro._id
    // //         }



    //     }


    // }

}
// function checkdup(arr) {

//     let arr2 = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr2.length == 0) {
//             arr2.push(arr[0]);

//         }
//         else {
//             for (let j = 0; j < arr2.length; j++) {
//                 if (arr[i] != arr2[j]) {
//                     console.log(i + "." + arr[i])
//                     arr2.push(arr[i])
//                 }
//             }
//         }

//     }
//     console.log("arrr222: " + arr2)
//     return arr2
// }
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

    let array_size = []
    // console.log("All Data: " + JSON.stringify(alldata))
    // console.log("Size: " + List_ID_Product + "type off size: " + typeof List_ID_Product)

    for (var i = 0; i < Size.length; i++) {

        for (var j = 0; j < alldata.length; j++) {
            // // console.log("alldata" + alldata[j])
            if (alldata[j] === null) {
                alldata.splice(j, 1);
                // console.log("Phan tu bi loai: " + spliced)
            } else {
                for (var k = 0; k < alldata[j].variants.length; k++) {
                    if (Size[i] == alldata[j].variants[k].code) {
                        await array_size.push({
                            _Id_Product: alldata[j]._id,

                            Name_Product: alldata[j].product_name,
                            Product_Size: alldata[j].variants[k]
                        })
                    }
                }
            }

        }
    }
    // console.log("Aray size: " + JSON.stringify(array_size))
    return {
        orderline: array_size,
        item_from_bot: item
    }

}



module.exports = {
    Find_Infor_Order: Find_Infor_Order,
    check: check
};
