import  { useState } from 'react';

export default function DashboardAsociacion() {
  // Fondos iniciales heredados (Constante estricta)
  const FONDOS_ANTERIORES = 1783.50;

  // Carga inicial de datos estructurados como objetos
  const [ingresos] = useState([
    { id: 1, fecha: "16/06/2026", nombre: "Aportes Isabel Dávila Junio, Julio, Agosto", valor: 30.00 },

  ]);

  const [egresos] = useState([
    { id: 1, fecha: "16/06/2026", nombre: "Compra de insumos", valor: 0.00 },

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




      <div className="mb-5" style={{ backgroundColor: '#f4f4f4', padding: '24px' }}>
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
              Corte de caja oficial validado al  martes 09 de junio de 2026 a las 8:03
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




      <div className="row g-4 mb-5">
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
    </div>
  );
}