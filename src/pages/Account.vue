<template>
  <q-page class="bg-grey-3 column">
    <q-list class="bg-white" separator bordered>
      <div class="row q-pa-sm bg-primary">
        <q-input
          @keyup.enter="addTask"
          class="col"
          square
          filled
          v-model="newTask"
          placeholder="เพิ่มรายการ"
          bg-color="white"
          dense
        >
          <template v-slot:append>
            <q-btn @click="addTask" round dense flat icon="add" />
          </template>
        </q-input>
      </div>

      <q-item
        clickable
        @click="task.done!=task.done"
        v-for="(task,index) in tasks"
        :key="index"
        tag="label"
        v-ripple
        :class="{'done bg-blue-1':task.done}"
      >
        <q-item-section avatar>
          <q-checkbox class="no-pointer-events" v-model="task.done" val="teal" color="teal" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done">
          <q-btn @click.stop="deleteTask(index)" flat round color="primary" icon="card_giftcard" />
        </q-item-section>
      </q-item>
    </q-list>
     
    

<!-- 
<div class="q-pa-md" style="width: 100%">
    <q-toggle v-model="expanded" label="Expanded" class="q-mb-md" />
    
    <q-expansion-item
      v-model="expanded"
      icon="monetization_on"
      label="เงินสด"
      caption="1500.00 บาท"
    >
      <q-card>
        <q-card-section>

           <q-item-section >
            รายละเอียดบัญชี
          </q-item-section>
<br>
  <q-input
        filled
        v-model="name"
        label="Your name *"
      />
<br>
  <q-input
        filled
        type="number"
        v-model="money"
        label="Your Money"
      />

<br>
<br>

      <q-item-section >
            ประเภทบัญชี เงินสด
          </q-item-section>
<br>
  <q-input
        filled
        type="number"
        v-model="Total_money"
        label="Total Money"
      />

<br>



        </q-card-section>
        <div  class="q-pa-md" style="max-width: 1500px">
          <q-btn color="primary" label="Primary" style="width: 100%" />
        </div>
      </q-card>
    </q-expansion-item>
  </div>
 -->




  </q-page>
</template>


<script>
const Person_context = require("./../models/Person_context").default;
const Person_model = require("./../models/Person_model").default;

export default {
  data() {
    return {
      expanded: false,
      newTask: "",
      tasks: [
        // { title: "Get bananas", done: false },
        // { title: "Eat bananas", done: false },
        // { title: "Poo bananas", done: false }
      ]
    };
  },
  async mounted() {
    let personContext = await Person_context;
    let personModel = await Person_model;
    console.log("<--- debug class --->");
    // console.log(personContext);
    // console.log(personModel);
    await personContext.get_all_person();
    console.log(await personContext.persons);
    await personContext.persons.map(person => {
      console.log(person);
    });
    console.log("<--- debug class --->");
  },
  methods: {
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false
      });
      this.newTask = "";
    },
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete",
          cancel: true,
          persisten: true
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify("Task delete");
        });
    }
  }
};


</script>


<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbbbbb;
  }
}
.no-task {
  opacity: 0.5;
}



</style>