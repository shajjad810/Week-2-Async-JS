class Rectangle{
    constructor(height, width, color){
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area(){
        const area = this.height * this.width;
        return area;
    }

    paint(){
        console.log(`Painting with color ${this.color}`);
    }


}

const rect = new Rectangle(10, 20, "red");
const area =  rect.area();
rect.paint();
console.log(area);