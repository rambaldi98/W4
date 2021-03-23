function Hero (img, top, left, size) {
    this.img = img;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return `<img width = "${this.size}"
                    height = "${this.size}"
                    src = "${this.img}" 
                    style = "top : ${this.top}px;
                            left : ${this.left}px;
                            position : absolute;"
            
            />`;
    }

    this.moveRight = function() {
        this.left += 50;
    }

    this.moveLeft = function() {
        this.left -= 50;
    }
    this.moveBotton = function() {
        this.top += 50;
    }

    this.moveTop = function() {
        this.top -= 50;
    }
}

let a = new Hero("./img/pikachu.png",20,30,200);
document.getElementById('game').innerHTML = a.getHeroElement();
function move(evt) {
   
   
        // a.moveBotton();
    
    switch(evt.which) {
        case 37:
            if(a.left >= 0)
            a.moveLeft();
            break;
        case 38 :
            if(a.top >= 0)
            a.moveTop();
            break;
        case 39 : 
        if(a.left < window.innerWidth - a.size)
            a.moveRight()
            break;
        case 40: 
        if(a.top < window.innerHeight - a.size)
            a.moveBotton();
            break;
    }
//    setTimeout(start1,500);
document.getElementById('game').innerHTML = a.getHeroElement();
}
function docReady() {
    window.addEventListener('keydown',move);
    
}
