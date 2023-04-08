import React, { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Screens from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <Screens />
    </SafeAreaView>
  );
}
