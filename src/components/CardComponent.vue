<template>
    <v-container>
      <v-row>
        <v-col v-for="(card, index) in cards" :key="index" cols="6" md="6">
          <v-card
            :style="{ backgroundColor: selectedCard === index ? card.color : '#f0f0f0' }"
            @click="selectCard(index)"
            class="pa-4 d-flex flex-column align-center"
          >
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-text>{{ card.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    data() {
      return {
        cards: [
          { title: 'Card 1', description: 'Description for Card 1', color: '#ffcccc' },
          { title: 'Card 2', description: 'Description for Card 2', color: '#ccffcc' },
          { title: 'Card 3', description: 'Description for Card 3', color: '#ccccff' },
          { title: 'Card 4', description: 'Description for Card 4', color: '#ffffcc' }
        ],
        selectedCard: null // Biến lưu trữ chỉ số của thẻ đã chọn
      };
    },
    methods: {
      selectCard(index) {
        this.selectedCard = index; // Cập nhật thẻ đã chọn
      }
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .v-card:hover {
    transform: scale(1.05);
  }
  </style>
  