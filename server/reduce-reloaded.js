const items = [1,3,2,3,3,1,10,100]

const result = items.reduce((obj,item)=>{
    if (!obj[item]) {
        obj[item] = 1
    }else {
        obj[item] = obj[item] + 1
    }
    return obj
},{})

console.log('result : ' , result);

/*
*   output
const items = [1,3,2,3]
{
    1:1,
    3:2,
    2:1
}
*/

const data = [
    {
        name:"Jesus",
        lvl:"low"
    },
    {
        name:"Lourdes",
        lvl:"medium"
    },
    {
        name:"Jaime",
        lvl:"hight"
    },
    {
        name:"Xabi",
        lvl:"low"
    },
]
const result2 = data
    .map(item => item.lvl)
    .reduce((obj,item)=>{
        if (!obj[item]) {
            obj[item] = 1
        }else {
            obj[item] = obj[item] + 1
        }
        return obj
    },{})

    console.log('result2: ', result2);