const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
    this.title = title;
    }

    save(){
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');
    fs.readFile(p,(err,fileContent,data)=>{
        console.log("heel",fileContent);
        let products =[]
        if(!err) {
            products = JSON.parse(fileContent)
        }
        products.push(this);
        fs.writeFile(p, JSON.stringify(products),(err)=> {
            console.log(err)
        })
    });
    }
    static fetchAll() {
        return [];

    }

}