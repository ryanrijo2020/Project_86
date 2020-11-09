var canvas=new fabric.Canvas("myCanvas");
var playerx=30;
var playery=20;
var block_width=30;
var block_height=30;
var player_image="";
var block_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_image=Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(150);
        player_image.set({
            top:playery,left:playerx
        });
        canvas.add(player_image);
    });

}
function newImage(get_image) {
fabric.Image.fromURL(get_image,function (Img){
block_object=Img;
block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({top:playery,left:playerx});
canvas.add(block_object);
});
}
window.addEventListener("keydown",my_keydown);