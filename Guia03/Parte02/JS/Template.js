const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", price:"$1000", image: "https://www.tuexperto.com/wp-content/uploads/2012/12/M5-3.jpg"}, //objetos, el titulo son atributos
    { titulo: "Mouse", desc: "wireless", price: "$20", image: "https://img.freepik.com/foto-gratis/raton-morado-ordenador_1260-11.jpg?semt=ais_incoming&w=740&q=80" },
    { titulo: "Keyborard", desc: "Wired", price: "$50", image: "https://www.invidcomputers.com/images/000000000041235733790scorpion-k8-sin-fondo.png" } ,
    { titulo: "Sreen", desc: "LED", price: "$200", image: "https://dlcdnwebimgs.asus.com/gain/98c2391e-b168-48b5-bc9c-ac2c1dd429ba/w800" },
    { titulo: "CPU", desc: "x86/x64", price: "$500", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/AVADirect-Custom-X99-Intel-Core-i7-gaming-cpu.png" }
    
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".price").textContent = producto.price;
    clon.querySelector(".image").src = producto.image;
    contenedor.appendChild(clon);
});
