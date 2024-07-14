<template>
  <form @submit.prevent="submitHandler">
    <div>
      <label for="date">Date:</label>
      <input type="date" v-model="date" required />
    </div>
    <div>
      <label for="description">Description:</label>
      <input type="text" v-model="description" required />
    </div>
    <div>
      <label for="amount">Amount:</label>
      <input type="number" v-model="amount" required />
    </div>
    <div>
      <label for="vatAmount">VAT Amount:</label>
      <input type="number" v-model="vatAmount" required />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      date: '',
      description: '',
      amount: '',
      vatAmount: ''
    };
  },
  methods: {
    submitHandler() {
      const vatRecord = {
        date: this.date,
        description: this.description,
        amount: this.amount,
        vatAmount: this.vatAmount
      };

      axios.post('http://localhost:3000/api/vat', vatRecord)
        .then(response => {
          console.log(response.data);
          // Réinitialiser le formulaire ou afficher un message de succès
        });
    }
  }
};
</script>
