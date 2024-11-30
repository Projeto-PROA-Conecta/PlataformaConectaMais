/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Cadastro1OverridesProps = {
    Cadastro1?: PrimitiveOverrideProps<ViewProps>;
    Vector40211818?: PrimitiveOverrideProps<IconProps>;
    Vector40211819?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    "Group 42"?: PrimitiveOverrideProps<ViewProps>;
    "AvatarPerfil 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "EditIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector4022836?: PrimitiveOverrideProps<IconProps>;
    "logo_branca_conecta 1"?: PrimitiveOverrideProps<ImageProps>;
    Button40211828?: PrimitiveOverrideProps<ButtonProps>;
    Button40211829?: PrimitiveOverrideProps<ButtonProps>;
    Button40211830?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Cadastro1Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: Cadastro1OverridesProps | undefined | null;
}>;
export default function Cadastro1(props: Cadastro1Props): React.ReactElement;
