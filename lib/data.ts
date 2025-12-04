export interface StoreData {
    id: string;
    name: string;
    image: string;
    status: "Abierto" | "Cerrado";
    category: string;
    level: string;
    schedule: { week: string; weekend: string };
    description: string;
    logo?: string;
    mapCoordinates?: { level: number; x: number; y: number };
}

export const STORES: StoreData[] = [
    {
        id: "tonny-pizza",
        name: "Tonny Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
        status: "Abierto",
        category: "Alimentos y bebidas",
        level: "Nivel -2",
        schedule: { week: "10:00 - 20:00", weekend: "10:00 - 19:00" },
        description: "Auténtica pizza napolitana con ingredientes frescos y masa madre fermentada por 48 horas.",
        mapCoordinates: { level: -2, x: 250, y: 550 }
    },
    {
        id: "roots-toys",
        name: "Roots Toys",
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=600&auto=format&fit=crop",
        status: "Abierto",
        category: "Niños y Juguetes",
        level: "Nivel -2",
        schedule: { week: "10:00 - 20:00", weekend: "10:00 - 19:00" },
        description: "Juguetes de madera y materiales sustentables que fomentan la creatividad y el aprendizaje libre.",
        mapCoordinates: { level: -2, x: 350, y: 500 }
    },
    {
        id: "el-florista",
        name: "El Florista",
        image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=600&auto=format&fit=crop",
        status: "Abierto",
        category: "Flores y Jardinería",
        level: "Nivel -2",
        schedule: { week: "10:00 - 20:00", weekend: "10:00 - 19:00" },
        description: "Arreglos florales únicos y plantas de interior para dar vida a tus espacios.",
        mapCoordinates: { level: -2, x: 450, y: 600 }
    },
    {
        id: "snog",
        name: "SNOG",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
        status: "Abierto",
        category: "Moda y accesorios",
        level: "Nivel -2",
        schedule: { week: "10:00 - 20:00", weekend: "10:00 - 19:00" },
        description: "Diseño independiente y moda vanguardista con un enfoque en la sostenibilidad.",
        mapCoordinates: { level: -2, x: 300, y: 650 }
    },
    {
        id: "museo-garment",
        name: "Museo Garment",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop",
        status: "Abierto",
        category: "Moda y accesorios",
        level: "Nivel -2",
        schedule: { week: "10:00 - 20:00", weekend: "10:00 - 19:00" },
        description: "Ropa masculina clásica con un toque moderno, confeccionada con los mejores materiales.",
        mapCoordinates: { level: -2, x: 400, y: 550 }
    },
    {
        id: "creado-en-chile",
        name: "Creado en Chile",
        image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=600&auto=format&fit=crop",
        status: "Abierto",
        category: "Arte y Manualidades",
        level: "Nivel -2",
        schedule: { week: "10:00 - 20:00", weekend: "10:00 - 19:00" },
        description: "Una curaduría de lo mejor del diseño chileno: decoración, accesorios, gourmet y más.",
        mapCoordinates: { level: -2, x: 500, y: 500 }
    },
    {
        id: "ojo-por-ojo",
        name: "Ojo por Ojo",
        image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?q=80&w=600&auto=format&fit=crop",
        status: "Abierto",
        category: "Moda y accesorios",
        level: "Nivel -2",
        schedule: { week: "10:00 - 20:00", weekend: "10:00 - 19:00" },
        description: "Anteojos de diseño y lentes de contacto con la mejor tecnología y estilo.",
        mapCoordinates: { level: -2, x: 280, y: 480 }
    },
    {
        id: "the-plant-store",
        name: "The Plant Store",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop",
        status: "Abierto",
        category: "Flores y Jardinería",
        level: "Nivel -2",
        schedule: { week: "10:00 - 20:00", weekend: "10:00 - 19:00" },
        description: "Todo para tu jungla urbana: plantas, maceteros, sustratos y asesoría experta.",
        mapCoordinates: { level: -2, x: 480, y: 620 }
    },
    {
        id: "pan-leon",
        name: "Pan León",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
        status: "Abierto",
        category: "Alimentos y bebidas",
        level: "Nivel -2",
        schedule: { week: "09:00 - 20:00", weekend: "09:00 - 19:00" },
        description: "Panadería artesanal de barrio. Pan de masa madre, bollería y café de especialidad.",
        mapCoordinates: { level: -2, x: 380, y: 580 }
    },
];
