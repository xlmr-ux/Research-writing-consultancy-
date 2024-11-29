new Vue({
  el: '#app',
  data: {
    currentPage: 'home',
    disciplines: [
      "Computer Science", "Business", "Law", "Medicine", "Engineering",
      "Psychology", "Education", "History", "Sociology", "Philosophy",
      "Political Science", "Economics", "Biology", "Chemistry", "Physics",
      "Mathematics", "Statistics", "Art", "Literature", "Linguistics"
    ],
    educationRates: {
      "High School": 12,
      "Undergraduate": 20,
      "Postgraduate": 30
    },
    order: {
      discipline: "",
      education: "",
      pages: 1,
      instructions: "",
      files: []
    }
  },
  computed: {
    calculateCost() {
      const rate = this.educationRates[this.order.education] || 0;
      return rate * this.order.pages;
    }
  },
  methods: {
    handleFileUpload(event) {
      this.order.files = Array.from(event.target.files);
    },
    checkout() {
      alert(`Total cost: $${this.calculateCost}\nProceeding to payment gateway.`);
      // Integrate PayPal or bank card payment here
    }
  }
});
