var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
var bees = { character: "Bees" };
var piglet = { character: "Piglet" };
var robin = { character: "Christopher Robin" };
var owl = { character: "Owl" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };

tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object

pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;

bees.west = pooh;
bees.north = rabbit;

piglet.east = pooh;
piglet.north = owl;

owl.south = piglet;
owl.east = robin;

robin.west = owl;
robin.north = kanga;
robin.east = rabbit;
robin.south = pooh;

rabbit.west = robin;
rabbit.south = bees;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore
