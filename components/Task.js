import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.squareIcon}>

        </View>
        <Text style={styles.itemText}>
          {props.text}
        </Text>
      </View>
      <View style={styles.circularIcon}></View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({

  item: {
    backgroundColor: "#1E212B",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  squareIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#D8DBE2",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    color: "#F2F3F7",
    maxWidth: "80%",
    marginRight: 15,
  },
  circularIcon: {
    width: 12,
    height: 12,
    borderColor: "#A59132",
    borderWidth: 2,
    borderRadius: 5,
  }
})