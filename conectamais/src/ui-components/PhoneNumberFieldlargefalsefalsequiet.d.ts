/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, SelectFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PhoneNumberFieldlargefalsefalsequietOverridesProps = {
    PhoneNumberFieldlargefalsefalsequiet?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    InputGroup?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    border?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type PhoneNumberFieldlargefalsefalsequietProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PhoneNumberFieldlargefalsefalsequietOverridesProps | undefined | null;
}>;
export default function PhoneNumberFieldlargefalsefalsequiet(props: PhoneNumberFieldlargefalsefalsequietProps): React.ReactElement;
