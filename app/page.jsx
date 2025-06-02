'use client';

export default function Page() {
  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-2xl font-bold text-orange-500 mb-4">IATA Dangerous Goods Checklist</h1>

      <p className="text-sm text-gray-500 mb-6">
        For use by KCE Logistics warehouse staff before delivery to airline.
      </p>

      <div className="space-y-6">
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">1. Package Marking / Etiquetado</h2>
          <label className="flex items-start space-x-3">
            <input type="checkbox" className="mt-1" />
            <span>Proper shipping name and address of shipper and consignee / Nombre y dirección del remitente y destinatario</span>
          </label>
          <label className="flex items-start space-x-3 mt-2">
            <input type="checkbox" className="mt-1" />
            <span>UN number, orientation arrows (if required) / Número UN y flechas de orientación (si aplicable)</span>
          </label>
          <textarea placeholder="Observations..." className="mt-3 w-full border rounded p-2 text-sm" rows={2}></textarea>
        </div>

        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">2. Documentation / Documentación</h2>
          <label className="flex items-start space-x-3">
            <input type="checkbox" className="mt-1" />
            <span>Signed shipper's declaration for dangerous goods / Declaración firmada del remitente</span>
          </label>
          <label className="flex items-start space-x-3 mt-2">
            <input type="checkbox" className="mt-1" />
            <span>Air waybill with proper DGR handling info / Guía aérea con información de mercancías peligrosas</span>
          </label>
          <textarea placeholder="Observations..." className="mt-3 w-full border rounded p-2 text-sm" rows={2}></textarea>
        </div>

        <div className="text-right">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl">
            Submit Checklist
          </button>
        </div>
      </div>
    </div>
  );
}