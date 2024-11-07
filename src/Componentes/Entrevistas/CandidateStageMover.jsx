import React from 'react';
import { supabase } from '../../supabase/supabase.config';

const CandidateStageMover = ({ candidate, programStages, idOferta, setCandidatos, setFilteredCandidatos, setCandidatosNoAuth }) => {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const moveCandidateToStage = async (etapa) => {
    // Actualizar estado para CandidatosNoAuth
    const { error: updateNoAuthError } = await supabase
      .from('CandidatosNoAuth')
      .update({ estado_etapas: etapa })
      .eq('id_oferta', idOferta)
      .eq('dni', candidate.dni);

    if (updateNoAuthError) {
      console.error('Error al mover candidato a CandidatosNoAuth:', updateNoAuthError);
    } else {
      setCandidatosNoAuth(prev => prev.map(c => c.dni === candidate.dni ? { ...c, estado_etapas: etapa } : c));
      setFilteredCandidatos(prev => prev.map(c => c.dni === candidate.dni ? { ...c, estado_etapas: etapa } : c));
    }

    // Actualizar estado para Postulacion
    const { error: updatePostulacionError } = await supabase
      .from('Postulacion')
      .update({ estado_etapas: etapa })
      .eq('id_oferta', idOferta)
      .eq('dni', candidate.dni);

    if (updatePostulacionError) {
      console.error('Error al mover candidato a Postulacion:', updatePostulacionError);
    } else {
      setCandidatos(prev => prev.map(c => c.dni === candidate.dni ? { ...c, estado_etapas: etapa } : c));
      setFilteredCandidatos(prev => prev.map(c => c.dni === candidate.dni ? { ...c, estado_etapas: etapa } : c));
    }
  };

  return (
    <div className="bg-white rounded-lg border p-6 mb-2">
      <h3 className="text-lg font-medium">{candidate.name_user || candidate.nombre}</h3>
      <p className="text-sm text-gray-500">DNI: {candidate.dni}</p>
      <p className="text-sm text-gray-500 mt-1">Celular: {candidate.telefono}</p>
      <p className="text-sm text-gray-500">Fecha: {formatDate(candidate.fecha_postulacion || candidate.fecha)}</p>

      <select
        className="mt-2 bg-blue-500 text-white rounded px-2 py-1"
        onChange={(e) => moveCandidateToStage(e.target.value)}
      >
        <option value="">Selecciona una etapa</option>
        <option value="Ninguna">Ninguna</option>
        {programStages.map((etapa, idx) => (
          <option key={idx} value={etapa.etapa}>{etapa.etapa}</option>
        ))}
      </select>
    </div>
  );
};

export default CandidateStageMover;