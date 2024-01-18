
// // Hàm để tạo mảng 2 chiều ngẫu nhiên từ 13 đến 27
// function createRandomArray(rows, cols) 
// {
//     var randomArray = [];

//     for (var i = 0; i < n; i++) {
//         var row = [];
//         for (var j = 0; j < n; j++) {
//             // Tạo giá trị ngẫu nhiên từ 13 đến 27
//             var randomValue = Math.floor(Math.random() * (27 - 13 + 1)) + 13;
//             row.push(randomValue);
//         }
//         randomArray.push(row);
//     }

//     return randomArray;
// }

// // Nhập kích thước của mảng từ người dùng
// var n = parseInt(prompt("Nhap n:"))


// // Tạo mảng 2 chiều ngẫu nhiên
// var resultArray = createRandomArray(n, n);

// // In mảng kết quả vào console (bạn có thể thay đổi phương thức in ra tùy thuộc vào môi trường chạy)
// console.table(resultArray);
// // Hàm tính tổng 4 số 
// function calculateSurroundingSum(resultArray, rowIndex, colIndex) 
// {
//     var sum = 0;

//     // Kiểm tra xem có thể tính tổng được không
//     if (
//         rowIndex - 1 >= 0 && // kiểm tra hàng trên
//         rowIndex + 1 < resultArray.length && // kiểm tra hàng dưới
//         colIndex - 1 >= 0 && // kiểm tra cột bên trái
//         colIndex + 1 < resultArray[0].length // kiểm tra cột bên phải
//     ) {
//         // Tính tổng của 4 số xung quanh
//         sum += resultArray[rowIndex - 1][colIndex]; // số phía trên
//         sum += resultArray[rowIndex + 1][colIndex]; // số phía dưới
//         sum += resultArray[rowIndex][colIndex - 1]; // số bên trái
//         sum += resultArray[rowIndex][colIndex + 1]; // số bên phải
//     }

//     return sum;
// }

// // Chọn một vị trí cụ thể trong mảng (ví dụ: hàng 1, cột 2)
// var selectedRow = parseInt(prompt("Nhap so dong:"));
// var selectedCol = parseInt(prompt("Nhap so cot:"));

// // Tính tổng của 4 số xung quanh số đã chọn
// var surroundingSum = calculateSurroundingSum(resultArray, selectedRow, selectedCol);

// // In kết quả vào console (bạn có thể thay đổi phương thức in ra tùy thuộc vào môi trường chạy)
// console.log("Tổng của 4 số xung quanh là: " + surroundingSum);
