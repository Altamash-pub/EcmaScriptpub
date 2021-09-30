const cubicArray=(data)=>{
    const newArr=[];
      data.forEach(item => {
        //   const cube=(Math.pow(item, 3)) "math pow method for cubing"
        const cube= item**3;
        newArr.push(cube);
    });
    return newArr;
}
console.log(cubicArray([2,4,5,7]));