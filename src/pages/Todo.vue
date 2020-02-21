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
    <div v-if="!tasks.length" class="no-task absolute-center">
      <q-icon name="check" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">ไม่มีรายการ</div>
    </div>
  </q-page>
</template>

<script>


export default {
  data() {
    return {
      newTask: "",
      tasks: [
        // { title: "Get bananas", done: false },
        // { title: "Eat bananas", done: false },
        // { title: "Poo bananas", done: false }
      ]
    };
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
.no-task{
  opacity: 0.5;
}
</style>