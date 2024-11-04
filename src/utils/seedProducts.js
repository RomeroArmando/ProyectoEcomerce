import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"

const productos = [
    {
        id: "a",
        nombre: "top de encaje",
        descripcion: "top de encaje",
        precio: 5312,
        categoria: "Top",
        //en el caso de tener mas de una catagoria podes usar map {objeto} o array {array} en firebase
        stock: 10,
        imagen: "img/top/top_de_encaje.jpg"
    //sirven las rutas tantos para imagenes locales y externas 
    },
    {
        id: "b",
        nombre: "top algodón",
        descripcion: "top algodón",
        precio: 5135,
        categoria: "Top",
        stock: 2,
        imagen: "public/img/top/top_algodón.jpeg"
    },
    {
        id: "c",
        nombre: "Top animal print",
        descripcion: "",
        precio: 5607,
        categoria: "Top",
        stock: 2,
        imagen: "../../public/img/top/Top_animal_print.jpeg"
    },
    {
        id: "d",
        nombre: "falda corta",
        descripcion: "",
        precio: 5903,
        categoria: "Polleras",
        stock: 2,
        imagen: "../../public/img/Polleras/falda_corta.jpg"
    },
    {
        id: "e",
        nombre: "poller mini denim",
        descripcion: "",
        precio: 8854,
        categoria: "Polleras",
        stock: 2,
        imagen: "../../public/img/Polleras/mini_pollera_denim.jpg"
    },
    {
        id: "f",
        nombre: "mini engomado",
        descripcion: "",
        precio: 4899,
        categoria: "Polleras",
        stock: 2,
        imagen: "../../public/img/Polleras/mini_engomado.webp"
    },
    {
        id: "g",
        nombre: "falda tul",
        descripcion: "",
        precio: 7555,
        categoria: "Polleras",
        stock: 2,
        imagen: "../../public/img/Polleras/falda_tul.jpeg"
    },
    {
        id: "h",
        nombre: "short moms",
        descripcion: "",
        precio: 4722,
        categoria: "Shorts",
        stock: 2,
        imagen: "../../public/img/Shorts/short_moms.jpeg"
    },
    {
        id: "i",
        nombre: "remera morley corte v",
        descripcion: "",
        precio: 4014,
        categoria: "Remeras",
        stock: 2,
        imagen: "../../public/img/Remeras/remera_morley_cortev.jpg"
    },
    {
        id: "j",
        nombre: "remera algodón",
        descripcion: "",
        precio: 5017,
        categoria: "Remeras",
        stock: 2,
        imagen: "../../public/img/Remeras/remera _algodón.jpg"
    },
    {
        id: "k",
        nombre: "Blusa lino plus size",
        descripcion: "",
        precio: 5548,
        categoria: "Remeras",
        stock: 2,
        imagen: "../../public/img/Remeras/Blusa _lino_plus_size.jpeg"
    },
    {
        id: "l",
        nombre: "bluzita lino",
        descripcion: "",
        precio: 5785,
        categoria: "Remeras",
        stock: 2,
        imagen: "../../public/img/Remeras/bluzita_lino.jpeg"
    },
    {
        id: "m",
        nombre: "musculosa morley",
        descripcion: "",
        precio: 4014,
        categoria: "Musculosas",
        stock: 2,
        imagen: "../../public/img/Musculosa/musculosa_morley.jpeg"
    },
    {
        id: "n",
        nombre: "musculosa metalizada",
        descripcion: "",
        precio: 4014,
        categoria: "Musculosas",
        stock: 2,
        imagen: "../../public/img/Musculosa/musculosa_metalizada.webp"
    },
    {
        id: "o",
        nombre: "blazer",
        descripcion: "",
        precio: 8500,
        categoria: "Abrigos",
        stock: 2,
        imagen: "../../public/img/Abrigos/blazer.jpeg"
    },
    {
        id: "p",
        nombre: "new in denim",
        descripcion: "",
        precio:  13931,
        categoria: "Abrigos",
        stock: 2,
        imagen: "../../public/img/Abrigos/new_in_denim.webp"
    },
    {
        id: "q",
        nombre: "blazer lino",
        descripcion: "",
        precio: 16765,
        categoria: "Abrigos",
        stock: 2,
        imagen: "../../public/img/Abrigos/blazer_lino.jpg"
    },
    {
        id: "r",
        nombre: "wide leg multicargo",
        descripcion: "",
        precio: 14521,
        categoria: "Jeans",
        stock: 2,
        imagen: "../../public/img/Jeans/wide_leg_multicargo.jpeg"
    },
    {
        id: "s",
        nombre: "jeans pluz size",
        descripcion: "",
        precio: 11806,
        categoria: "Jeans",
        stock: 2,
        imagen: "../../public/img/Jeans/jeans_pluz_size.JPG"
    },
    {
        id: "t",
        nombre: "wide leg pint",
        descripcion: "",
        precio: 10035,
        categoria: "Jeans",
        stock: 2,
        imagen: "../../public/img/Jeans/wide_leg_pint.webp"
    },
    {
        id: "u",
        nombre: "Wide leg plus size",
        descripcion: "",
        precio: 12396,
        categoria: "Jeans",
        stock: 2,
        imagen: "../../public/img/Jeans/Wide_leg_plus_size.jpeg"
    },
    {
        id: "v",
        nombre: "seat tul",
        descripcion: "",
        precio:  8028,
        categoria: "Conjuntos",
        stock: 2,
        imagen: "../../public/img/Conjuntos/seat_tul.jpeg"
    },
    {
        id: "w",
        nombre: "Body plus size",
        descripcion: "",
        precio: 5843,
        categoria: "Conjuntos",
        stock: 2,
        imagen: "../../public/img/Conjuntos/Body_plus_size.jpeg"
    },
    {
        id: "x",
        nombre: "chomba modal",
        descripcion: "",
        precio: 3541,
        categoria: "Chombas",
        stock: 2,
        imagen: "../../public/img/Chombas/chomba_modal.jpeg"
    },
    {
        id: "y",
        nombre: "vestido morley",
        descripcion: "",
        precio: 10094,
        categoria: "Vestidos",
        stock: 2,
        imagen: "../../public/img/Vestidos/vestido_morley.jpeg"
    },
    {
        id: "z",
        nombre: "mini bag cartera",
        descripcion: "",
        precio: 10094,
        categoria: "Carteras",
        stock: 2,
        imagen: "../../public/img/Carteras/mini_bag_cartera.jpg"
    },
    {
        id: "aa",
        nombre: "camisas",
        descripcion: "",
        precio: 4250,
        categoria: "Camisas",
        stock: 2,
        imagen: "../../public/img/Camisas/camisa.jpg"
    },
    {
        id: "ab",
        nombre: "camisas plus size",
        descripcion: "",
        precio: 4250,
        categoria: "Camisas",
        stock: 2,
        imagen: "../../public/img/Camisas/camisas_plus_size.jpeg"
    } 
]

const seedProducts = () => {

    productos.map( ( {id, ...rest } ) =>{

        const productosRef = collection(db, "productos")
        addDoc(productosRef, rest)
         
    })

    console.log("productos subidos correctamente")

}

//import img from "../../public/img/Abrigos/"

seedProducts()
