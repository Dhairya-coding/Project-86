var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

var background_change = [Image_birthday.jpg,birthday_image2,birthday_image3,birthday_image4];
random_number = Math.floor(Math.random() * 4);

 bg_img = background_change[random_number];

 function add() {
    new_bg = new Image();
    new_bg.onload = upload_bg;
    new_bg.src=bg_img;
}

function upload_bg() {
    ctx.drawImage(new_bg,0,0,canvas.width,canvas.height);
}

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(img) {
        block_image_object = img ;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    } ) 
	
}

function playSound(){
	x.play();
}