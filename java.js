//creating needed canvases
const canvasbag = document.getElementById("canvasbag");
const ctx = canvasbag.getContext("2d");
const canvasmap = document.getElementById("canvasmap");
const ctm = canvasmap.getContext("2d");
//creating needed variables
var x = 750;
var nx = 750;
var y = 325;
var ny = 325;
var cx = 0;
var cy = 0;
var tx = 0 ;
var ty = 0;
var item = 0;
var initail = 0;
let para;
//loading sounds
var walk = new Audio("sounds/walk.wav");
var chest = new Audio("sounds/chest.wav");
var slice = new Audio("sounds/slice.wav");
var wall = new Audio("sounds/wall.wav");
var slimespawn = new Audio("sounds/slimespawn.wav");
var pickup = new Audio("sounds/pickup.wav");
//preloading image for canvas
var Player = new Image();
Player.src = "images/player.png";
var Bow = new Image();
Bow.src = "images/bow.png";
var Sword = new Image();
Sword.src = "images/sword.png";
var Chestclosed = new Image();
Chestclosed.src = "images/chest.png";
var Chestopen = new Image();
Chestopen.src = "images/chestopen.png";
var Enemy = new Image();
Enemy.src = "images/slime.png";
//trigger when page loads
window.onload = function(){
    if(document.getElementById("b1")){
        ctm.drawImage(Player, x, y);
    }
    else{
        //allows for changing sotry text
        para = document.getElementById("story").innerHTML;
        document.getElementById("story").innerHTML = "Press here to scout room";
        //hide buttons at start
        for (let element of document.getElementsByClassName("button1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("button2")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("button3")){
            element.style.display="none";
        }
    //gets varaibles from previous page and if no previous page sets them as default
        x =  sessionStorage.getItem("x");
        if (x == null){
            x = 750;
        }
        y =  sessionStorage.getItem("y");
        if (y == null){
            y = 325;
        }
        nx =  sessionStorage.getItem("nx");
        if (nx == null){
            nx = 750;
        }
        ny = sessionStorage.getItem("ny");
        if (ny == null){
            ny = 325;
        }
        //calculates distance for each move
        cx = +nx - +x;
        cx = +cx/10;
        cy = +ny - +y;
        cy = +cy/ 10;
        //draws initail position
        ctm.drawImage(Player, x, y);
        //draws each step of movement using distance
    
        document.getElementById("story").addEventListener("click",function(){//makes sure sounds can play and then used to sync up timing
            if(initail == 0){
                for (let i = 1; i < 11;i++){
                    setTimeout(function(){
                        tx=+x + +cx*i;
                        ty=+y + +cy*i;
                        ctm.clearRect(0, 0, canvasmap.width, canvasmap.height);
                        ctm.drawImage(Player,tx, ty);
                        walk.play();
                    },i*1000);
                }
                //saves x and y values on the new current position
                setTimeout(function(){
                    sessionStorage.setItem("x",nx);
                    sessionStorage.setItem("y",ny);
                },10000);
                //dispalys buttons once inital animation is done
                setTimeout(function(){
                    for (let element of document.getElementsByClassName("button1")){
                        element.style.display = "initial";
                    }
                    for (let element of document.getElementsByClassName("button2")){
                        element.style.display = "initial";
                    }
                    for (let element of document.getElementsByClassName("button3")){
                        element.style.display = "initial";
                    }
                    document.getElementById("story").innerHTML = para;
                },10000);
            initail = 1;
            };
        });
    };
    
    //checks if button exists and on click saves new nx and ny targets to move to
    if(document.getElementById("b1")){
    document.getElementById("b1").addEventListener("click",function(){
        sessionStorage.setItem("nx",965);
        sessionStorage.setItem("ny",325);
    });
    };
    if(document.getElementById("b2")){
    document.getElementById("b2").addEventListener("click",function(){
        sessionStorage.setItem("nx",1180);
        sessionStorage.setItem("ny",325);
    });
    };
    if(document.getElementById("b3")){
    document.getElementById("b3").addEventListener("click",function(){
        sessionStorage.setItem("nx",1395);
        sessionStorage.setItem("ny",325);
    });
    };
    if(document.getElementById("b4")){
    document.getElementById("b4").addEventListener("click",function(){
        sessionStorage.setItem("nx",535);
        sessionStorage.setItem("ny",325);
    });
    };
    if(document.getElementById("b5")){
    document.getElementById("b5").addEventListener("click",function(){
        sessionStorage.setItem("nx",535);
        sessionStorage.setItem("ny",190);
    });
    };
    if(document.getElementById("b6")){
    document.getElementById("b6").addEventListener("click",function(){
        sessionStorage.setItem("nx",535);
        sessionStorage.setItem("ny",55);
    });
    };
    if(document.getElementById("b7")){
    document.getElementById("b7").addEventListener("click",function(){
        sessionStorage.setItem("nx",965);
        sessionStorage.setItem("ny",190);
    });
    };
    if(document.getElementById("b8")){
    document.getElementById("b8").addEventListener("click",function(){
        sessionStorage.setItem("nx",1180);
        sessionStorage.setItem("ny",190);
    });
    };
    if(document.getElementById("b9")){
    document.getElementById("b9").addEventListener("click",function(){
        sessionStorage.setItem("nx",320);
        sessionStorage.setItem("ny",325);
    });
    };
    if(document.getElementById("b10")){
    document.getElementById("b10").addEventListener("click",function(){
        sessionStorage.setItem("nx",320);
        sessionStorage.setItem("ny",190);
    });
    };
    //on click resets saved values
    if(document.getElementById("death")){
        document.getElementById("death").addEventListener("click",function(){
            sessionStorage.setItem("x",750);
            sessionStorage.setItem("y",325);
            sessionStorage.setItem("item",0);
    });
    };
    //page 2 trap
    if(document.getElementById("b3")){
        document.getElementById("story").addEventListener("click",function(){
            if(initail == 1){
                ctm.fillStyle= "#703901";
                setTimeout(function(){
                    document.getElementById("death").style.display = "none";
                    for (let i = 1; i < 11;i++){
                        setTimeout(function(){
                            ctm.fillRect(0,0,1530,i*42);
                            wall.play();
                            if(i == 10){
                                document.getElementById("b3").style.display = "none";
                                document.getElementById("b8").style.display = "none";
                                document.getElementById("death").style.display = "initial";
                                document.getElementById("story").innerHTML = "Looks like your indecisiveness got you killed." + "<br>" + "maybe make a choice quicker next time?" + "<br>" + "But at least you can’t get much lower than this!"
                            };
                        },i*1000);
                    };
                },10000);
                initail = 2;
            };
        });
    };
    //page 4 chest selecting item
    if(document.getElementById("b9")){
        document.getElementById("story").addEventListener("click",function(){
            if(initail == 1){
                setTimeout(function(){
                    document.getElementById("b9").style.display = "none";
                    document.getElementById("b5").style.display = "none";
                    document.getElementById("bsword").addEventListener("click",function(){
                        pickup.play();
                        document.getElementById("b9").style.display = "initial";
                        document.getElementById("b5").style.display = "initial";
                        document.getElementById("bbow").style.display = "none";
                        document.getElementById("bsword").style.display = "none";
                        sessionStorage.setItem("item","1");
                        ctx.clearRect(0, 0, canvasbag.width, canvasbag.height);
                        ctx.drawImage(Sword, 50, 100);
                        ctm.clearRect(0, 0, canvasmap.width, canvasmap.height);
                        ctm.drawImage(Player,nx, ny);
                        document.getElementById("story").innerHTML = "You place the sword into your backpack" + "<br>" + "You decided its best not to stand still for too long and look to the next two entrances"
                        + "<br>" + "To your left you see a dim room with an absence of anything noticeable on the floor" + "<br>" + "Up ahead you notice a rather bright room in contrast to previous rooms which allows you to get a good glimpse of the slime monster waiting ahead"
                        + "<br>" + "Choose Left or Up?";

;
                    });
                    document.getElementById("bbow").addEventListener("click",function(){
                        pickup.play();
                        document.getElementById("b9").style.display = "initial";
                        document.getElementById("b5").style.display = "initial";
                        document.getElementById("bbow").style.display = "none";
                        document.getElementById("bsword").style.display = "none";
                        sessionStorage.setItem("item","2");
                        ctx.clearRect(0, 0, canvasbag.width, canvasbag.height);
                        ctx.drawImage(Bow, 60, 100);
                        ctm.clearRect(0, 0, canvasmap.width, canvasmap.height);
                        ctm.drawImage(Player,nx, ny);
                        document.getElementById("story").innerHTML = "You place the bow into your backpack" + "<br>" + "You decided its best not to stand still for too long and look to the next two entrances"
                        + "<br>" + "To your left you see a dim room with an absence of anything noticeable on the floor" + "<br>" + "Up ahead you notice a rather bright room in contrast to previous rooms which allows you to get a good glimpse of the slime monster waiting ahead"
                        + "<br>" + "Choose Left or Up?";


                    });
                    //chest animation
                    ctm.drawImage(Chestclosed, 570, 85);
                    setTimeout(function(){
                        chest.play();
                        ctm.clearRect(0, 0, canvasmap.width, canvasmap.height);
                        ctm.drawImage(Player,nx, ny);
                        ctm.drawImage(Chestopen, 570, 25);
                        ctm.drawImage(Sword, 1058, 146);
                        ctm.drawImage(Bow, 308, 125);
                    },1000);
                },10000);
            initail = 2;
            };
        });
        
    };  
    //item loading
    item = sessionStorage.getItem("item");
    if(item == "1"){
        ctx.drawImage(Sword, 50, 100);
    };
    if(item == "2"){
        ctx.drawImage(Bow, 60, 100);
    };
    //page 5 combat
    if(document.getElementById("battack")){
        document.getElementById("story").addEventListener("click",function(){
            if(initail == 1){
                setTimeout(function(){
                document.getElementById("b10").style.display = "none";
                document.getElementById("b6").style.display = "none";
                document.getElementById("death").style.display = "none";
                ctm.fillStyle = "#2f3e46";
                ctm.fillRect(0,0,1530,420);
                ctm.drawImage(Enemy, 540, 50);
                slimespawn.play();
                },10000);
                document.getElementById("battack").addEventListener("click",function(){
                    document.getElementById("battack").style.display = "none";
                    //attack animation
                    slice.play()
                    for (let i = 0; i < 6;i++){
                        setTimeout(function(){
                        ctm.fillStyle = "#e81717";
                        if (i== 1 ||i == 2||i == 3 ||i == 4){
                            ctm.fillStyle = "#9c091f";
                        };
                        ctm.fillRect(865-(i*50),50+(i*50) ,50,50);
                        if(i == 0||i == 1||i == 2||i == 3||i == 4){   
                            ctm.fillStyle = "#e81717";
                            ctm.fillRect(815-(i*50),50+(i*50) ,50,50);
                            ctm.fillRect(865-(i*50),100+(i*50) ,50,50);
                        }
                        },i*90);
                    };
                    //win
                    if( item == 1){
                        document.getElementById("b10").style.display = "initial";
                        document.getElementById("b6").style.display = "initial";
                        document.getElementById("story").innerHTML = "You go to attack the slime." + "<br>" + "putting all your power behind the swing you manage to take it out in one shot!" + "<br>" + "Not wanting to see if it will reform you quicky look at your next options." 
                        + "<br>" + "To the Left a room lit by a fireplace and what seems to be a dining set." + "<br>" + "or Up a fully golden chest possibly the loot the slime was protecting." + "<br>" + "Choose wisely!"
                        setTimeout(function(){
                            ctm.clearRect(0, 0, canvasmap.width, canvasmap.height);
                            ctm.drawImage(Player,nx, ny);
                        },1000);
                    }
                    else
                    //loss
                    {
                        document.getElementById("death").style.display = "initial";
                        document.getElementById("story").innerHTML = "You Shoot your arrow straight at the slime." + "<br>" + "But the arrow passes straight through the slime doing no harm."
                        + "<br>" + "And within an instant the slime as dealt you the final blow!" + "<br>" + "Maybe next life you'll have a knack for bow's instead of swords?"

                    };
                }); 
        initail = 2;
        };
        
    });
};     

};

