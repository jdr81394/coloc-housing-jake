import { ItemInterface } from "../Interfaces/ItemInterface"

const dummyJsonData : ItemInterface[] = [{
    name: "item1",
    id: 0
},
{
    name: "item2",
    id: 1
},
{
    name: "item2",
    id: 2
}
]

export const getLists = async() => {
    // normally await some kind of response and handle any errors 
    return dummyJsonData
}

export const postLists = async(item: ItemInterface) => {
    dummyJsonData.push(item)
    return dummyJsonData
}