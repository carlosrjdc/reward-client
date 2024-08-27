export default function Rules() {
  const listRules = [
    "Você recebe 20 pontos com sua primeira compra",
    "Os pontos expiram após 8 meses",
    "Para cada 10 Reais gasto, você recebe 500 pontos.",
    "Cada compra ganha um mínimo de 50 pontos e um máximo de 50.000 pontos",
  ];
  return (
    <div>
      <h3 className="font-bold text-xl mb-2">Regras e Condições</h3>
      {listRules.map((rule, index) => (
        <div key={index} className="flex text-sm gap-2 items-center">
          <span className="text-primary">•</span>
          <span>{rule}</span>
        </div>
      ))}
    </div>
  );
}
