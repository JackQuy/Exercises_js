$(document).ready(function() {

    // ===================== Ex_1 ===========================
    sort = () => {
        var str = document.getElementById("strin").value;
        // var len = str.length;
        // var list_array = [];
        // for (var i = 0; i < len; i++) {
        //     list_array[i] = str.charAt(i); //có thể thêm .toString()
        // }
        document.getElementById("show_strin").innerText = str.split("").sort().join("");
    };

    // ===================== Ex_2 ===========================
    upperCaseFirst = () => {
        var str = document.getElementById("strin_2").value;
        str = str.trim();
        var sub_str = str.split(" ");
        var len = sub_str.length;
        var text, strin = "";
        for (var i = 0; i < len; i++) {
            text = sub_str[i].trim();
            strin += (text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase() + " ");
        }
        document.getElementById("show_strin2").innerText = strin;
        // var sum = + "234" + + "234";
        // alert(sum);
    };

    // ===================== Ex_3 ===========================
    sumArray = () => {
        var str_1 = document.getElementById("array_2-1").value;
        var str_2 = document.getElementById("array_2-2").value;
        var array_1 = str_1.split(",");
        var array_2 = str_2.split(",");
        var min_len, dem = 0;
        if(str_1.length <= str_2.length) {
            min_len = array_1.length;
            dem = 1;
        } else {
            min_len = array_2.length;
            dem = 2;
        }
        var sum_array = [];
        for (var i = 0; i < min_len; i++) {
            sum_array[i] = + array_1[i] + + array_2[i];
        }
        
        if (dem == 1) {
            for (var i = min_len; i < array_2.length; i++) {
                sum_array[i] = array_2[i];
            }
        } else if (dem == 2) {
            for (var i = min_len; i < array_1.length; i++) {
                sum_array[i] = array_1[i];
            }
        }
        document.getElementById("show_strin3").innerText = sum_array.join(",");
    }

    // ===================== Ex_4 ===========================
    var checkArray = function() {
        var listArray = [NaN, 0, 15, false, -22, '',undefined, 47, null];
        var len = listArray.length;
        for (var i = 0; i < len; i++) {
            if(!Number.isInteger(listArray[i])) {
                listArray.splice(i, 1);
            }
        }
        console.log(listArray.toString());
    }
    checkArray();

    // ===================== Ex_5 ===========================
    var getKeysArray = function() {
        var Student = {
            name : "David Rayy",
            sclass : "VI",
            rollno : 12
        };
        console.log("Sample Output: " + Object.keys(Student).toString());
    }
    getKeysArray();


    // ===================== Ex_6 ===========================
    var subArrayString = function(str) {
        var len = str.length;
        var subArray = [], dem = 0;
        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j <= len; j++) {
                subArray[dem] = str.slice(i, j);
                dem++;
            }
        }
        console.log(subArray.join(" - "));
    }
    subArrayString("dog");
});