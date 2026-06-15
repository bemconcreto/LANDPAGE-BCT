const CEREBRO_API_URL = process.env.CEREBRO_API_URL ?? "https://cerebro.bemconcreto.com";

export const DOCUMENTO_CATEGORIA_LABELS = {
  matricula: "Matrícula",
  contratos: "Contratos",
  tokenizacao: "Tokenização",
  relatorios: "Relatórios",
  auditorias: "Auditorias",
};

export const DOCUMENTO_CATEGORIAS = [
  { key: "matricula", label: "Matrícula" },
  { key: "contratos", label: "Contratos" },
  { key: "tokenizacao", label: "Tokenização" },
  { key: "relatorios", label: "Relatórios" },
  { key: "auditorias", label: "Auditorias" },
];

export async function getImoveis() {
  try {
    const res = await fetch(`${CEREBRO_API_URL}/api/public/imoveis`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("Erro ao buscar imóveis do CEREBRO", err);
    return [];
  }
}

export async function getImovel(slug) {
  try {
    const res = await fetch(`${CEREBRO_API_URL}/api/public/imoveis/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Erro ao buscar imóvel do CEREBRO", err);
    return null;
  }
}

export function formatReal(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value || 0);
}

export function getRoiInfo(imovel) {
  const value =
    imovel.roiRealizado ??
    imovel.roiProjetado ??
    Math.round((imovel.valorizacaoAcumulada || 0) * 100);
  const label =
    imovel.roiRealizado != null
      ? `ROI realizado: ${value}%`
      : imovel.roiProjetado != null
      ? `ROI projetado: ${value}%`
      : `ROI: ${value}%`;
  return { value, label };
}
