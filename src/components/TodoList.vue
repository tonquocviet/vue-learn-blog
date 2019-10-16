<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div></div>
    <ul>
      <li
        v-for="(student, index) in listStudent" 
        :key="student.id" 
        @click="clickItem(student)">
        <div id="name" v-if="editIndex != index">{{student.name}}</div>
        <input v-else 
          v-model="student.name" 
          @keyup.enter="editItem(index)"
        />
        <button @click.prevent="startEditing(index)">Sửa Item</button>
        <button @click="deleteItem(index)">Xóa</button>
      </li>
    </ul>
    <form action="" @submit.stop.prevent="addItem(name)">
      <input id="name" type="text" v-model="name" name="name">
      <input type="submit">
    </form>
    <ButtonCounter message="Thời gian hiện tại là" @clickIncrement="inCrement"/>
    <div>ở component cha tăng lên: {{count}}</div>
    <h3>{{ reverseMessage }}</h3>
    <button @click="message.toUpperCase()">Click change Message with Computed</button>
    <hr/>
    <div>Computed example</div>
    <div>{{upperCaseText}}</div>
    <div>số a: {{tanga}}</div>
    <div>số b: {{tangb}}</div>
    <button @click="a++">Tăng a</button>
    <button @click="b++">Tăng b</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ButtonCounter from './components/ButtonCounter'

export default {
  components: {
    HelloWorld,
    ButtonCounter
  },
  data() {
    return {
      editIndex: -1,
      name: '',
      editName: '',
      listStudent: [
        {
          id: 1,
          name: 'Việt'
        },
        {
          id: 2,
          name: 'Phú'
        },
        {
          id: 3,
          name: 'Cường'
        }
      ],
      count: 0,
      message: 'HTActive',
      a: 0,
      b: 0,
      textLowerCase: 'This is Earch'
    }
  },
  computed: {
    tanga(){
      console.log('click tăng số a gọi ở computed');
      return this.a;
    },
    tangb(){
      console.log('click tăng số b gọi ở computed');
      return this.b;
    },
    reverseMessage(){
      return this.message;
    },
    upperCaseText(){
      return this.textLowerCase.toUpperCase();
    }
  },
  watch: {
    tanga(){
      console.log('watch biến a');
    },
    tangb(){
      console.log('watch biến b');
    },
    upperCaseText(){
      alert('textLowerCase đã được thay đổi thành upperCasse')
    }
  },
  methods: {
    inCrement(){
      this.count++;
    },
    startEditing(index) {
      this.editIndex = index
    },
    editItem(index) {
      if(this.listStudent[index].name == ''){
        alert('Không để trống')
      } else {
        let itemEdit = this.listStudent[index]
        itemEdit = this.listStudent[index]
        this.editIndex = -1
      }
    },
    clickItem(student){
      console.log('Click Item ' + student.name + ' !')
    },
    addItem(name){
      if(name == ''){
        alert('Không để trống')
      } else {
        let newItem = {
          id: Math.floor(Math.random() * 10000),
          name
        }
        this.listStudent.push(newItem)
        this.name = ''
      }
    },
    deleteItem(index){
      this.listStudent.splice(index, 1)
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
