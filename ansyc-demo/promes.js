const p = new Promise((resolve, reject)=>{
    reject(new Error('message'))
})

p.then(resualt=>console.log(resualt)).catch(err=>console.log(err))