const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');
const getProductsFromFile = (cb) => {
    fs.readFile(p,(err,fileContent)=>{
        if(err || !fileContent.length) {
        console.log("life sucks and coding fucks sometimes",fileContent.length )
           return cb([])
        }
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Product {
    constructor(title,description, amount) {
        console.log("wtf",title,description,amount);
    this.title = title;
    this.description = description;
    this.amount = amount;
    this.id = Math.trunc(Math.random() * 100);
    }
    save(){
        getProductsFromFile(products => {

    fs.readFile(p,(err,fileContent)=>{

        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err,fileContent)=>{
            console.log(err);
        })
    });
        })
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);

    }
    

}