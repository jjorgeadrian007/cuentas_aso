import  { useState } from 'react';

export default function DashboardAsociacion() {
  // Fondos iniciales heredados (Constante estricta)
  const FONDOS_ANTERIORES = 1783.50;

  // Carga inicial de datos estructurados como objetos
  const [ingresos] = useState([
    { id: 1, fecha: "16/06/2026", nombre: "Aportes Isabel Dávila Junio, Julio, Agosto", valor: 30.00 },
    { id: 2, fecha: "19/06/2026", nombre: "Aportes Darwin Puetate Enero a Junio", valor: 60.00 },
    { id: 3, fecha: "19/06/2026", nombre: "Aportes no socios", valor: 40.00 },
    { id: 4, fecha: "25/06/2026", nombre: "Evento Futbol Ec vs Alem", valor: 75.05 },
    { id: 5, fecha: "01/07/2026", nombre: "Aporte Suarez Espinosa Ivonne (Febrero Marzo 2026)", valor: 20.00 },
    { id: 6, fecha: "01/07/2026", nombre: "Aporte Tonato Zapata John Jairo (Abril, Mayo Junio 2026)", valor: 30.00 },
    { id: 7, fecha: "06/07/2026", nombre: "Ingreso por Cafetería", valor: 56.19 },
    { id: 8, fecha: "21/07/2026", nombre: "Aportes socios Junio", valor: 600.00 },

  ]);

  const [egresos] = useState([
    { id: 1, fecha: "19/06/2026", nombre: "Servilletas (100)", valor: 1.00 },
    { id: 2, fecha: "19/06/2026", nombre: "Recuerdos porta-celulares", valor: 111.00 },
    { id: 3, fecha: "19/06/2026", nombre: "Bebidas", valor: 33.12 },
    { id: 4, fecha: "19/06/2026", nombre: "Fritadas", valor: 252.00 },
    { id: 5, fecha: "19/06/2026", nombre: "Brindis (6 champagne)", valor: 30.00 },
    { id: 6, fecha: "19/06/2026", nombre: "Vasos (100 vasos colereos, 100 brindis)", valor: 2.50 },
    { id: 7, fecha: "19/06/2026", nombre: "Flores", valor: 4.00 },
    { id: 8, fecha: "19/06/2026", nombre: "Chupetes", valor: 2.00 },
    { id: 9, fecha: "19/06/2026", nombre: "Hora loca adornos", valor: 8.00 },
    { id: 10, fecha: "19/06/2026", nombre: "Sonido", valor: 10.00 },
    { id: 11, fecha: "10/07/2026", nombre: "Compra bebidas eleciones (190)", valor: 44.00 },
    { id: 12, fecha: "21/07/2026", nombre: "Devolución aportes cobrados en exceso con corte a Junio (Ali Quishpe)", valor: 98.99 },
    { id: 13, fecha: "21/07/2026", nombre: "Transferencia interbancaria devolución aportes", valor: 0.41 },
    { id: 14, fecha: "21/07/2026", nombre: "Cobro cheque por 2.86 por devolución de cheque Aportes Mayo", valor: 2.86 },

  ]);


  const totalIngresos = ingresos.reduce((sum, item) => sum + item.valor, 0);
  const totalEgresos = egresos.reduce((sum, item) => sum + item.valor, 0);
  const saldoAFavor = FONDOS_ANTERIORES + totalIngresos - totalEgresos;

  return (
    <div 
      className="container-fluid px-4 px-lg-5 py-4 " 
      style={{ 
        backgroundColor: '#ffffff', 
        minHeight: '100vh',
        fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
      }}
    >
      {/* --- MASTHEAD / ENCABEZADO CORPORATIVO --- */}
      <header className="mb-5 pb-3 border-bottom" style={{ borderColor: '#e0e0e0' }}>
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-2">
          <div>
            <span 
              className="text-uppercase text-muted d-block" 
              style={{ fontSize: '12px', letterSpacing: '0.32px', color: '#525252' }}
            >
              Facultad de Filosofía, Letras y Ciencias de la Educación
            </span>
            <h1 className="fw-light m-0 mt-1" style={{ fontSize: '32px', color: '#161616' }}>
              Asociación de Empleados y Trabajadores
            </h1>
          </div>
          <div>
            <span className="text-uppercase text-muted" style={{ fontSize: '12px', letterSpacing: '0.32px' }}>
              Corte de cuentas institucional
            </span>
          </div>
        </div>
      </header>


      <div className="mb-2" style={{ backgroundColor: '#f4f4f4', padding: '24px' }}>
        <div className="row align-items-center g-3">
          <div className="col-md-8">
            <span 
              className="text-uppercase d-block fw-semibold" 
              style={{ fontSize: '12px', letterSpacing: '0.32px', color: '#525252' }}
            >
              Fondos de administración previa
            </span>
            <p className="m-0 mt-2 text-dark" style={{ fontSize: '20px', fontWeight: '300' }}>
              Asociación anterior entregó fondos de: <span className="fw-semibold">${FONDOS_ANTERIORES.toFixed(2)}</span>
            </p>
            <small className="d-block mt-1" style={{ fontSize: '12px', color: '#6f6f6f' }}>
              Corte de caja oficial validado al  lunes 06 de julio de 2026 a las 18:03
            </small>
          </div>
          <div className="col-md-4 text-md-end">
            <a 
              href="/docs/informe.xlsx" 
              download 
              className="btn btn-outline-dark rounded-0 text-uppercase fw-semibold"
              style={{ 
                fontSize: '14px', 
                padding: '14px 24px', 
                letterSpacing: '0.16px',
                borderWidth: '1px'
              }}
            >
              Descargar reporte anterior
            </a>
          </div>
        </div>
      </div>





      <div className="row g-4 mb-5 py-4">
        {/* Bloque Ingresos (Estructura Verde) */}
        <div className="col-md-4">
          <div 
            className="h-100" 
            style={{ 
              backgroundColor: '#f4f4f4', 
              padding: '24px', 
              borderLeft: '4px solid #24a148' 
            }}
          >
            <span 
              className="text-uppercase d-block mb-3" 
              style={{ fontSize: '12px', letterSpacing: '0.32px', color: '#24a148', fontWeight: '600' }}
            >
              Total ingresos actuales
            </span>
            <span className="d-block" style={{ fontSize: '24px', color: '#161616', fontWeight: '400' }}>
              +${totalIngresos.toFixed(2)}
            </span>
          </div>
        </div>




        <div className="col-md-4">
          <div 
            className="h-100" 
            style={{ 
              backgroundColor: '#f4f4f4', 
              padding: '24px', 
              borderLeft: '4px solid #da1e28' 
            }}
          >
            <span 
              className="text-uppercase d-block mb-3" 
              style={{ fontSize: '12px', letterSpacing: '0.32px', color: '#da1e28', fontWeight: '600' }}
            >
              Total egresos actuales
            </span>
            <span className="d-block" style={{ fontSize: '24px', color: '#161616', fontWeight: '400' }}>
              -${totalEgresos.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Bloque Saldo Neto (Estructura IBM Carbon Dark) */}
        <div className="col-md-4">
          <div className="h-100 text-white" style={{ backgroundColor: '#161616', padding: '24px' }}>
            <span 
              className="text-uppercase d-block mb-3" 
              style={{ fontSize: '12px', letterSpacing: '0.32px', color: '#c6c6c6' }}
            >
              Saldo a favor total
            </span>
            <span className="d-block" style={{ fontSize: '24px', fontWeight: '400' }}>
              ${saldoAFavor.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* --- KARDEX DE OBJETOS --- */}
      <div className="row g-5">
        {/* Tabla de Ingresos */}
        <div className="col-lg-6">
          <div className="mb-3 pb-2" style={{ borderBottom: '2px solid #24a148' }}>
            <h2 
              className="text-uppercase m-0" 
              style={{ fontSize: '14px', letterSpacing: '0.16px', color: '#24a148', fontWeight: '600' }}
            >
              Ingresos
            </h2>
          </div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr style={{ fontSize: '12px', color: '#525252', borderBottom: '1px solid #c6c6c6' }}>
                  <th scope="col" className="fw-normal py-2" style={{ width: '25%' }}>Fecha</th>
                  <th scope="col" className="fw-normal py-2">Descripción del objeto</th>
                  <th scope="col" className="fw-normal py-2 text-end" style={{ width: '25%' }}>Valor</th>
                </tr>
              </thead>
              <tbody>
                {ingresos.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0', fontSize: '14px' }}>
                    <td className="py-3" style={{ color: '#525252', fontFamily: 'monospace' }}>{item.fecha}</td>
                    <td className="py-3" style={{ color: '#161616' }}>{item.nombre}</td>
                    {/* El valor individual permanece con el color neutro de datos de la interfaz */}
                    <td className="py-3 text-end" style={{ color: '#161616' }}>${item.valor.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabla de Egresos */}
        <div className="col-lg-6">
          <div className="mb-3 pb-2" style={{ borderBottom: '2px solid #da1e28' }}>
            <h2 
              className="text-uppercase m-0" 
              style={{ fontSize: '14px', letterSpacing: '0.16px', color: '#da1e28', fontWeight: '600' }}
            >
              Egresos
            </h2>
          </div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr style={{ fontSize: '12px', color: '#525252', borderBottom: '1px solid #c6c6c6' }}>
                  <th scope="col" className="fw-normal py-2" style={{ width: '25%' }}>Fecha</th>
                  <th scope="col" className="fw-normal py-2">Descripción del objeto</th>
                  <th scope="col" className="fw-normal py-2 text-end" style={{ width: '25%' }}>Valor</th>
                </tr>
              </thead>
              <tbody>
                {egresos.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0', fontSize: '14px' }}>
                    <td className="py-3" style={{ color: '#525252', fontFamily: 'monospace' }}>{item.fecha}</td>
                    <td className="py-3" style={{ color: '#161616' }}>{item.nombre}</td>
                    {/* El valor individual permanece con el color neutro de datos de la interfaz */}
                    <td className="py-3 text-end" style={{ color: '#161616' }}>${item.valor.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


       {/* --- SECCIÓN DE NOTICIAS E INFORMES --- */}

      <div className="row g-5 mt-2">
        <div className="col-12">
          {/* Encabezado con el acento IBM Blue 60 */}
          <div className="d-flex justify-content-between align-items-center mb-4 pb-2" style={{ borderBottom: '2px solid #0f62fe' }}>
            <h2 
              className="text-uppercase m-0 fw-bold tracking-wider" 
              style={{ fontSize: '14px', color: '#0f62fe' }}
            >
              Noticias e Información Institucional
            </h2>
            <span className="badge bg-light text-muted border rounded-pill fw-normal">Actualizado</span>
          </div>

          {/* Bloque de Noticia Plana (Superficie Gray 10) */}
          <div className="p-4" style={{ backgroundColor: '#f4f4f4' }}>
            <div className="row g-3 align-items-start">
              {/* Columna de Metadatos */}
              <div className="col-md-2">
                <span 
                  className="text-uppercase fw-semibold d-block mb-1" 
                  style={{ fontSize: '11px', letterSpacing: '0.32px', color: '#0f62fe' }}
                >
                  Agradecimiento
                </span>
                <span 
                  style={{ fontSize: '12px', letterSpacing: '0.32px', color: '#6f6f6f', fontFamily: 'monospace' }}
                >
                  17/06/2026
                </span>
              </div>

              {/* Columna de Contenido */}
              <div className="col-md-10">
                <h3 className="h6 fw-semibold text-dark mb-2" style={{ letterSpacing: '0.16px' }}>
                  Reconocimiento a la Gestión y Cooperación Institucional
                </h3>
                <p className="m-0 text-secondary" style={{ fontSize: '14px', lineHeight: '1.50', color: '#525252' }}>
                  La Asociación de Empleados y Trabajadores expresa su sincero agradecimiento a la gestión realizada por la <strong>AsoProfi de la Facultad de Filosofía, Letras y Ciencias de la Educación</strong>, y de manera especial a la <strong>Dra. Jittomy Díaz</strong>, por su valiosa colaboración y apertura para coordinar y hacer posible la recepción efectiva de los aportes mensuales de los socios. Este esfuerzo conjunto fortalece la transparencia y la continuidad financiera de nuestra Asociación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


        <footer className="container-fluid mt-5 px-0">
          {/* Línea divisoria continua de borde a borde */}
          <div style={{ borderTop: '1px solid #e0e0e0', width: '100%' }}></div>
          
          {/* Contenedor del contenido alineado al grid general */}
          <div className="px-4 px-lg-5 py-4 d-flex justify-content-end align-items-center">
            <div className="d-flex align-items-center">
              <span 
                style={{ 
                  fontSize: '12px', 
                  letterSpacing: '0.16px', 
                  color: '#8d8d8d',
                  fontFamily: '"IBM Plex Sans", sans-serif'
                }}
              >
                Elaborado por:&nbsp;
              </span>
              <span 
                className="fw-medium text-dark" 
                style={{ 
                  fontSize: '12px', 
                  letterSpacing: '0.16px',
                  fontFamily: '"IBM Plex Sans", sans-serif'
                }}
              >
                Jorge Santamaría Muñoz
              </span>
            </div>
          </div>
        </footer>

    </div>
    
  );
}