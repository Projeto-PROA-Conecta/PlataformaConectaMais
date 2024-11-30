/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, SelectField, Text } from "@aws-amplify/ui-react";
export default function PhoneNumberFieldlargefalsefalsequiet(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="column"
      width="300px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PhoneNumberFieldlargefalsefalsequiet")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Label"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "InputGroup")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="0px 12px 0px 0px"
          {...getOverrideProps(overrides, "Input")}
        >
          <SelectField
            width="110px"
            height="unset"
            shrink="0"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "SelectField")}
          ></SelectField>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(128,128,128,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Placeholder"
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
        </Flex>
        <Icon
          width="unset"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
          paths={[
            {
              d: "M0 0L300 0L300 -1L0 -1L0 0Z",
              stroke: "rgba(137,148,159,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "border")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
