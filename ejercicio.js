console.log("Ejercicio");

const proceso = {
    numero: 12,
    descripcion: "Proceso de gestion de polizas de seguros de autos",
    polizas: [
        {numero: 1, dni: 31242, precio: 5000, patente: "AA123FF"},
        {numero: 2, dni: 234523, precio: 3000, patente: "AB123FF"},
        {numero: 3, dni: 3546, precio: 4000, patente: "AC123FF"},
        {numero: 4, dni: 363546, precio: 5000, patente: "AA423FF"},
        {numero: 5, dni: 31242, precio: 5000, patente: "AB223FF"},
        {numero: 6, dni: 31242, precio: 5000, patente: "AC123FF"},
    ],
    reclamos: [
        {numero: 1, descReclamo: "Choque", estadoResolucion: false, numeroPoliza: 5},
        {numero: 2, descReclamo: "Granizo", estadoResolucion: false, numeroPoliza: 4},
        {numero: 3, descReclamo: "Robo", estadoResolucion: true, numeroPoliza: 1},
    ],
    reclamosConcluidos: [],

    // Todas las polizas con reclamo y estado Resolucion en false
    // Tiempo estimado: 10 minutos
    buscarPoliza: (numeroPoliza) => {
        let c = 0;
        let encontrado = undefined;
    
        while(c < proceso.polizas.length && encontrado == undefined){
            if(numeroPoliza === proceso.polizas.numero){
                encontrado = proceso.polizas[c];
            }else{
                c++;
            }
        }
        return encontrado;
    
    },

    polizasConReclamo() {
        const rta = []
        for(i = 0; i < this.reclamos.length; i++){
            if(this.reclamos[i].estadoResolucion === false){
                rta.push(this.buscarPoliza(this.reclamos[i].numeroPoliza));
            }
        }

        return rta;
    },
    // Pasar reclamos con estadoResolucion true a reclamosConcluidos
    // Tiempo estimado 10 minutos

    buscarReclamo(){
        let c = 0;
        let encontrados = [];

        while(c < this.reclamos.length && encontrado == undefined){
            if(this.reclamos[c].estadoResolucion){
                encontrados.push(this.reclamos[c])
            }else{
                c++;
            }
        }
        return encontrados;

    },
    
    pasarEstadoResolucionAterminado() {
        let c = 0;
        let encontrado = false;

        while(c < this.reclamos.length && !encontrado){
            if(this.reclamos[c].estadoResolucion){
                encontrado = true;
                this.reclamosConcluidos.push(this.reclamos[c]);
                this.reclamos.splice(c,c);
            }else{
                c++;
            }
        }
    }





}

console.log(proceso);
console.log(proceso.reclamos);
console.log(proceso.polizasConReclamo());
proceso.pasarEstadoResolucionAterminado();