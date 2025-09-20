const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", price:"$1000", Image: "https://e7.pngegg.com/pngimages/789/503/png-clipart-rog-strix-scar-edition-gaming-laptop-gl503-rog-phone-republic-of-gamers-computex-laptop-electronics-netbook.png"}, //objetos, el titulo son atributos
    { titulo: "Mouse", desc: "wireless", price: "$20", image: "https://png.pngtree.com/png-vector/20241227/ourlarge/pngtree-cute-mouse-holding-a-gift-spreading-joy-and-holiday-spirit-effortlessly-png-image_14919271.png" },
    { titulo: "Keyborard", desc: "Wired", price: "$50", image: "https://w7.pngwing.com/pngs/38/977/png-transparent-computer-keyboard-computer-mouse-gaming-keypad-computer-cases-housings-backlight-computer-mouse-electronics-computer-keyboard-computer.png" } ,
    { titulo: "Sreen", desc: "LED", price: "$200", image: "https://dlcdnwebimgs.asus.com/gain/98c2391e-b168-48b5-bc9c-ac2c1dd429ba/w800" },
    { titulo: "CPU", desc: "x86/x64", price: "$500", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/AVADirect-Custom-X99-Intel-Core-i7-gaming-cpu.png" }
    
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".price").textContent = producto.price;
    clon.querySelector(".image").textContent = producto.image;
    contenedor.appendChild(clon);
});
