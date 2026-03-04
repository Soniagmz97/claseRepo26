interface InfoProps {
  nombre: string;
  especialidad: string;
  experiencia: number;
}

export function InfoBasica({ nombre, especialidad, experiencia }: InfoProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500">
      <h2 className="text-2xl font-bold text-gray-800">{nombre}</h2>
      <p className="text-indigo-600 font-medium">{especialidad}</p>
      <p className="text-gray-500 text-sm mt-2">{experiencia} años de experiencia</p>
    </div>
  );
}