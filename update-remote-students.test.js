


const updateRemoteStudents = require("./update-remote-students")



describe("Update remote students",()=>{
    test("Returns empty array with empty argument",()=>{
        expect(updateRemoteStudents([])).toEqual([])
    })
    test("Returns a new object",()=>{
        const myArr=[
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Tao', age: 47, location: 'manchester' }
]
    expect(updateRemoteStudents(myArr)).not.toBe(myArr)
    expect(updateRemoteStudents(myArr)).toEqual(myArr)
    })
    test("If location is missing in the object, create location as remote",()=>{
        const myArr=[
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 },
  { name: 'Tao', age: 47, location: 'manchester' }
]
    expect(updateRemoteStudents(myArr)).toEqual([
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22, location: 'remote' },
  { name: 'Tao', age: 47, location: 'manchester' }
])
    })
    test("Original Array not mutated",()=>{
        const myArr=[{ name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 },
  { name: 'Tao', age: 47, location: 'manchester' }]
        const myArrClone=[{ name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 },
  { name: 'Tao', age: 47, location: 'manchester' }]


updateRemoteStudents(myArr)
        expect(myArr).toEqual(myArrClone)
    })
    test("Same input returns same output",()=>{
        const myArr=[{ name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 },
  { name: 'Tao', age: 47, location: 'manchester' }]
        const myArr2=[{ name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 },
  { name: 'Tao', age: 47, location: 'manchester' }]

        const updatedarr=updateRemoteStudents(myArr)
        const updated2arr=updateRemoteStudents(myArr)
        const updatedarr2=updateRemoteStudents(myArr2)
        const updated2arr2=updateRemoteStudents(myArr2)

    expect(updatedarr).toEqual(updated2arr)
    expect(updated2arr).toEqual(updatedarr2)
    expect(updatedarr2).toEqual(updated2arr2)
    })
})
