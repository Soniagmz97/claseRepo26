import { useState } from "react"

const Suscripcion = () => {
    const [Premium, setPremium] = useState(false)

  return (
    <div className="p-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg border text-center space-y-4">

        <h2 className="text-xl font-bold">Estado</h2>
        
        <div className={`p-4 rounded-lg transition-all flex justify-center items-center gap-2 
            ${Premium ? 'bg-yellow-400 text-yellow-900' : 'bg-gray-200 text-gray-600'}`}
            >
            {Premium ? (<span className="font-bold text-lg">Cuenta Pro Activa 👑</span>) : (<span className="font-semibold">Actualiza a Pro</span>)}
        </div>

        <button 
            className={`px-6 py-2 rounded-full font-bold text-white transition-all 
                ${Premium ? 'bg-slate-500 hover:bg-slate-600' : 'bg-indigo-600 hover:bg-indigo-700'}`} 
            onClick={() => setPremium(!Premium)}
        >
            {Premium ? "Cancelar Suscripción" : "Mejorar a Premium"}
        </button>

    </div>
  )
}

export default Suscripcion