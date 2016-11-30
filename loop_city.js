for (var count = 0; count < 100; count++){
	console.log(count);
}

var animalCount = null
for (count = 0; count <=  5; count++){
	console.log(count, "there are " + count + " many animals in noah's arc ");
}


var partyAnimals = ["lion","zebra","cow","deer","nuke"]
for (animals = 0; animals < 5; animals++){
	console.log(partyAnimals[animals] + " is savage");
}

var waepunChast = ["Masse", "Soorusu Sutone", "Kirito"]
var heero = {
	weebzard: "Myleen",
	waepun: waepunChast[1],
	POWAH: 30,
}
function shmoto (hammahdolo){
	if (heero.waepun == "Soorusu Sutone"){
		console.log(heero.weebzard + " shall slay teh Dragoon wit " + heero.waepun);
	}
	else {
		console.log(heero.weebzard + "is ready for war with the" + heero.waepun);
	}
}

shmoto(heero.waepun)