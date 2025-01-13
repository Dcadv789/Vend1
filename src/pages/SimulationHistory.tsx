import React from 'react';
import { History } from 'lucide-react';

function SimulationHistory() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Histórico de Simulações</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-8">
          <History size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500">
            Nenhuma simulação realizada ainda.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SimulationHistory;