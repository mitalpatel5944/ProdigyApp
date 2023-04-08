import React, { useState } from "react";
import { Text, View } from "react-native";

const HomeScreen = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "black" }}>Home</Text>
    </View>
  );
};

export default HomeScreen;
