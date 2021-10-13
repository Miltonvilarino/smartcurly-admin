import { CauseStatus, CauseStep } from "../types/cause";
import { ClientStatus } from "../types/client";
import { DocumentStatus } from "../types/document";
import { PaymentStatus, PaymentKind } from "../types/payment";

export const documentStatusColors = {
  [DocumentStatus.reproved]: "#f8c4c4",
  [DocumentStatus.analyze]: "#ffe8d8",
  [DocumentStatus.aproved]: "#e0f0d6",
};

export const documentStatusTranslated = {
  [DocumentStatus.reproved]: "Reprovado",
  [DocumentStatus.analyze]: "Em análise",
  [DocumentStatus.aproved]: "Aprovado",
};

export const paymentStatusTranslated = {
  [PaymentStatus.WAITING]: "Aguardando",
  [PaymentStatus.ERROR]: "Error",
  [PaymentStatus.CONFIRMED]: "Confirmado",
};

export const paymentKindTranslated = {
  [PaymentKind.BOLETO]: "Boleto",
  [PaymentKind.CREDIT_CARD]: "Cartão",
};

export const statusColors = {
  [CauseStatus.pending]: "#f8c4c4",
  [CauseStatus.pending_generation]: "#f8c4c4",
  [CauseStatus.pending_subscription]: "#f8c4c4",
  [CauseStatus.analyze]: "#ffe8d8",
  [CauseStatus.concluded]: "#e0f0d6",
};

export const clientStatusColors = {
  [ClientStatus.reproved]: "#f8c4c4",
  [ClientStatus.pending]: "#f8c4c4",
  [ClientStatus.analyze]: "#ffe8d8",
  [ClientStatus.confirmed]: "#e0f0d6",
};

export const stepColors = {
  [CauseStep.contract]: null,
  [CauseStep.execution]: null,
  [CauseStep.payment]: null,
  [CauseStep.documentation]: "#e0f0d6",
};

export const stepTranslated = {
  [CauseStep.contract]: "Contrato",
  [CauseStep.execution]: "Execução",
  [CauseStep.payment]: "Pagamento",
  [CauseStep.documentation]: "Documentacão",
};
export const statusTranslated = {
  [CauseStatus.pending]: "Pendente",
  [CauseStatus.pending_generation]: "Pendente de Geração",
  [CauseStatus.pending_subscription]: "Pendente de assinatura",
  [CauseStatus.analyze]: "Em Análise",
  [CauseStatus.concluded]: "Concluido",
  [ClientStatus.confirmed]: "Confirmado",
  [ClientStatus.reproved]: "Reprovado",
};
