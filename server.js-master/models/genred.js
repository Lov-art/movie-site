function Genred (options) {
    this.ID = options.ID;
    this.Name = options.Name;
}

function GenredList (listOptions) {
    this.listGenred = []
}

GenredList.prototype.setGenredList = function (listOptions) {
    if(listOptions instanceof Array){
        for (let index = 0; index < listOptions.length; index++) {
            this.listGenred.push(new Genred(listOptions[index]));
        }
    }
    else throw new Error("Is not array");
}

GenredList.prototype.findGenred = function (index) {
    return this.listGenred.find(x=>x.ID === index);
}

module.exports = GenredList;