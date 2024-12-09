/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConfigsNotificacoesOverridesProps = {
    ConfigsNotificacoes?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "Group 480"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 205"?: PrimitiveOverrideProps<ViewProps>;
    Divider38511938?: PrimitiveOverrideProps<ViewProps>;
    Divider38511939?: PrimitiveOverrideProps<ViewProps>;
    Vector38511940?: PrimitiveOverrideProps<IconProps>;
    Vector38511941?: PrimitiveOverrideProps<IconProps>;
    Vector38511942?: PrimitiveOverrideProps<IconProps>;
    Divider38511943?: PrimitiveOverrideProps<ViewProps>;
    Vector38511944?: PrimitiveOverrideProps<IconProps>;
    Acessibilidade?: PrimitiveOverrideProps<TextProps>;
    "Acesso e Seguran\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Apar\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "Notifica\u00E7\u00E3o38511948"?: PrimitiveOverrideProps<TextProps>;
    NavBarHeaderConecta?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Vector38511951?: PrimitiveOverrideProps<IconProps>;
    Vector38511952?: PrimitiveOverrideProps<IconProps>;
    Vector38511953?: PrimitiveOverrideProps<IconProps>;
    Vector38511954?: PrimitiveOverrideProps<IconProps>;
    Vector38511961?: PrimitiveOverrideProps<IconProps>;
    SwitchField38511962?: PrimitiveOverrideProps<FlexProps>;
    "Notifica\u00E7\u00E3o38511969"?: PrimitiveOverrideProps<TextProps>;
    "lock_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "Contrata\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    "Posts e coment\u00E1rios"?: PrimitiveOverrideProps<TextProps>;
    SwitchField38511975?: PrimitiveOverrideProps<FlexProps>;
    "Novos seguidores"?: PrimitiveOverrideProps<TextProps>;
    Mensagens?: PrimitiveOverrideProps<TextProps>;
    Vagas?: PrimitiveOverrideProps<TextProps>;
    "N\u00E3o Peturbe"?: PrimitiveOverrideProps<TextProps>;
    Divider38511984?: PrimitiveOverrideProps<ViewProps>;
    Divider38511985?: PrimitiveOverrideProps<ViewProps>;
    Divider38511986?: PrimitiveOverrideProps<ViewProps>;
    Divider38511987?: PrimitiveOverrideProps<ViewProps>;
    Divider38511988?: PrimitiveOverrideProps<ViewProps>;
    SwitchField38531836?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField38531843?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField38531855?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField38531849?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField38531856?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField38531867?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ConfigsNotificacoesProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsNotificacoesOverridesProps | undefined | null;
}>;
export default function ConfigsNotificacoes(props: ConfigsNotificacoesProps): React.ReactElement;
