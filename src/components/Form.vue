<template>
  <div class="form-wrapper">
    <form
      class="footer-form"
      action="https://formcarry.com/s/HhDnMI-5UW_"
      method="POST"
      accept-charset="UTF-8"
      id="sendForm"
      @submit.prevent="sendForm"
    >
      <Loader v-if="tempInfo.sending" />
      <div class="mb-1">
        <input
          type="name"
          name="name"
          class="form-control"
          id="inputName"
          aria-describedby="emailHelp"
          placeholder="Ваше имя"
          @change="setInfo"
          v-bind:value="this.tempInfo.name"
        />
      </div>
      <div class="mb-1">
        <input
          type="phone"
          name="phone"
          class="form-control"
          id="inputPhone"
          placeholder="Телефон"
          @change="setInfo"
          v-bind:value="this.tempInfo.phone"
        />
      </div>
      <div class="mb-1">
        <input
          type="email"
          class="form-control"
          name="email"
          id="inputEmail"
          placeholder="E-mail"
          @change="setInfo"
          v-bind:value="this.tempInfo.email"
        />
      </div>
      <div class="mb-1">
        <textarea
          name="text"
          class="form-control"
          id="inputText"
          placeholder="Ваш комментарий"
          rows="5"
          @change="setInfo"
          v-bind:value="this.tempInfo.text"
        ></textarea>
      </div>
      <div class="mb-2 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1"
          >Отправляя заявку, я даю согласие на
          <a href="#"
            >обработку своих персональных<br />
            данных</a
          >.<span>*</span></label
        >
      </div>
      <button type="submit" class="btn btn-submit btn-lg" id="form-submit">
        Свяжитесь с нами
      </button>
    </form>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
const URL = "https://formcarry.com/s/HhDnMI-5UW_";
export default {
  data() {
    return {
      tempInfo: {
        name: "",
        email: "",
        phone: "",
        text: "",
        sending: false
      }
    };
  },
  components: { Loader },
  methods: {
    toLocalStorage() {
      const name = document.getElementById("inputName");
      const email = document.getElementById("inputEmail");
      const phone = document.getElementById("inputPhone");
      const text = document.getElementById("inputText");
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("phone", phone.value);
      localStorage.setItem("text", text.value);
    },
    validateForm() {
      const name = document.getElementById("inputName").value;
      const email = document.getElementById("inputEmail").value;
      const phone = document.getElementById("inputPhone").value;
      const text = document.getElementById("inputText").value;
      if (name != "" && email != "" && phone != "" && text != "") {
        return true;
      } else {
        return {
          error: "Нельзя оставлять поля пустыми. Заполните форму корректно!"
        };
      }
    },
    async sendForm(e) {
      e.preventDefault();
      if (this.validateForm() == true) {
        const btn = document.getElementById("form-submit");
        const form = document.getElementById("sendForm");
        this.toLocalStorage();
        btn.disabled = true;
        this.tempInfo.sending = true;
        let formData = new FormData(form);
        let response = await fetch(URL, {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: formData
        });
        this.tempInfo.sending = false;
        let result = await response.json();
        if (response.ok) {
          alert("Запрос успешно обработан!");
        } else {
          alert("Произошла ошибка. Отправьте форму повторно!");
        }
        btn.disabled = false;
      } else {
        let err = this.validateForm();
        alert(err.error);
      }
    }
  },
  mounted() {
    const name = document.getElementById("inputName");
    const email = document.getElementById("inputEmail");
    const phone = document.getElementById("inputPhone");
    const text = document.getElementById("inputText");
    name.value = localStorage.getItem("name");
    email.value = localStorage.getItem("email");
    text.value = localStorage.getItem("text");
    phone.value = localStorage.getItem("phone");
  }
};
</script>

<style></style>
