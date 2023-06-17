/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function BoardComponent(props) {
  const { board, overrides, ...rest } = props;
  return (
    <View
      width="508px"
      height="178px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "BoardComponent")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="275px"
        height="75px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.message}
        {...getOverrideProps(overrides, "message")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.363636016845703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="272px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="99px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.name}
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.363636016845703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="272px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="132px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.createdAt}
        {...getOverrideProps(overrides, "createdAt")}
      ></Text>
      <Image
        width="200px"
        height="150px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="14px"
        left="297px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={board?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
