import React, { useState } from "react";
import { Button, SectionList, StyleSheet, Text, View, Platform } from "react-native";

const dataModel = { text: "HELLO WORLD" };

const PizzaTranslator = () => {
  const [data, setData] = useState([dataModel]);
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 50,
    },
    item: {
      color: Platform.OS === "ios" ? "purple" : "blue",
      fontSize: 14,
    },
    heading: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });

  const SectionListDataModel = [
    { title: "Header 1", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 2", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 3", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 4", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 5", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 6", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 7", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 8", data: ["a s desne strane", "mene vise ne bude"] },

    { title: "Header 9", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 11", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 12", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 13", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 14", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 15", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 16", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 17", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 18", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 19", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 20", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 21", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 22", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 23", data: ["a s desne strane", "mene vise ne bude"] },
    { title: "Header 24", data: ["nova jutra", "kad te snenu", "probude"] },
    { title: "Header 25", data: ["a s desne strane", "mene vise ne bude"] },
  ];

  const increaseElementCount = () => setData((curr) => [...curr, dataModel]);

  return (
    <View style={styles.container}>
      <SectionList
        sections={SectionListDataModel}
        renderSectionHeader={({ section }) => <Text style={styles.heading}>{section.title}</Text>}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
      <Button onPress={increaseElementCount} title="Add Element to the flatlist" />
    </View>
  );
};

export default PizzaTranslator;
