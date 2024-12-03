/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type Cadastro3OverridesProps = {
    Cadastro3?: PrimitiveOverrideProps<ViewProps>;
    Vector4007780?: PrimitiveOverrideProps<IconProps>;
    Vector4007781?: PrimitiveOverrideProps<IconProps>;
    Group4007782?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    "undraw_profile_pic_re_iwgo 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 59"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 104"?: PrimitiveOverrideProps<IconProps>;
    Group4007788?: PrimitiveOverrideProps<ViewProps>;
    Vector4007789?: PrimitiveOverrideProps<IconProps>;
    Vector4007790?: PrimitiveOverrideProps<IconProps>;
    Vector4007791?: PrimitiveOverrideProps<IconProps>;
    Vector4007792?: PrimitiveOverrideProps<IconProps>;
    Vector4007793?: PrimitiveOverrideProps<IconProps>;
    Vector4007794?: PrimitiveOverrideProps<IconProps>;
    Vector4007795?: PrimitiveOverrideProps<IconProps>;
    "Group 42"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "EditIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector4022839?: PrimitiveOverrideProps<IconProps>;
    "logo_branca_conecta 1"?: PrimitiveOverrideProps<ImageProps>;
    Button4007801?: PrimitiveOverrideProps<ButtonProps>;
    Button40181392?: PrimitiveOverrideProps<ButtonProps>;
    Button40181397?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Cadastro3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Cadastro3OverridesProps | undefined | null;
}>;
export default function Cadastro3(props: Cadastro3Props): React.ReactElement;
