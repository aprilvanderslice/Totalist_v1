class ListItemDO{
    constructor(){
        this.name;
        this.cost;
        this.store;
        this.quantity;
        this.imageSource;
        this.idNumber;
        this.isComplete;
    }

    getTotalCost() {
        if(this.cost && this.quantity ) {

            return Number(this.cost * this.quantity);
        } else {
            console.error("get total cost called with no cost and quantity",this.cost, this.quantity);
            return 0;
        } 
    }

    

    
}