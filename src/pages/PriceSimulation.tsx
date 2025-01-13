import React, { useState } from 'react';
import { Save, Eye, EyeOff } from 'lucide-react';

interface Installment {
  number: number;
  date: string;
  payment: number;
  amortization: number;
  interest: number;
  balance: number;
}

function PriceSimulation() {
  const [financingAmount, setFinancingAmount] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [operationDate, setOperationDate] = useState('');
  const [firstPaymentDate, setFirstPaymentDate] = useState('');
  const [months, setMonths] = useState('');
  const [monthlyRate, setMonthlyRate] = useState('');
  const [yearlyRate, setYearlyRate] = useState('');
  const [bank, setBank] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showInstallments, setShowInstallments] = useState(true);
  const [installments, setInstallments] = useState<Installment[]>([]);
  const [totals, setTotals] = useState({ payment: 0, amortization: 0, interest: 0 });

  // ... rest of the state and handlers remain the same ...

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tabela Price</h2>
        <p className="text-gray-600">
          Simule seu financiamento utilizando a Tabela Price, 
          onde as parcelas são fixas e iguais durante todo o período do financiamento.
        </p>
      </div>

      {/* Input Data Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6 space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-100">
            Dados do Financiamento
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            {/* ... existing input fields ... */}
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Calcular
          </button>
        </div>
      </div>

      {showResults && (
        <>
          {/* Summary Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 pb-4 border-b border-gray-100 mb-6">
                Resumo do Financiamento
              </h3>
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-600 font-medium mb-1">Valor Total</p>
                  <p className="text-lg font-semibold text-gray-900">{formatCurrency(totals.payment)}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <p className="text-sm text-red-600 font-medium mb-1">Total de Juros</p>
                  <p className="text-lg font-semibold text-gray-900">{formatCurrency(totals.interest)}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <p className="text-sm text-green-600 font-medium mb-1">Total Amortizado</p>
                  <p className="text-lg font-semibold text-gray-900">{formatCurrency(totals.amortization)}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <p className="text-sm text-purple-600 font-medium mb-1">Primeira Parcela</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {installments.length > 0 ? formatCurrency(installments[0].payment) : '-'}
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <p className="text-sm text-orange-600 font-medium mb-1">Última Parcela</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {installments.length > 0 ? formatCurrency(installments[installments.length - 1].payment) : '-'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Resultado da Simulação</h3>
                <div className="space-x-2">
                  <button
                    onClick={handleSaveSimulation}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <Save size={16} className="mr-2" />
                    Salvar Simulação
                  </button>
                  <button
                    onClick={toggleInstallments}
                    className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    {showInstallments ? (
                      <>
                        <EyeOff size={16} className="mr-2" />
                        Ocultar Parcelas
                      </>
                    ) : (
                      <>
                        <Eye size={16} className="mr-2" />
                        Exibir Parcelas
                      </>
                    )}
                  </button>
                </div>
              </div>

              {showInstallments && (
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    {/* ... existing table content ... */}
                  </table>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PriceSimulation;