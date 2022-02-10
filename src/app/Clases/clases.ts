export class Cliente {
    clienteId?: number;
    cedRucCliente?: string;
    nombreCliente?: string;
    apellidoCliente?: string;
    telefonoCliente?: string;
    direccionCliente?: string;
    email?: string;
    password?: string;
    estado?: number;
    facturas?: any[];
}

export class Producto {
    num?: number;
    producto_Id?: number;
    producto1?: string;
    precio?: number;
    stock?: number;
    cant?: number;
    total?: number;
    image?: string;
    estado?: number;
}