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
export declare type Cadastro4OverridesProps = {
    Cadastro4?: PrimitiveOverrideProps<ViewProps>;
    Vector40241050?: PrimitiveOverrideProps<IconProps>;
    Vector40241051?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    "undraw_profile_pic_re_iwgo 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 59"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 104"?: PrimitiveOverrideProps<IconProps>;
    "undraw_male_avatar_g98d 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector40241058?: PrimitiveOverrideProps<IconProps>;
    Vector40241059?: PrimitiveOverrideProps<IconProps>;
    Vector40241060?: PrimitiveOverrideProps<IconProps>;
    Vector40241061?: PrimitiveOverrideProps<IconProps>;
    Vector40241062?: PrimitiveOverrideProps<IconProps>;
    "Group 42"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "EditIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector40241067?: PrimitiveOverrideProps<IconProps>;
    "logo_branca_conecta 1"?: PrimitiveOverrideProps<ImageProps>;
    Button40241069?: PrimitiveOverrideProps<ButtonProps>;
    Button40241070?: PrimitiveOverrideProps<ButtonProps>;
    Button40241071?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Cadastro4Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: Cadastro4OverridesProps | undefined | null;
}>;
export default function Cadastro4(props: Cadastro4Props): React.ReactElement;
