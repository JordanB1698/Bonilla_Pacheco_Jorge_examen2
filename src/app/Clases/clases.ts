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


export class Factura {
    num: number;
    id_Fact: number;
    fecha: Date;
    id_Cliente: number;
    cliente: string;
    total: number;
    subtotal: number;
    iva: number;
}

export class ResponseModel {
    mensaje?: any;
    info: any[];
}