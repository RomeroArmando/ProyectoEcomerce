const productos = [
    {
        id: "a",
        nombre: "Procesador AMD Ryzen 7 5700G",
        descripcion: "",
        precio: 200,
        categoria: "procesador",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_622790-MLU72699561931_112023-O.webp"
    },
    {
        id: "b",
        nombre: "Gabinete Tecware Nexus M2 Air Mesh",
        descripcion: "",
        precio: 500,
        categoria: "gabinete",
        stock: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_728366-MLU78009563057_072024-O.webp"
    },
    {
        id: "c",
        nombre: "Mouse HyperX Pulsefire Raid",
        descripcion: "",
        precio: 500,
        categoria: "mouse",
        stock: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_917578-MLA44482450051_012021-O.webp"
    },
    {
        id: "d",
        nombre: "Teclado Hyperx Alloy Origins",
        descripcion: "",
        precio: 500,
        categoria: "teclado",
        stock: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_754981-MLU71064960952_082023-O.webp"
    },
    {
        id: "e",
        nombre: "AMD Sentey Gaming Radeon RX 500 Series RX 580",
        descripcion: "",
        precio: 500,
        categoria: "gpu",
        stock: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_672096-MLU74979745109_032024-O.webp"
    },
    {
        id: "f",
        nombre: "Memoria RAM Fury Beast DDR4 8GB Kingston KF432C16BB/8",
        descripcion: "",
        precio: 500,
        categoria: "ram",
        stock: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_805641-MLA74781352069_022024-O.webp"
    }
]

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });
};

export default obtenerProductos