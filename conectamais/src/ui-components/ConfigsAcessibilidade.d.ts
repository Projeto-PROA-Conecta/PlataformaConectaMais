/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ConfigsAcessibilidadeOverridesProps = {
    ConfigsAcessibilidade?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    Acessibilidade38511991?: PrimitiveOverrideProps<TextProps>;
    Vector38511998?: PrimitiveOverrideProps<IconProps>;
    NavBarHeaderConecta?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Vector38512001?: PrimitiveOverrideProps<IconProps>;
    Vector38512002?: PrimitiveOverrideProps<IconProps>;
    Vector38512003?: PrimitiveOverrideProps<IconProps>;
    Vector38512004?: PrimitiveOverrideProps<IconProps>;
    "Group 482"?: PrimitiveOverrideProps<ViewProps>;
    "Group 471"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "Group 76"?: PrimitiveOverrideProps<ViewProps>;
    "Assist\u00EAncia com IA"?: PrimitiveOverrideProps<TextProps>;
    thumb?: PrimitiveOverrideProps<ViewProps>;
    "Desativar Anima\u00E7\u00F5es"?: PrimitiveOverrideProps<TextProps>;
    Temas?: PrimitiveOverrideProps<TextProps>;
    Button38512019?: PrimitiveOverrideProps<FlexProps>;
    Button38512020?: PrimitiveOverrideProps<FlexProps>;
    "ThemeIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512023?: PrimitiveOverrideProps<IconProps>;
    Divider38512026?: PrimitiveOverrideProps<ViewProps>;
    Divider38512027?: PrimitiveOverrideProps<ViewProps>;
    "Group 481"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 205"?: PrimitiveOverrideProps<ViewProps>;
    Divider38512030?: PrimitiveOverrideProps<ViewProps>;
    Divider38512031?: PrimitiveOverrideProps<ViewProps>;
    Vector38512032?: PrimitiveOverrideProps<IconProps>;
    Vector38512033?: PrimitiveOverrideProps<IconProps>;
    Vector38512034?: PrimitiveOverrideProps<IconProps>;
    Divider38512035?: PrimitiveOverrideProps<ViewProps>;
    Vector38512036?: PrimitiveOverrideProps<IconProps>;
    Acessibilidade38512037?: PrimitiveOverrideProps<TextProps>;
    "Acesso e Seguran\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Apar\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "Notifica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ConfigsAcessibilidadeProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsAcessibilidadeOverridesProps | undefined | null;
}>;
export default function ConfigsAcessibilidade(props: ConfigsAcessibilidadeProps): React.ReactElement;
