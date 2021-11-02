Vue.config.devtools = true;

const vueApp = new Vue({
  el: "#app",

  data: {
    inputText: "",
    itemsList: [
      {
        text: "fare la spesa",
      },
    ],
  },
  methods: {
    addNewItem() {
      if (this.inputText.trim() === "") {
        return;
      }
      const foundItem = this.itemsList.some((element) => {
        return (
          element.text.toLowerCase() === this.inputText.trim().toLowerCase()
        );
      });
      if (foundItem) {
        return;
      } else {
        this.itemsList.push({ text: this.inputText });
      }
    },
     deleteItem(i)  {
      this.itemsList.splice(i , 1);
    }
  },
  mounted(){
      const focusToDOList = document.getElementById("app");
      focusToDOList.focus();
  }
 
});

console.dir(vueApp);
