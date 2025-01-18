import React, { useState } from "react";
import { Button, SectionList, StyleSheet, Text, View } from "react-native";

const dataModel = { text: "HELLO WORLD" };

const PizzaTranslator = () => {
  const [data, setData] = useState([dataModel]);
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 50,
    },
    item: {
      color: "red",
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
