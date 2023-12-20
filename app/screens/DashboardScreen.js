// src/screens/DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DashboardScreen = () => {
  const availableBalance = 60000;

  const categories = [
    'Buyer',
    'Transfer',
    'Topup',
    'Electricity',
    'E-commerce',
    'Mobile Data',
    'Transportation',
    'TV & Internet',
    'Pharmacy',
    'Fuel',
    'Flight',
    'Food & Drink',
  ];

  return (
    <View style={styles.container}>
      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Available Balance</Text>
        <Text style={styles.balanceAmount}>${availableBalance}</Text>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryCard}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Cards Section */}
      <View style={styles.cardsSection}>
        {/* List of user cards */}
        <Text style={styles.sectionTitle}>My Cards</Text>
        {/* Display user cards here */}

        {/* Add Card Button */}
        <TouchableOpacity style={styles.addCardButton}>
          <Text style={styles.addCardButtonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  balanceCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
  },
  balanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    width: '48%',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardsSection: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addCardButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCardButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
