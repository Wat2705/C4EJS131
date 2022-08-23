// Bài tập 1: Viết function nhận params là 1 mảng return về 1 mảng đã được sắp xếp 
// thứ tự ( 5 1 4 2 8 )  –> ( 1 2 4 5 8 )

const params = [5,1,4,2,8];

params.sort(function(a,b) {
    return a - b
});

console.log(params);